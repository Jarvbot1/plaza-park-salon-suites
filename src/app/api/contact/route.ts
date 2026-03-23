import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// ---------------------------------------------------------------------------
// Rate limiting (in-memory, per-instance)
// ---------------------------------------------------------------------------
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) {
    return true;
  }

  entry.count += 1;
  return false;
}

// ---------------------------------------------------------------------------
// Validation schema
// ---------------------------------------------------------------------------
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().optional(),
  profession: z.string().optional(),
  timeline: z.string().optional(),
  specialist: z.string().optional(),
});

// ---------------------------------------------------------------------------
// CORS helpers
// ---------------------------------------------------------------------------
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// ---------------------------------------------------------------------------
// Handlers
// ---------------------------------------------------------------------------

export async function OPTIONS() {
  return NextResponse.json(null, { status: 204, headers: corsHeaders });
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: corsHeaders },
      );
    }

    // Parse & validate
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        { error: "Validation failed", details: errors },
        { status: 400, headers: corsHeaders },
      );
    }

    // Forward to webhook if configured
    const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...result.data,
            submittedAt: new Date().toISOString(),
            source: "plaza-park-contact-form",
          }),
        });
      } catch {
        // Webhook failure should not block the response
        console.error("[contact] Webhook delivery failed");
      }
    }

    return NextResponse.json({ success: true }, { headers: corsHeaders });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400, headers: corsHeaders },
    );
  }
}
