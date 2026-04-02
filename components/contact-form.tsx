"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 200, damping: 24 };

const fieldClass =
  "rounded-xl border border-white/10 bg-white/75 px-4 py-3 text-sm text-zinc-900 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] placeholder:text-zinc-500 focus:border-teal-600/45 focus:ring-2 focus:ring-teal-600/20 dark:border-white/10 dark:bg-zinc-950/40 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] dark:focus:border-teal-400/40 dark:focus:ring-teal-400/20";

const labelClass = "text-sm font-medium text-zinc-800 dark:text-zinc-300";

function validateEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Vui lòng nhập họ tên";
    if (!email.trim()) next.email = "Vui lòng nhập email";
    else if (!validateEmail(email)) next.email = "Email không hợp lệ";
    if (!message.trim()) next.message = "Vui lòng nhập nội dung";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("loading");
    window.setTimeout(() => {
      setStatus("success");
    }, 850);
  }

  return (
    <div className="rounded-[2rem] bg-black/5 p-1.5 ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10">
      <motion.form
        onSubmit={submit}
        className="rounded-[calc(2rem-0.375rem)] border border-white/10 bg-white/95 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] md:p-10 dark:border-white/[0.08] dark:bg-zinc-900/35 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
        layout
        transition={spring}
      >
        <div className="grid gap-6">
        <div className="grid gap-2">
          <label htmlFor="name" className={labelClass}>
            Họ và tên
          </label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
            placeholder="Nguyễn Văn A"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="text-xs text-red-600 dark:text-red-400/90">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldClass}
            placeholder="ten@domain.vn"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="text-xs text-red-600 dark:text-red-400/90">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div className="grid gap-2">
          <label htmlFor="phone" className={labelClass}>
            Điện thoại
          </label>
          <input
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={fieldClass}
            placeholder="0707 806 860"
            autoComplete="tel"
          />
          <p className="text-xs text-zinc-500 dark:text-zinc-600">
            Tuỳ chọn — giúp ICS phản hồi nhanh hơn.
          </p>
        </div>
        <div className="grid gap-2">
          <label htmlFor="message" className={labelClass}>
            Nội dung
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className={`resize-y ${fieldClass}`}
            placeholder="Mô tả nhu cầu tư vấn hoặc hợp tác"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message ? (
            <p id="message-error" className="text-xs text-red-600 dark:text-red-400/90">
              {errors.message}
            </p>
          ) : null}
        </div>
        </div>

      {status === "success" ? (
        <p className="mt-6 rounded-xl border border-teal-600/30 bg-teal-600/10 px-4 py-3 text-sm text-teal-950 dark:border-teal-400/25 dark:bg-teal-400/10 dark:text-teal-100">
          Đã ghi nhận yêu cầu. Đội ICS sẽ liên hệ trong giờ làm việc.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-8 w-full rounded-full border border-teal-800/55 bg-teal-800 py-3.5 text-sm font-semibold text-zinc-50 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-teal-900 hover:bg-teal-900 disabled:cursor-not-allowed disabled:opacity-60 active:translate-y-px active:scale-[0.99] dark:border-teal-400/40 dark:bg-teal-400/15 dark:text-teal-50 dark:hover:border-teal-300/55 dark:hover:bg-teal-400/22 md:w-auto md:px-10"
      >
        {status === "loading" ? "Đang gửi…" : "Gửi liên hệ"}
      </button>
      </motion.form>
    </div>
  );
}
