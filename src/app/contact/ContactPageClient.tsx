"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/* ------------------------------------------------------------------ */
/*  Form schema                                                        */
/* ------------------------------------------------------------------ */

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  profession: z.string().min(1, "Please select a profession"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

/* ------------------------------------------------------------------ */
/*  Hours data                                                         */
/* ------------------------------------------------------------------ */

const hours = [
  { day: "Mon", time: "9\u20137" },
  { day: "Tue", time: "9\u20138" },
  { day: "Wed", time: "8\u20139" },
  { day: "Thu\u2013Fri", time: "8\u201310" },
  { day: "Sat", time: "7\u20136" },
  { day: "Sun", time: "Closed" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function ContactPageClient() {
  return (
    <div className="bg-cream">
      {/* ---- Heading area ---- */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-display font-heading leading-heading tracking-tighter text-ink">
            Get in touch
          </h1>
          <p className="text-subtitle font-body font-light text-ink-light mt-4">
            Schedule a tour, ask a question, or start your lease.
          </p>
        </div>
      </section>

      {/* ---- Two-column layout ---- */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column — Contact info */}
          <div>
            <h2 className="text-subtitle font-heading text-ink">
              Brandi Williams, Property Manager
            </h2>

            <div className="mt-6 space-y-3 font-body text-body text-ink-light">
              <p>
                <a
                  href="tel:+14699178050"
                  className="hover:text-warm transition-colors link-draw"
                >
                  (469) 917-8050
                </a>
              </p>
              <p>
                <a
                  href="mailto:valleyranchsuitetours@gmail.com"
                  className="hover:text-warm transition-colors link-draw"
                >
                  valleyranchsuitetours@gmail.com
                </a>
              </p>
              <p>9425 N MacArthur Blvd, Suite 150, Irving, TX 75063</p>
            </div>

            <p className="mt-8 font-body font-light text-ink-light leading-body">
              Plaza Park Salon Suites is in the Valley Ranch area of Irving, off
              MacArthur Boulevard. From Highway 114, take the MacArthur
              Boulevard exit and head north. The building is on the right, just
              past the canal. Free parking is available in front of the building.
            </p>

            {/* Hours */}
            <div className="mt-8">
              <div className="space-y-1 font-body text-small text-ink-light">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between max-w-xs">
                    <span className="text-ink font-normal">{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 font-body text-small text-ink-muted italic">
                Suite holders have 24/7 access.
              </p>
            </div>
          </div>

          {/* Right column — Form */}
          <ContactForm />
        </div>
      </section>

      {/* ---- Map ---- */}
      <div className="mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.1!2d-96.9527!3d32.9174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDU1JzAyLjYiTiA5NsKwNTcnMDkuNyJX!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Plaza Park Salon Suites location"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact Form                                                       */
/* ------------------------------------------------------------------ */

function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "contact-page" }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-cream-dark rounded-soft p-8 text-center">
        <h3 className="text-subtitle font-heading text-ink mb-2">
          Message sent
        </h3>
        <p className="font-body text-small text-ink-light">
          Brandi will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 font-body text-small text-warm hover:underline cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full border border-ink-muted/30 bg-transparent rounded-subtle px-4 py-3 font-body text-body text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-warm transition-colors";
  const labelClass =
    "block font-body text-small font-normal text-ink mb-1.5";
  const errorClass = "text-small text-red-600 mt-1 font-body";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder="Your name"
          {...register("name")}
          className={inputClass}
        />
        {errors.name && (
          <p className={errorClass}>{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder="you@example.com"
          {...register("email")}
          className={inputClass}
        />
        {errors.email && (
          <p className={errorClass}>{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="contact-phone" className={labelClass}>
          Phone
        </label>
        <input
          id="contact-phone"
          type="tel"
          placeholder="(555) 123-4567"
          {...register("phone")}
          className={inputClass}
        />
      </div>

      {/* Profession */}
      <div>
        <label htmlFor="contact-profession" className={labelClass}>
          Profession
        </label>
        <select
          id="contact-profession"
          {...register("profession")}
          defaultValue=""
          className={`${inputClass} appearance-none`}
        >
          <option value="" disabled>
            Select your profession
          </option>
          <option value="hairstylist">Hairstylist</option>
          <option value="barber">Barber</option>
          <option value="esthetician">Esthetician</option>
          <option value="lash-artist">Lash Artist</option>
          <option value="makeup-artist">Makeup Artist</option>
          <option value="nail-tech">Nail Technician</option>
          <option value="massage-therapist">Massage Therapist</option>
          <option value="chiropractor">Chiropractor</option>
          <option value="other">Other</option>
        </select>
        {errors.profession && (
          <p className={errorClass}>{errors.profession.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell us what you're looking for..."
          {...register("message")}
          className={`${inputClass} resize-y`}
        />
        {errors.message && (
          <p className={errorClass}>{errors.message.message}</p>
        )}
      </div>

      {/* Error banner */}
      {status === "error" && (
        <p className="font-body text-small text-red-600">
          Something went wrong. Please try again or call (469) 917-8050
          directly.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-ink text-cream font-body text-body py-3 rounded-subtle hover:bg-ink-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
