"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { Play, Info } from "lucide-react";
import { BASE } from "../data/movies";

const slides = [
  {
    id: 1,
    title: "افسانه‌های کهکشان",
    description:
      "در اعماق فضا، یک نبرد حماسی بین کهکشان‌ها در جریان است. این بار سرنوشت جهان در دستان یک قهرمان ناشناخته است.",
    genre: "علمی تخیلی",
    rating: 8.7,
    image:
      "https://static.filmnet.ir/images/e8/65/e865137a54e04da98d43985828fd2fa3.jpg",
    link: "/movies/1",
  },
  {
    id: 2,
    title: "شهر سایه‌ها",
    description:
      "تهران زیرزمینی، پر از رازهای پنهان و جاسوس‌های بین‌المللی. یک مأمور مخفی باید حقیقت را قبل از فروپاشی شهر کشف کند.",
    genre: "هیجان‌انگیز",
    rating: 7.9,
    image:
      "https://static.filmnet.ir/images/a5/06/a506e5e676384d17914d9ff5308ab3f9.jpg",
    link: "/movies/2",
  },
  {
    id: 3,
    title: "آخرین امپراتور",
    description:
      "داستان یک امپراتور قدرتمند که برای نجات امپراتوری خود در برابر دشمنان بیرونی و خیانت‌های داخلی می‌جنگد.",
    genre: "حماسی",
    rating: 8.2,
    image:
      "https://static.filmnet.ir/images/2b/00/2b0042e2b1f74a7f9ed7803078423616.jpg",
    link: "/movies/3",
  },
];

const HeroSlider = () => {
  return (
    <div className="relative h-[80vh] min-h-[520px] w-full overflow-hidden bg-black lg:h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet !w-2.5 !h-2.5 !bg-white/40 !opacity-100",
          bulletActiveClass: "!w-8 !rounded-full !bg-white !shadow-[0_0_15px_rgba(255,255,255,0.8)]",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full bg-black">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                quality={80}
                preload={i === 0}
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="max-w-2xl space-y-5 text-white">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-amber-500/90 px-3 py-1 text-xs font-bold text-black">
                        {slide.genre}
                      </span>
                      <span className="flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold backdrop-blur-sm ring-1 ring-white/15">
                        <Play className="h-3 w-3 fill-current" />
                        {slide.rating} امتیاز
                      </span>
                    </div>
                    <h1 className="text-4xl font-black leading-tight tracking-tight drop-shadow-2xl sm:text-5xl md:text-7xl">
                      {slide.title}
                    </h1>
                    <p className="max-w-xl text-base leading-relaxed text-gray-300/90 drop-shadow-lg sm:text-lg md:text-xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <Link
                        href={`${BASE}${slide.link}`}
                        className="flex items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-black shadow-2xl shadow-black/50 transition-all duration-300 hover:scale-105 hover:bg-neutral-200"
                      >
                        <Play size={20} fill="currentColor" />
                        پخش فیلم
                      </Link>
                      <Link
                        href={`${BASE}/info/${slide.id}`}
                        className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                      >
                        <Info size={20} />
                        اطلاعات بیشتر
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-next !right-4 !h-12 !w-12 !rounded-full !border !border-white/15 !bg-black/50 !text-white !backdrop-blur-sm after:!text-xl hover:!bg-black/70" />
        <div className="swiper-button-prev !left-4 !h-12 !w-12 !rounded-full !border !border-white/15 !bg-black/50 !text-white !backdrop-blur-sm after:!text-xl hover:!bg-black/70" />
      </Swiper>
    </div>
  );
};

export default HeroSlider;
