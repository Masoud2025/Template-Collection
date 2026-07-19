import Link from "next/link";
import { BASE } from "./data/movies";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-7xl font-black text-white/10">۴۰۴</p>
      <h1 className="mt-4 text-2xl font-black text-white sm:text-3xl">
        صفحه مورد نظر پیدا نشد
      </h1>
      <p className="mt-3 max-w-md text-neutral-400">
        متأسفانه صفحه‌ای که به دنبال آن بودید وجود ندارد یا حذف شده است.
      </p>
      <Link
        href={`${BASE}`}
        className="mt-8 rounded-full bg-white px-7 py-3 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-neutral-200"
      >
        بازگشت به خانه
      </Link>
    </div>
  );
}
