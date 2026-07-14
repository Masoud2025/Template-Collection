"use client";

import { useState } from "react";
import { X, Clock, Users, Star, Calendar, Phone, Mail, User } from "lucide-react";
import { Room, Booking } from "../../../types/escape-room/index";
import { saveBooking } from "../../../lib/escape-room/bookings";

interface RoomModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function RoomModal({ room, isOpen, onClose }: RoomModalProps) {
  const [bookingData, setBookingData] = useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    date: "",
    time: "",
    players: 2,
  });
  const [isBooked, setIsBooked] = useState(false);
  const [bookingResult, setBookingResult] = useState<Booking | null>(null);

  if (!room || !isOpen) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
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

  const handleClose = () => {
    setIsBooked(false);
    setBookingResult(null);
    onClose();
  };

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
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition"
        >
          <X size={24} className="text-gray-700 dark:text-gray-300" />
        </button>

        {isBooked ? (
          // Success Screen
          <div className="p-8 md:p-12 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              رزرو با موفقیت انجام شد!
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              کد رزرو شما: <span className="font-mono font-bold text-blue-600">{bookingResult?.id}</span>
            </p>
            <div className="mt-6 p-4 bg-gray-50 dark:bg-zinc-800 rounded-xl text-right">
              <p><strong>اتاق:</strong> {bookingResult?.roomName}</p>
              <p><strong>نام:</strong> {bookingResult?.customerName}</p>
              <p><strong>تاریخ:</strong> {bookingResult?.date}</p>
              <p><strong>ساعت:</strong> {bookingResult?.time}</p>
              <p><strong>تعداد نفرات:</strong> {bookingResult?.players}</p>
              <p><strong>قیمت کل:</strong> {bookingResult?.totalPrice.toLocaleString()} تومان</p>
            </div>
            <button
              onClick={handleClose}
              className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
            >
              بستن
            </button>
          </div>
        ) : (
          <>
            {/* Room Info */}
            <div className="p-6 md:p-8 border-b border-gray-200 dark:border-zinc-800">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {room.name}
                  </h2>
                  <div className="flex items-center gap-3 mt-2">
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
            </div>

            {/* Story & Booking */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Story */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    📖 داستان اتاق
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {room.story || room.description}
                  </p>
                </div>

                {/* Booking Form */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    📝 فرم رزرو
                  </h3>
                  <form onSubmit={handleBooking} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        نام و نام خانوادگی
                      </label>
                      <div className="relative">
                        <User size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          required
                          placeholder="مثال: مسعود جعفری"
                          className="w-full pr-10 pl-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white"
                          value={bookingData.customerName}
                          onChange={(e) => setBookingData({ ...bookingData, customerName: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        شماره تماس
                      </label>
                      <div className="relative">
                        <Phone size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          required
                          placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
                          className="w-full pr-10 pl-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white"
                          value={bookingData.customerPhone}
                          onChange={(e) => setBookingData({ ...bookingData, customerPhone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        ایمیل
                      </label>
                      <div className="relative">
                        <Mail size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          placeholder="example@email.com"
                          className="w-full pr-10 pl-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white"
                          value={bookingData.customerEmail}
                          onChange={(e) => setBookingData({ ...bookingData, customerEmail: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          تاریخ
                        </label>
                        <div className="relative">
                          <Calendar size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="date"
                            required
                            className="w-full pr-10 pl-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white"
                            value={bookingData.date}
                            onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          ساعت
                        </label>
                        <input
                          type="time"
                          required
                          className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white"
                          value={bookingData.time}
                          onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        تعداد نفرات
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={8}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white"
                        value={bookingData.players}
                        onChange={(e) => setBookingData({ ...bookingData, players: parseInt(e.target.value) })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      رزرو کن
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}