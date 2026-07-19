"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import PosterCard from "./PosterCard";
import { BASE, newReleases } from "../data/movies";

const NewMoviesSlider = () => {
  return (
    <section className="w-full bg-black py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-2xl font-black text-white sm:text-3xl">
                فیلم‌های جدید
              </h2>
              <p className="mt-0.5 text-sm text-neutral-400">
                تازه‌ترین اکران‌ها
              </p>
            </div>
          </div>
          <Link
            href={`${BASE}/movies`}
            className="group flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-300 transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
          >
            مشاهده همه
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </Link>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            rewind={true}
            className="!px-1"
          >
            {newReleases.map((movie) => (
              <SwiperSlide key={movie.id} className="h-auto">
                <PosterCard movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label="قبلی"
            className="swiper-button-prev-custom absolute -left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/80 text-white backdrop-blur-sm transition-all hover:bg-black/95 hover:scale-110"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="بعدی"
            className="swiper-button-next-custom absolute -right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/80 text-white backdrop-blur-sm transition-all hover:bg-black/95 hover:scale-110"
          >
            <ArrowLeft className="h-5 w-5 rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewMoviesSlider;
