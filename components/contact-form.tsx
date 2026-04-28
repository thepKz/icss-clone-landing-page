"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 200, damping: 26 };

const fieldClass =
  "w-full min-h-[44px] rounded-xl border border-zinc-200/90 bg-white px-4 py-3 text-sm text-zinc-900 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-[border-color,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] placeholder:text-zinc-400 focus:border-teal-700/50 focus:ring-2 focus:ring-teal-600/18 dark:border-white/[0.12] dark:bg-zinc-950/85 dark:text-zinc-100 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] dark:placeholder:text-zinc-500 dark:focus:border-teal-400/45 dark:focus:ring-teal-400/18";

const intentOptions = [
  { value: "", label: "Chọn nhu cầu của bạn" },
  { value: "demo-ai-soc", label: "Đặt lịch demo AI SOC" },
  { value: "tu-van-giai-phap", label: "Tư vấn giải pháp theo ngành" },
  { value: "bao-gia", label: "Yêu cầu báo giá" },
  { value: "pentest", label: "Đặt lịch kiểm thử xâm nhập (Pentest)" },
  { value: "hop-tac", label: "Hợp tác đối tác" },
] as const;

const labelClass =
  "text-sm font-medium text-zinc-800 dark:text-zinc-200";

function validateEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

type ContactFormProps = {
  /** Prefill message (e.g. from `/lien-he?vi-tri=...` when applying from careers). */
  initialMessage?: string;
  /** Pre-select intent from URL `?loai=` param. */
  initialLoai?: string;
};

export function ContactForm({ initialMessage = "", initialLoai = "" }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [intent, setIntent] = useState(initialLoai);
  const [message, setMessage] = useState(initialMessage);
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
    <div className="rounded-[2rem] bg-zinc-200/40 p-1.5 ring-1 ring-zinc-300/60 dark:bg-white/[0.04] dark:ring-white/10">
      <motion.form
        onSubmit={submit}
        className="rounded-[calc(2rem-0.375rem)] border border-zinc-200/90 bg-white p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] md:p-10 dark:border-white/[0.08] dark:bg-zinc-900/70 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
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
          <p className="text-xs text-zinc-500 dark:text-zinc-300">
            Tuỳ chọn — giúp ICS phản hồi nhanh hơn.
          </p>
        </div>
        <div className="grid gap-2">
          <label htmlFor="intent" className={labelClass}>
            Nhu cầu của bạn
          </label>
          <select
            id="intent"
            name="intent"
            value={intent}
            onChange={(e) => setIntent(e.target.value)}
            className={`cursor-pointer appearance-none ${fieldClass}`}
            aria-label="Chọn loại yêu cầu"
          >
            {intentOptions.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                {opt.label}
              </option>
            ))}
          </select>
          <p className="text-xs text-zinc-500 dark:text-zinc-300">
            Giúp đội ICS chuẩn bị thông tin phù hợp trước khi liên hệ lại.
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
        <p className="mt-6 rounded-xl border border-teal-600/35 bg-teal-50 px-4 py-3 text-sm text-teal-950 dark:border-teal-400/30 dark:bg-teal-950/50 dark:text-teal-100">
          Đã ghi nhận yêu cầu. Đội ICS sẽ liên hệ trong giờ làm việc.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-8 w-full rounded-full bg-teal-800 py-3.5 text-sm font-semibold text-white transition-[transform,opacity,background-color,border-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-teal-900 disabled:cursor-not-allowed disabled:opacity-60 active:translate-y-px active:scale-[0.99] dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400 md:w-auto md:min-w-[200px] md:px-10"
      >
        {status === "loading" ? "Đang gửi…" : "Gửi liên hệ"}
      </button>
      <p className="mt-6 text-center text-xs leading-relaxed text-zinc-500 dark:text-zinc-300 md:text-left">
        Gửi biểu mẫu đồng nghĩa bạn đã xem{" "}
        <Link href="/chinh-sach-bao-mat" className="font-medium text-teal-800 underline-offset-2 hover:underline dark:text-cyan-300">
          chính sách xử lý dữ liệu
        </Link>
        .
      </p>
      </motion.form>
    </div>
  );
}
