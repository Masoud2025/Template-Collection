"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { Play, Info } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "افسانه‌های کهکشان",
    description:
      "در اعماق فضا، یک نبرد حماسی بین کهکشان‌ها در جریان است. این بار سرنوشت جهان در دستان یک قهرمان ناشناخته است.",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600&q=80",
    link: "/movies/1",
  },
  {
    id: 2,
    title: "شهر سایه‌ها",
    description:
      "تهران زیرزمینی، پر از رازهای پنهان و جاسوس‌های بین‌المللی. یک مأمور مخفی باید حقیقت را قبل از فروپاشی شهر کشف کند.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=80",
    link: "/movies/2",
  },
  {
    id: 3,
    title: "آخرین امپراتور",
    description:
      "داستان یک امپراتور قدرتمند که برای نجات امپراتوری خود در برابر دشمنان بیرونی و خیانت‌های داخلی می‌جنگد.",
    image:
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=1600&q=80",
    link: "/movies/3",
  },
];

const HeroSlider = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
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
            "swiper-pagination-bullet !w-3 !h-3 !bg-white/40 !opacity-100",
          bulletActiveClass: "!bg-white !shadow-[0_0_15px_rgba(255,255,255,0.8)]",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-black"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

              <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl text-white space-y-6">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-tight drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300/90 leading-relaxed drop-shadow-lg max-w-xl">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <Link
                      href={slide.link}
                      className="flex items-center gap-2.5 px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-gray-700 to-gray-500 rounded-full shadow-2xl shadow-black/50 border border-white/10 hover:scale-105 hover:shadow-white/10 transition-all duration-300"
                    >
                      <Play size={20} fill="currentColor" />
                      پخش فیلم
                    </Link>
                    <Link
                      href={`/info/${slide.id}`}
                      className="flex items-center gap-2.5 px-8 py-3.5 text-sm font-semibold text-white bg-white/5 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300"
                    >
                      <Info size={20} />
                      اطلاعات بیشتر
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-next !text-white !w-14 !h-14 !bg-black/40 !backdrop-blur-sm !rounded-full !border !border-white/10 hover:!bg-black/60 transition-all after:!text-2xl" />
        <div className="swiper-button-prev !text-white !w-14 !h-14 !bg-black/40 !backdrop-blur-sm !rounded-full !border !border-white/10 hover:!bg-black/60 transition-all after:!text-2xl" />
      </Swiper>
    </div>
  );
};

export default HeroSlider;