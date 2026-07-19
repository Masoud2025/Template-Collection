import ContentPage from "../components/ContentPage";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <ContentPage
      title="تماس با ما"
      description="ما همیشه آماده شنیدن نظرات و پیشنهادهای شما هستیم"
    >
      <p>
        اگر سوالی دارید یا با مشکلی در استفاده از سرویس روبرو شده‌اید، از راه‌های
        زیر با تیم پشتیبانی فیلم‌بین در ارتباط باشید.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <Mail className="h-6 w-6 text-amber-400" />
          <p className="mt-3 font-semibold text-white">ایمیل</p>
          <p className="text-sm text-neutral-400">info@filmbetween.com</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <Phone className="h-6 w-6 text-amber-400" />
          <p className="mt-3 font-semibold text-white">تلفن</p>
          <p className="text-sm text-neutral-400">۰۲۱-۱۲۳۴-۵۶۷۸</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <MapPin className="h-6 w-6 text-amber-400" />
          <p className="mt-3 font-semibold text-white">آدرس</p>
          <p className="text-sm text-neutral-400">تهران، خیابان ولیعصر، پلاک ۱۲</p>
        </div>
      </div>
      <p className="text-neutral-400">
        ساعات پاسخگویی: شنبه تا پنج‌شنبه، ۹ صبح تا ۹ شب.
      </p>
    </ContentPage>
  );
}
