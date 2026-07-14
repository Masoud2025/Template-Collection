/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Clock, Users, Star, Calendar, Phone, Mail, User, ArrowRight } from "lucide-react";
import { Room } from "../../../../types/escape-room/index";
import { saveBooking } from "../../../../lib/escape-room/bookings";

// دیتای اتاق‌ها (همون دیتای RoomCards)
const roomsData: Room[] = [
  {
    id: 1,
    name: "معبد گمشده",
    description: "در اعماق یک معبد باستانی، گنج پنهان شده و شما باید رمز و راز آن را کشف کنید.",
    story: "سال‌ها پیش، یک باستان‌شناس معروف در جستجوی گنجینه‌ای افسانه‌ای در این معبد ناپدید شد. گفته می‌شود که روح او هنوز در تونل‌های تاریک پرسه می‌زند. آیا شما می‌توانید گنج را پیدا کنید و از معبد فرار کنید؟",
    price: 150000,
    duration: 60,
    players: "۲-۶",
    difficulty: "medium",
    rating: 4.8,
    image: "",
    images: [],
  },
  {
    id: 2,
    name: "دفتر کارآگاه",
    description: "یک کارآگاه مشهور ناپدید شده و شما باید با سرنخ‌های باقی‌مانده راز را کشف کنید.",
    story: "کارآگاه معروف جیمز مورفی، آخرین پرونده خود را ناتمام گذاشت و ناپدید شد. تمام سرنخ‌ها در دفتر او باقی مانده است. شما باید اسناد را بررسی کنید، رمزها را بشکنید و پرده از راز ناپدید شدن او بردارید.",
    price: 180000,
    duration: 75,
    players: "۱-۴",
    difficulty: "hard",
    rating: 4.9,
    image: "",
    images: [],
  },
  {
    id: 3,
    name: "عمارت تسخیر شده",
    description: "یک عمارت قدیمی که شب‌ها صداهای عجیبی از آن شنیده می‌شود. جرات داری وارد شوی؟",
    story: "عمارت ویکتوریایی در حومه شهر، سال‌هاست که متروک مانده است. همسایه‌ها از صداهای مرموز و نورهای عجیب در شب می‌گویند. برخی می‌گویند صاحب قبلی عمارت هنوز آنجا سرگردان است. آیا شما جرات ورود به این عمارت ترسناک را دارید؟",
    price: 200000,
    duration: 90,
    players: "۳-۸",
    difficulty: "expert",
    rating: 4.7,
    image: "",
    images: [],
  },
  {
    id: 4,
    name: "آزمایشگاه مخفی",
    description: "یک دانشمند دیوانه در آزمایشگاه خود چیزهای عجیبی ساخته و شما باید جلوی او را بگیرید.",
    story: "دکتر هلموت، دانشمند مرموز، سال‌ها در آزمایشگاه مخفی خود روی پروژه‌ای خطرناک کار می‌کرده است. همکارانش می‌گویند او موجودات عجیبی خلق کرده است. شما باید وارد آزمایشگاه شوید، رمزهای او را بشکنید و جلوی فاجعه را بگیرید.",
    price: 170000,
    duration: 60,
    players: "۲-۵",
    difficulty: "medium",
    rating: 4.6,
    image: "",
    images: [],
  },
  {
    id: 5,
    name: "اهرام مصر",
    description: "در دل هرم بزرگ، راز فراعنه پنهان شده و شما باید آن را کشف کنید.",
    story: "اهرام مصر، یکی از عجایب هفت‌گانه جهان، رازهای بسیاری در دل خود پنهان کرده است. تیمی از باستان‌شناسان اخیراً ورودی مخفی‌ای کشف کرده‌اند. شما باید وارد هرم شوید و تابوت فرعون گمشده را پیدا کنید.",
    price: 190000,
    duration: 70,
    players: "۲-۶",
    difficulty: "hard",
    rating: 4.8,
    image: "",
    images: [],
  },
  {
    id: 6,
    name: "جزیره گنج",
    description: "در یک جزیره دورافتاده، گنج دزدان دریایی پنهان شده و شما باید آن را پیدا کنید.",
    story: "کاپیتان بلک‌برد، معروف‌ترین دزد دریایی تاریخ، گنج عظیم خود را در جزیره‌ای مخفی پنهان کرده است. نقشه گنج به چند تکه تقسیم شده و هر کدام در گوشه‌ای از جزیره پنهان است. شما باید تمام تکه‌ها را پیدا کنید و به گنج برسید.",
    price: 160000,
    duration: 65,
    players: "۲-۴",
    difficulty: "easy",
    rating: 4.5,
    image: "",
    images: [],
  },
];

export default function RoomDetailPage() {
  const params = useParams();
  const roomId = parseInt(params.id as string);
  
  // پیدا کردن اتاق در همان لحظه رندر (بدون useEffect)
  const room = roomsData.find((r) => r.id === roomId) || null;
  const [bookingData, setBookingData] = useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    date: "",
    time: "",
    players: 2,
  });
  const [isBooked, setIsBooked] = useState(false);
  const [bookingResult, setBookingResult] = useState<any>(null);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!room) return;
    
    const booking = saveBooking({
      roomId: room.id,
      roomName: room.name,
      customerName: bookingData.customerName,
      customerPhone: bookingData.customerPhone,
      customerEmail: bookingData.customerEmail,
      date: bookingData.date,
      time: bookingData.time,
      players: bookingData.players,
      totalPrice: room.price * bookingData.players,
      status: "pending",
    });
    
    setBookingResult(booking);
    setIsBooked(true);
  };

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">اتاق پیدا نشد</h1>
          <Link href="/Templates/escape-rooms" className="text-blue-600 hover:underline">
            بازگشت به لیست اتاق‌ها
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "bg-emerald-500";
      case "medium": return "bg-amber-500";
      case "hard": return "bg-orange-500";
      case "expert": return "bg-rose-600";
      default: return "bg-gray-500";
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "آسان";
      case "medium": return "متوسط";
      case "hard": return "سخت";
      case "expert": return "حرفه‌ای";
      default: return difficulty;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4" dir="rtl">
      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <Link
          href="/Templates/escape-rooms"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition mb-6"
        >
          <ArrowRight size={20} />
          بازگشت به لیست اتاق‌ها
        </Link>

        {isBooked ? (
          <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              رزرو با موفقیت انجام شد!
            </h2>
            <p className="text-gray-500">
              کد رزرو شما: <span className="font-mono font-bold text-blue-600">{bookingResult?.id}</span>
            </p>
            <div className="mt-6 p-6 bg-gray-50 rounded-2xl text-right max-w-md mx-auto">
              <p><strong>اتاق:</strong> {bookingResult?.roomName}</p>
              <p><strong>نام:</strong> {bookingResult?.customerName}</p>
              <p><strong>تاریخ:</strong> {bookingResult?.date}</p>
              <p><strong>ساعت:</strong> {bookingResult?.time}</p>
              <p><strong>تعداد نفرات:</strong> {bookingResult?.players}</p>
              <p><strong>قیمت کل:</strong> {bookingResult?.totalPrice.toLocaleString()} تومان</p>
            </div>
            <Link
              href="/Templates/escape-rooms"
              className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
            >
              بازگشت به لیست اتاق‌ها
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Room Info */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {room.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getDifficultyColor(room.difficulty)}`}>
                      {getDifficultyLabel(room.difficulty)}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      {room.rating}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock size={16} />
                      {room.duration} دقیقه
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <Users size={16} />
                      {room.players} نفر
                    </span>
                  </div>
                </div>
                <div className="text-xl font-bold text-blue-600">
                  {room.price.toLocaleString()} تومان
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">📖 داستان اتاق</h3>
                <p className="text-gray-600 leading-relaxed">
                  {room.story}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">📝 توضیحات</h3>
                <p className="text-gray-600 leading-relaxed">
                  {room.description}
                </p>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6">📝 فرم رزرو</h2>
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    نام و نام خانوادگی
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      required
                      placeholder="مثال: مسعود جعفری"
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                      value={bookingData.customerName}
                      onChange={(e) => setBookingData({ ...bookingData, customerName: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    شماره تماس
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      required
                      placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                      value={bookingData.customerPhone}
                      onChange={(e) => setBookingData({ ...bookingData, customerPhone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ایمیل
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                      value={bookingData.customerEmail}
                      onChange={(e) => setBookingData({ ...bookingData, customerEmail: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      تاریخ
                    </label>
                    <div className="relative">
                      <Calendar size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        required
                        className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                        value={bookingData.date}
                        onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ساعت
                    </label>
                    <input
                      type="time"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                      value={bookingData.time}
                      onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    تعداد نفرات
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={8}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                    value={bookingData.players}
                    onChange={(e) => setBookingData({ ...bookingData, players: parseInt(e.target.value) })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  رزرو کن
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}