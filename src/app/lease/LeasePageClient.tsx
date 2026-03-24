"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Arrow } from "@/components/Arrow";

// ============================================================
// FORM SCHEMA
// ============================================================

const leaseInquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-\(\)\+]+$/, "Please enter a valid phone number"),
  profession: z.string().min(1, "Please select a profession"),
  message: z.string().optional(),
});

type LeaseInquiryData = z.infer<typeof leaseInquirySchema>;

// ============================================================
// COMPONENT
// ============================================================

export function LeasePageClient() {
  return (
    <div className="bg-cream min-h-screen">
      {/* ── Hero ── */}
      <section className="bg-cream-dark py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-small uppercase tracking-wide text-ink-muted font-body mb-4">
            Plaza Park Salon Suites — Valley Ranch, TX
          </p>
          <h1 className="text-display font-heading text-ink leading-heading tracking-tighter">
            Move in this week.
          </h1>
        </div>
      </section>

      {/* ── Prose ── */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12">
        <div className="space-y-6 font-body font-light text-ink-light leading-body">
          <p>
            Every suite at Plaza Park comes move-in ready. Electricity, water,
            high-speed WiFi, and on-site parking are included in your lease — no
            surprise bills, no splitting utilities with a landlord. Each suite is
            fitted with a professional styling station, shampoo bowl,
            and built-in storage so you can start seeing clients the same week
            you sign. The building offers 24/7 key-card access, meaning your
            schedule is yours alone — early mornings, late evenings, Sundays,
            holidays.
          </p>
          <p>
            Lease terms are flexible. There is no long-term commitment tying you
            down for years, and no hidden fees buried in fine print. We work with
            hair stylists, barbers, estheticians, lash technicians, nail techs,
            massage therapists, chiropractors, and makeup artists — anyone who
            needs a private, professional space to run their business. New
            tenants receive a four-week signing bonus: your first month of rent,
            on us. That is four weeks to build your book, settle in, and make the
            suite your own before a single payment is due.
          </p>
        </div>
      </section>

      {/* ── Suite Details Table ── */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <table className="w-full border-collapse text-left font-body text-small">
          <thead>
            <tr className="border-b border-cream-dark">
              <th className="py-3 pr-6 font-medium text-ink">Feature</th>
              <th className="py-3 font-medium text-ink">Detail</th>
            </tr>
          </thead>
          <tbody className="text-ink-light">
            <tr className="border-b border-cream-dark">
              <td className="py-3 pr-6 font-medium text-ink">Suite Size</td>
              <td className="py-3">150 &ndash; 300 sq ft (varies)</td>
            </tr>
            <tr className="border-b border-cream-dark">
              <td className="py-3 pr-6 font-medium text-ink">Included</td>
              <td className="py-3">
                Styling station, shampoo bowl, storage
              </td>
            </tr>
            <tr className="border-b border-cream-dark">
              <td className="py-3 pr-6 font-medium text-ink">Utilities</td>
              <td className="py-3">
                Electricity, water, WiFi — all included
              </td>
            </tr>
            <tr className="border-b border-cream-dark">
              <td className="py-3 pr-6 font-medium text-ink">Access</td>
              <td className="py-3">24/7 key access, free parking</td>
            </tr>
            <tr className="border-b border-cream-dark">
              <td className="py-3 pr-6 font-medium text-ink">Terms</td>
              <td className="py-3">
                Flexible lease terms, no long-term commitment
              </td>
            </tr>
            <tr>
              <td className="py-3 pr-6 font-medium text-ink">Signing Bonus</td>
              <td className="py-3">Four weeks free on new leases</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ── 3-Step Process ── */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <ol className="space-y-8">
          <li className="flex gap-6">
            <span className="text-title font-heading text-warm leading-none shrink-0">
              01
            </span>
            <div>
              <p className="font-body font-medium text-ink mb-1">
                Schedule a tour
              </p>
              <p className="font-body font-light text-ink-light leading-body text-small">
                See the space, meet Brandi, pick your suite.
              </p>
            </div>
          </li>
          <li className="flex gap-6">
            <span className="text-title font-heading text-warm leading-none shrink-0">
              02
            </span>
            <div>
              <p className="font-body font-medium text-ink mb-1">
                Sign your lease
              </p>
              <p className="font-body font-light text-ink-light leading-body text-small">
                Flexible terms. Move in as early as next week.
              </p>
            </div>
          </li>
          <li className="flex gap-6">
            <span className="text-title font-heading text-warm leading-none shrink-0">
              03
            </span>
            <div>
              <p className="font-body font-medium text-ink mb-1">
                Open your doors
              </p>
              <p className="font-body font-light text-ink-light leading-body text-small">
                Everything&rsquo;s ready. Just bring your tools.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* ── Inquiry Form ── */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-title font-heading text-ink mb-8">
          Inquire about a suite
        </h2>
        <LeaseInquiryForm />
      </section>

      {/* ── Contact Line ── */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <p className="font-body text-small text-ink-muted">
          Questions? Call{" "}
          <a
            href="tel:+14699178050"
            className="link-draw text-ink-light"
          >
            (469) 917-8050
          </a>{" "}
          or email{" "}
          <a
            href="mailto:valleyranchsuitetours@gmail.com"
            className="link-draw text-ink-light"
          >
            valleyranchsuitetours@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}

// ============================================================
// LEASE INQUIRY FORM
// ============================================================

function LeaseInquiryForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeaseInquiryData>({
    resolver: zodResolver(leaseInquirySchema),
  });

  async function onSubmit(data: LeaseInquiryData) {
    setSubmitStatus("loading");
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          serviceType: data.profession,
          notes: data.message ?? "",
          source: "lease-page",
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    }
  }

  const inputClasses =
    "w-full py-3 px-4 font-body text-small text-ink bg-transparent border border-[rgba(44,37,32,0.15)] rounded-[4px] placeholder:text-ink-muted focus:outline-none focus:border-warm transition-colors";
  const labelClasses =
    "block text-small font-medium text-ink-light font-body mb-2";
  const errorClasses = "text-red-600 text-label font-body mt-1";

  if (submitStatus === "success") {
    return (
      <div className="py-12 text-center">
        <p className="text-subtitle font-heading text-ink mb-2">
          Thank you.
        </p>
        <p className="font-body text-small text-ink-light">
          We received your inquiry and will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="lease-name" className={labelClasses}>
            Name
          </label>
          <input
            id="lease-name"
            type="text"
            placeholder="Jane Doe"
            className={inputClasses}
            {...register("name")}
          />
          {errors.name && (
            <p className={errorClasses}>{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="lease-email" className={labelClasses}>
            Email
          </label>
          <input
            id="lease-email"
            type="email"
            placeholder="jane@example.com"
            className={inputClasses}
            {...register("email")}
          />
          {errors.email && (
            <p className={errorClasses}>{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="lease-phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="lease-phone"
            type="tel"
            placeholder="(555) 555-1234"
            className={inputClasses}
            {...register("phone")}
          />
          {errors.phone && (
            <p className={errorClasses}>{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="lease-profession" className={labelClasses}>
            Profession
          </label>
          <select
            id="lease-profession"
            className={`${inputClasses} appearance-none`}
            defaultValue=""
            {...register("profession")}
          >
            <option value="" disabled>
              Select your profession
            </option>
            <option value="Hair Stylist">Hair Stylist</option>
            <option value="Barber">Barber</option>
            <option value="Esthetician">Esthetician</option>
            <option value="Lash Technician">Lash Technician</option>
            <option value="Nail Technician">Nail Technician</option>
            <option value="Massage Therapist">Massage Therapist</option>
            <option value="Chiropractor">Chiropractor</option>
            <option value="Makeup Artist">Makeup Artist</option>
            <option value="Other">Other</option>
          </select>
          {errors.profession && (
            <p className={errorClasses}>{errors.profession.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="lease-message" className={labelClasses}>
          Message (optional)
        </label>
        <textarea
          id="lease-message"
          rows={4}
          placeholder="Tell us about your business or ask a question..."
          className={`${inputClasses} resize-none`}
          {...register("message")}
        />
      </div>

      {submitStatus === "error" && (
        <p className="text-red-600 text-small font-body">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={submitStatus === "loading"}
        className="inline-flex items-center gap-2 bg-warm text-cream rounded-[4px] px-6 py-3 font-body text-small tracking-wide uppercase transition-colors hover:bg-warm-hover disabled:opacity-60 cursor-pointer"
      >
        {submitStatus === "loading" ? "Sending..." : "Send inquiry"}
        <Arrow className="w-3.5 h-3.5" />
      </button>
    </form>
  );
}
