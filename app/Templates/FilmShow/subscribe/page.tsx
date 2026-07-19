import Link from "next/link";
import { Check, Sparkles, Crown, Star } from "lucide-react";
import { BASE } from "../data/movies";

const plans = [
  {
    name: "ماهانه",
    price: "۴۹",
    period: "هزار تومان / ماه",
    features: ["دسترسی به همه فیلم‌ها", "کیفیت HD", "۱ دستگاه همزمان", "لغو آزاد"],
    cta: "انتخاب ماهانه",
    highlight: false,
  },
  {
    name: "سالانه",
    price: "۳۹۰",
    period: "هزار تومان / سال",
    badge: "بیشترین صرفه‌جویی",
    features: [
      "دسترسی نامحدود",
      "کیفیت 4K و DV",
      "۴ دستگاه همزمان",
      "دانلود آفلاین",
      "بدون تبلیغات",
    ],
    cta: "انتخاب سالانه",
    highlight: true,
  },
  {
    name: "خانوادگی",
    price: "۵۹۰",
    period: "هزار تومان / سال",
    features: [
      "همه ویژگی‌های سالانه",
      "۶ دستگاه همزمان",
      "پروفایل کودک",
      "کتابخانه اختصاصی",
    ],
    cta: "انتخاب خانوادگی",
    highlight: false,
  },
];

export default function SubscribePage() {
  return (
    <div className="animate-fade-in bg-gradient-to-b from-neutral-950 via-black to-black">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-semibold text-amber-400">
            <Sparkles className="h-4 w-4" />
            پیشنهاد ویژه
          </span>
          <h1 className="mt-5 text-3xl font-black text-white sm:text-5xl">
            اشتراکی متناسب با شما
          </h1>
          <p className="mt-4 text-base text-neutral-400">
            با اولین ماه رایگان، بی‌نهایت فیلم و سریال با کیفیت ۴K تماشا کنید.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                plan.highlight
                  ? "border-amber-400/40 bg-gradient-to-b from-amber-500/10 to-transparent shadow-2xl shadow-amber-500/10"
                  : "border-white/10 bg-white/[0.03] hover:border-white/25"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 right-6 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-black">
                  {plan.badge}
                </span>
              )}
              <div className="mb-4 flex items-center gap-2">
                {plan.highlight ? (
                  <Crown className="h-5 w-5 text-amber-400" />
                ) : (
                  <Star className="h-5 w-5 text-neutral-400" />
                )}
                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                <span className="mr-1 text-sm text-neutral-400">{plan.period}</span>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-neutral-300">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={`${BASE}/signup`}
                className={`mt-auto rounded-xl py-3.5 text-center text-sm font-bold transition-all duration-300 hover:scale-[1.02] ${
                  plan.highlight
                    ? "bg-amber-500 text-black hover:bg-amber-400"
                    : "bg-white text-black hover:bg-neutral-200"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-neutral-500">
          با ثبت‌نام در فیلم‌بین، شرایط و قوانین استفاده را می‌پذیرید.
        </p>
      </div>
    </div>
  );
}
