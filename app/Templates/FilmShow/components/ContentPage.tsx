import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BASE } from "../data/movies";

type Props = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

const ContentPage = ({ title, description, children }: Props) => {
  return (
    <div className="animate-fade-in bg-gradient-to-b from-neutral-950 to-black">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <Link
          href={`${BASE}`}
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-white"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
          بازگشت به خانه
        </Link>
        <div className="mb-2 h-1 w-16 rounded-full bg-gradient-to-l from-amber-400 to-orange-500" />
        <h1 className="text-3xl font-black text-white sm:text-4xl">{title}</h1>
        {description && (
          <p className="mt-3 text-base leading-relaxed text-neutral-400">
            {description}
          </p>
        )}
        <article className="prose-invert mt-10 space-y-5 text-[15px] leading-8 text-neutral-300">
          {children}
        </article>
      </div>
    </div>
  );
};

export default ContentPage;
