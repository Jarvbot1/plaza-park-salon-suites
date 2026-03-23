"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Arrow } from "@/components/Arrow";

const messageSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type MessageData = z.infer<typeof messageSchema>;

export function SpecialistProfileClient({
  specialistName,
}: {
  specialistName: string;
}) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MessageData>({
    resolver: zodResolver(messageSchema),
  });

  async function onSubmit(data: MessageData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          notes: `[Message for ${specialistName}] ${data.message}`,
          source: "specialist-profile",
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full py-3 px-4 font-body text-small text-ink bg-transparent border border-[rgba(44,37,32,0.15)] rounded-[4px] placeholder:text-ink-muted focus:outline-none focus:border-warm transition-colors";
  const labelClasses =
    "block text-small font-medium text-ink-light font-body mb-2";
  const errorClasses = "text-red-600 text-label font-body mt-1";

  if (status === "success") {
    return (
      <div className="py-8">
        <p className="font-body text-small text-ink-light">
          Message sent. We will pass it along to {specialistName.split(" ")[0]}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-lg">
      <div>
        <label htmlFor="contact-name" className={labelClasses}>
          Your name
        </label>
        <input
          id="contact-name"
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
        <label htmlFor="contact-email" className={labelClasses}>
          Your email
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder="jane@example.com"
          className={inputClasses}
          {...register("email")}
        />
        {errors.email && (
          <p className={errorClasses}>{errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="contact-message"
          rows={4}
          placeholder={`Ask ${specialistName.split(" ")[0]} a question or request an appointment...`}
          className={`${inputClasses} resize-none`}
          {...register("message")}
        />
        {errors.message && (
          <p className={errorClasses}>{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-red-600 text-small font-body">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 bg-warm text-cream rounded-[4px] px-6 py-3 font-body text-small tracking-wide uppercase transition-colors hover:bg-warm-hover disabled:opacity-60 cursor-pointer"
      >
        {status === "loading" ? "Sending..." : "Send message"}
        <Arrow className="w-3.5 h-3.5" />
      </button>
    </form>
  );
}
