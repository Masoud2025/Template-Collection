"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, User, Check } from "lucide-react";
import { BASE } from "../data/movies";

type Props = {
  mode: "signup" | "login";
};

const AuthForm = ({ mode }: Props) => {
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-white">با موفقیت انجام شد</h3>
        <p className="mt-2 text-sm text-neutral-400">
          {mode === "signup"
            ? "حساب کاربری شما ایجاد شد. حالا می‌توانید اشتراک تهیه کنید."
            : "با موفقیت وارد شدید."}
        </p>
        <Link
          href={`${BASE}/subscribe`}
          className="mt-6 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-black transition-all hover:scale-105"
        >
          تهیه اشتراک
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {mode === "signup" && (
        <div className="relative">
          <User className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
          <input
            type="text"
            required
            placeholder="نام کاربری"
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pr-12 pl-4 text-white placeholder-neutral-500 outline-none transition focus:border-amber-400/50 focus:bg-white/10"
          />
        </div>
      )}

      <div className="relative">
        <Mail className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
        <input
          type="email"
          required
          placeholder="ایمیل"
          className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pr-12 pl-4 text-white placeholder-neutral-500 outline-none transition focus:border-amber-400/50 focus:bg-white/10"
        />
      </div>

      <div className="relative">
        <Lock className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
        <input
          type={show ? "text" : "password"}
          required
          placeholder="رمز عبور"
          className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pr-12 pl-12 text-white placeholder-neutral-500 outline-none transition focus:border-amber-400/50 focus:bg-white/10"
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 transition hover:text-white"
          aria-label="نمایش رمز"
        >
          {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-white py-3.5 text-sm font-bold text-black shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-200"
      >
        {mode === "signup" ? "ایجاد حساب کاربری" : "ورود"}
      </button>

      <p className="text-center text-sm text-neutral-400">
        {mode === "signup" ? (
          <>
            قبلاً ثبت‌نام کرده‌اید؟{" "}
            <Link href={`${BASE}/signup?mode=login`} className="font-semibold text-amber-400 hover:underline">
              ورود
            </Link>
          </>
        ) : (
          <>
            حساب کاربری ندارید؟{" "}
            <Link href={`${BASE}/signup`} className="font-semibold text-amber-400 hover:underline">
              ثبت‌نام
            </Link>
          </>
        )}
      </p>
    </form>
  );
};

export default AuthForm;
