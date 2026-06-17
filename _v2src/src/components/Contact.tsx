import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { useCursor } from "../hooks/useCursor";

type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
  required?: boolean;
};

const fields: Field[] = [
  { name: "name", label: "Your name", type: "text", placeholder: "Jordan Rivera", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "you@organization.org", required: true },
  { name: "org", label: "School / organization", type: "text", placeholder: "Optional" },
  {
    name: "message",
    label: "Tell me about your group",
    type: "textarea",
    placeholder: "Who’s the audience, roughly how many, and what you’re hoping they walk away with…",
    required: true,
  },
];

export default function Contact() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [focused, setFocused] = useState<string>("");
  const { hoverProps } = useCursor();

  const update = (name: string, v: string) =>
    setValues((prev) => ({ ...prev, [name]: v }));

  const submit = () => {
    const subject = encodeURIComponent(
      `Workshop inquiry — ${values.name || "New inquiry"}${
        values.org ? ` (${values.org})` : ""
      }`
    );
    const body = encodeURIComponent(
      `Name: ${values.name || ""}\nEmail: ${values.email || ""}\nOrganization: ${
        values.org || ""
      }\n\n${values.message || ""}`
    );
    window.location.href = `mailto:sheldon.julia@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submit();
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-edge">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Left — the pitch */}
          <div>
            <p className="eyebrow mb-6">Let’s talk</p>
            <h2 className="text-balance font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Let’s talk about{" "}
              <span className="spectrum-text animate-shimmer">the talk.</span>
            </h2>
            <p className="mt-8 max-w-md text-pretty text-lg text-ink/70">
              Booking a workshop, planning a program, or just have questions?
              Tell me about your group and I’ll get back to you within two
              business days.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:sheldon.julia@gmail.com"
                {...hoverProps}
                className="link-underline inline-block font-display text-2xl font-bold tracking-tight sm:text-3xl"
              >
                sheldon.julia@gmail.com
              </a>
              <p className="text-sm text-ink/55">
                she/her · based in Waterloo, Ontario · available in-person &amp;
                virtually
              </p>
            </div>
          </div>

          {/* Right — the form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-ink/12 bg-paper-warm/50 p-7 backdrop-blur-sm sm:p-10"
          >
            <div className="space-y-7">
              {fields.map((field) => {
                const active = focused === field.name || !!values[field.name];
                return (
                  <div key={field.name} className="relative">
                    <label
                      htmlFor={field.name}
                      className={`pointer-events-none absolute left-0 origin-left font-medium text-ink/50 transition-all duration-300 ease-expo ${
                        active
                          ? "-top-0.5 text-xs tracking-wide text-ink/45"
                          : "top-7 text-base"
                      }`}
                    >
                      {field.label}
                      {field.required && <span className="text-coral"> *</span>}
                    </label>

                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        required={field.required}
                        rows={4}
                        value={values[field.name] || ""}
                        placeholder={active ? field.placeholder : ""}
                        onFocus={() => setFocused(field.name)}
                        onBlur={() => setFocused("")}
                        onChange={(e) => update(field.name, e.target.value)}
                        {...hoverProps}
                        className="w-full resize-none border-b border-ink/20 bg-transparent pb-3 pt-7 text-ink outline-none transition-colors duration-300 placeholder:text-ink/30 focus:border-ink"
                      />
                    ) : (
                      <input
                        id={field.name}
                        type={field.type}
                        required={field.required}
                        value={values[field.name] || ""}
                        placeholder={active ? field.placeholder : ""}
                        onFocus={() => setFocused(field.name)}
                        onBlur={() => setFocused("")}
                        onChange={(e) => update(field.name, e.target.value)}
                        {...hoverProps}
                        className="w-full border-b border-ink/20 bg-transparent pb-3 pt-7 text-ink outline-none transition-colors duration-300 placeholder:text-ink/30 focus:border-ink"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex items-center justify-between gap-4">
              <p className="max-w-[12rem] text-xs text-ink/45">
                Opens your email app, pre-filled and ready to send.
              </p>
              <MagneticButton variant="solid" onClick={submit}>
                Send it to Auntie Julia
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </MagneticButton>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
