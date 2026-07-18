"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarCheck, Users, Star, Award } from "lucide-react";

const stats = [
  { icon: CalendarCheck, value: 25000, label: "بازی انجام شده", suffix: "+" },
  { icon: Users, value: 150, label: "بازیکن راضی", suffix: "K+" },
  { icon: Star, value: 90, label: "درصد رضایت", suffix: "%" },
  { icon: Award, value: 6, label: "سال تجربه", suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const step = Math.max(1, Math.floor(value / 60));
          const timer = setInterval(() => {
            current += step;
            if (current >= value) {
              current = value;
              clearInterval(timer);
            }
            setCount(current);
          }, 25);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  const formatted = count.toLocaleString("fa-IR");
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-black text-white">
        {formatted}
        <span className="text-blue-300">{suffix}</span>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 py-14 px-4 moraba-Font">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
              <stat.icon size={24} className="text-white" />
            </div>
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="text-blue-100 mt-1 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
