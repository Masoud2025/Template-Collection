import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  accent?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
};

const SectionHeader = ({
  title,
  subtitle,
  icon,
  accent = "bg-amber-500/15 text-amber-400 ring-amber-500/30",
  viewAllHref,
  viewAllLabel = "مشاهده همه",
}: Props) => {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div className="flex items-center gap-3">
        {icon && (
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-xl ring-1 ${accent}`}
          >
            {icon}
          </span>
        )}
        <div>
          <h1 className="text-2xl font-black text-white sm:text-3xl">{title}</h1>
          {subtitle && (
            <p className="mt-0.5 text-sm text-neutral-400">{subtitle}</p>
          )}
        </div>
      </div>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="group flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-300 transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
        >
          {viewAllLabel}
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
