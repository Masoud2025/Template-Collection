"use client";

import { useState, useEffect } from "react";
import { getBookings, updateBookingStatus, deleteBooking } from "../../../lib/escape-room/bookings";
import { Booking } from "../../../types/escape-room/index";
import { Calendar, User, Phone, Mail, Clock, X, Check } from "lucide-react";

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>(() => getBookings());

  const handleStatusChange = (id: string, status: Booking["status"]) => {
    updateBookingStatus(id, status);
    setBookings(getBookings());
  };

  const handleDelete = (id: string) => {
    if (confirm("آیا از حذف این رزرو مطمئن هستید؟")) {
      deleteBooking(id);
      setBookings(getBookings());
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "confirmed": return "bg-green-100 text-green-800";
      case "cancelled": return "bg-red-100 text-red-800";
      case "completed": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pending": return "در انتظار تایید";
      case "confirmed": return "تایید شده";
      case "cancelled": return "لغو شده";
      case "completed": return "انجام شده";
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">📋 مدیریت رزروها</h1>
        
        {bookings.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">هیچ رزروی ثبت نشده است</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{booking.roomName}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(booking.status)}`}>
                        {getStatusLabel(booking.status)}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        <span>{booking.customerName}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone size={16} />
                        <span>{booking.customerPhone}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail size={16} />
                        <span>{booking.customerEmail}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{booking.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{booking.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>👥 {booking.players} نفر</span>
                      </div>
                    </div>
                    
                    <div className="mt-2 text-sm font-bold text-blue-600">
                      {booking.totalPrice.toLocaleString()} تومان
                    </div>
                    <div className="text-xs text-gray-400">
                      کد رزرو: {booking.id}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-2">
                    {booking.status === "pending" && (
                      <>
                        <button
                          onClick={() => handleStatusChange(booking.id, "confirmed")}
                          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm font-bold transition flex items-center gap-1"
                        >
                          <Check size={16} />
                          تایید
                        </button>
                        <button
                          onClick={() => handleStatusChange(booking.id, "cancelled")}
                          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-bold transition flex items-center gap-1"
                        >
                          <X size={16} />
                          لغو
                        </button>
                      </>
                    )}
                    {booking.status === "confirmed" && (
                      <button
                        onClick={() => handleStatusChange(booking.id, "completed")}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition flex items-center gap-1"
                      >
                        <Check size={16} />
                        انجام شد
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(booking.id)}
                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl text-sm font-bold transition flex items-center gap-1"
                    >
                      <X size={16} />
                      حذف
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}