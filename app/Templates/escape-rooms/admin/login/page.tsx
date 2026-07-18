"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError("");
    const res = await fetch("/Templates/escape-rooms/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setPending(false);
    if (res.ok) {
      router.push("/Templates/escape-rooms/admin");
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "رمز عبور اشتباه است");
    }
  }

  return (
    <div className="moraba-Font min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100/80 p-4" dir="rtl">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
            <Lock size={30} className="text-white" />
          </div>
          <h1 className="text-2xl font-black text-gray-900">ورود به پنل مدیریت</h1>
          <p className="text-gray-500 text-sm mt-1">لطفاً رمز عبور را وارد کنید</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              رمز عبور
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="رمز عبور را وارد کنید"
              className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50/50 text-black"
              required
            />
          </div>

          {error && (
            <div className="bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-2xl px-4 py-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-2xl font-bold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <Lock size={18} />
            {pending ? "در حال بررسی..." : "ورود"}
          </button>
        </form>
      </div>
    </div>
  );
}
