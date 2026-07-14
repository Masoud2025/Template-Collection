/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { 
  X, Clock, Users, Star, Calendar, Phone, Mail, User, 
  CheckCircle, MapPin, Clock as ClockIcon, Shield,
  ChevronLeft, ChevronRight
} from "lucide-react";
import { Room, Booking } from "../../../types/escape-room/index";
import { saveBooking } from "../../../lib/escape-room/bookings";

// ============ تقویم شمسی اختصاصی ============
const PersianDatePicker = ({ value, onChange, placeholder, className }: any) => {
  const [showPicker, setShowPicker] = useState(false);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  
  const persianMonths = [
    "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",
    "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"
  ];

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDateSelect = (day: number) => {
    const date = new Date(year, month, day);
    onChange(date);
    setShowPicker(false);
  };

  const goToPrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const goToNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <Calendar size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          readOnly
          placeholder={placeholder || "انتخاب تاریخ"}
          value={value ? value.toLocaleDateString('fa-IR') : ""}
          onClick={() => setShowPicker(!showPicker)}
          className={`w-full pr-10 pl-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm cursor-pointer ${className || ''}`}
        />
      </div>

      {showPicker && (
        <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 p-4">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={goToPrevMonth}
              className="p-1 hover:bg-gray-100 rounded-lg transition"
            >
              <ChevronRight size={18} />
            </button>
            <span className="font-bold text-gray-900">
              {persianMonths[month]} {year}
            </span>
            <button 
              onClick={goToNextMonth}
              className="p-1 hover:bg-gray-100 rounded-lg transition"
            >
              <ChevronLeft size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500 mb-2">
            {["ش", "ی", "د", "س", "چ", "پ", "ج"].map((day) => (
              <div key={day} className="py-1">{day}</div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDayOfMonth(month, year) }).map((_, i) => (
              <div key={`empty-${i}`} className="py-2" />
            ))}
            {Array.from({ length: daysInMonth(month, year) }).map((_, i) => {
              const day = i + 1;
              const isSelected = value && value.getDate() === day && 
                value.getMonth() === month && value.getFullYear() === year;
              return (
                <button
                  key={day}
                  onClick={() => handleDateSelect(day)}
                  className={`py-2 rounded-lg text-sm transition-all duration-200 hover:bg-green-100 ${
                    isSelected ? 'bg-green-500 text-white hover:bg-green-600' : 'hover:bg-gray-100'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
          
          <button
            onClick={() => setShowPicker(false)}
            className="mt-3 w-full py-2 text-sm text-gray-500 hover:bg-gray-100 rounded-lg transition"
          >
            بستن
          </button>
        </div>
      )}
    </div>
  );
};

// ============ کامپوننت اصلی ============
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
  });
  const [isBooked, setIsBooked] = useState(false);
  const [bookingResult, setBookingResult] = useState<Booking | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");

  // ساعات قابل رزرو
  const availableTimes = [
    "10:00", "11:00", "12:00", "13:00", 
    "14:00", "15:00", "16:00", "17:00", 
    "18:00", "19:00", "20:00", "21:00"
  ];

  if (!room || !isOpen) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      alert("لطفاً تاریخ و ساعت را انتخاب کنید");
      return;
    }
    
    const booking = saveBooking({
      roomId: room.id,
      roomName: room.name,
      customerName: bookingData.customerName,
      customerPhone: bookingData.customerPhone,
      customerEmail: bookingData.customerEmail,
      date: selectedDate.toLocaleDateString('fa-IR'),
      time: selectedTime,
      players: 1,
      totalPrice: room.price,
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
      case "easy": return "bg-green-500";
      case "medium": return "bg-yellow-500";
      case "hard": return "bg-orange-500";
      case "expert": return "bg-red-500";
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

  const formatTime = (time: string) => {
    if (!time) return "";
    const [hours, minutes] = time.split(":");
    const h = parseInt(hours);
    const period = h >= 12 ? "شب" : "صبح";
    const displayHour = h > 12 ? h - 12 : h;
    return `${displayHour}:${minutes} ${period}`;
  };

  const isTimeAvailable = (time: string) => {
    // میتونی اینجا چک کنی که این ساعت قبلاً رزرو نشده باشه
    return true;
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={handleClose}>
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {isBooked ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={40} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">رزرو شما ثبت شد!</h2>
            <p className="text-gray-500 text-sm">کد رزرو: <span className="font-mono font-bold text-green-600">{bookingResult?.id}</span></p>
            <div className="mt-6 max-w-xs mx-auto bg-gray-50 rounded-2xl p-5 text-right text-sm">
              <div className="space-y-2">
                <div className="flex justify-between"><span className="text-gray-500">اتاق</span><span className="font-bold">{bookingResult?.roomName}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">تاریخ</span><span className="font-bold">{bookingResult?.date}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">ساعت</span><span className="font-bold">{formatTime(bookingResult?.time || "")}</span></div>
                <div className="flex justify-between pt-2 border-t border-gray-200"><span className="text-gray-500">مبلغ</span><span className="font-bold text-green-600">{bookingResult?.totalPrice.toLocaleString()} تومان</span></div>
              </div>
            </div>
            <button onClick={handleClose} className="mt-6 px-8 py-2.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition">بستن</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Left Side - Image & Info */}
            <div className="md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white rounded-r-3xl flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                  <MapPin size={14} />
                  <span>تهران، مرکز شهر</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">{room.name}</h2>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(room.difficulty)}`}>
                    {getDifficultyLabel(room.difficulty)}
                  </span>
                  <span className="flex items-center gap-1 text-gray-300"><Star size={14} className="fill-yellow-400 text-yellow-400" />{room.rating}</span>
                  <span className="flex items-center gap-1 text-gray-300"><Clock size={14} />{room.duration} دقیقه</span>
                  <span className="flex items-center gap-1 text-gray-300"><Users size={14} />{room.players}</span>
                </div>
                <p className="text-gray-400 text-sm mt-4 leading-relaxed">{room.story || room.description}</p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400">قیمت هر نفر</p>
                <p className="text-3xl font-bold text-white">{room.price.toLocaleString()} <span className="text-sm font-normal text-gray-400">تومان</span></p>
              </div>
            </div>

            {/* Right Side - Booking Form */}
            <div className="md:col-span-3 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">📝 رزرو اتاق</h3>
              
              <form onSubmit={handleBooking} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">نام و نام خانوادگی</label>
                  <div className="relative">
                    <User size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      required
                      placeholder="مثال: مسعود جعفری"
                      className="w-full pr-10 pl-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      value={bookingData.customerName}
                      onChange={(e) => setBookingData({ ...bookingData, customerName: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">شماره تماس</label>
                  <div className="relative">
                    <Phone size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      required
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                      className="w-full pr-10 pl-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      value={bookingData.customerPhone}
                      onChange={(e) => setBookingData({ ...bookingData, customerPhone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">ایمیل</label>
                  <div className="relative">
                    <Mail size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="w-full pr-10 pl-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      value={bookingData.customerEmail}
                      onChange={(e) => setBookingData({ ...bookingData, customerEmail: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">انتخاب تاریخ</label>
                  <PersianDatePicker
                    value={selectedDate}
                    onChange={(date: Date) => setSelectedDate(date)}
                    placeholder="روز مورد نظر را انتخاب کنید"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">انتخاب ساعت</label>
                  <div className="grid grid-cols-3 gap-2">
                    {availableTimes.map((time) => {
                      const isAvailable = isTimeAvailable(time);
                      const isSelected = selectedTime === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          disabled={!isAvailable}
                          onClick={() => isAvailable && setSelectedTime(time)}
                          className={`py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                            isSelected
                              ? 'bg-green-500 text-white shadow-lg shadow-green-200'
                              : isAvailable
                              ? 'bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700'
                              : 'bg-gray-100 text-gray-300 cursor-not-allowed line-through'
                          }`}
                        >
                          {formatTime(time)}
                          {!isAvailable && ' ❌'}
                        </button>
                      );
                    })}
                  </div>
                  {selectedTime && (
                    <p className="text-xs text-green-600 mt-2">ساعت {formatTime(selectedTime)} انتخاب شد</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Shield size={18} />
                  رزرو کن
                </button>

                <p className="text-center text-xs text-gray-400">پرداخت در محل | لغو رایگان تا ۲۴ ساعت قبل</p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}