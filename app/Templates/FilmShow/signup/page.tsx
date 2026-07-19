import AuthForm from "../components/AuthForm";
import { UserPlus } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="animate-fade-in bg-gradient-to-b from-neutral-950 to-black">
      <div className="mx-auto flex max-w-md flex-col px-4 py-14 sm:px-6 sm:py-24">
        <div className="mb-8 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30">
            <UserPlus className="h-7 w-7" />
          </span>
          <h1 className="mt-5 text-3xl font-black text-white">عضویت در فیلم‌بین</h1>
          <p className="mt-2 text-sm text-neutral-400">
            حساب کاربری بسازید و دنیای فیلم و سریال را کشف کنید.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-8">
          <AuthForm mode="signup" />
        </div>
      </div>
    </div>
  );
}
