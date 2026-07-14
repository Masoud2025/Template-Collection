"use client";

import { useState, useEffect } from "react";
import { getBookings, updateBookingStatus, deleteBooking } from "../../../lib/escape-room/bookings";
import { Booking } from "../../../types/escape-room/index";
import { 
  Calendar, User, Phone, Mail, Clock, X, Check, 
  Search, Filter, TrendingUp, Users as UsersIcon,
  Clock as ClockIcon, CheckCircle, XCircle, AlertCircle,
  ChevronLeft, ChevronRight, Download, Eye
} from "lucide-react";

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>(() => getBookings());
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
      case "pending": return "bg-amber-100 text-amber-800 border-amber-200";
      case "confirmed": return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "cancelled": return "bg-rose-100 text-rose-800 border-rose-200";
      case "completed": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending": return <ClockIcon size={14} />;
      case "confirmed": return <CheckCircle size={14} />;
      case "cancelled": return <XCircle size={14} />;
      case "completed": return <CheckCircle size={14} />;
      default: return <AlertCircle size={14} />;
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

  // Filter and search
  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch = 
      booking.customerName.includes(searchTerm) ||
      booking.roomName.includes(searchTerm) ||
      booking.id.includes(searchTerm);
    const matchesStatus = statusFilter === "all" || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);
  const paginatedBookings = filteredBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Stats
  const totalBookings = bookings.length;
  const pendingBookings = bookings.filter(b => b.status === "pending").length;
  const confirmedBookings = bookings.filter(b => b.status === "confirmed").length;
  const completedBookings = bookings.filter(b => b.status === "completed").length;

  return (
    <div className="moraba-Font min-h-screen bg-gradient-to-br from-gray-50 to-gray-100/80 py-8 px-4" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header with gradient */}
        <div className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 text-9xl">📋</div>
            <div className="absolute bottom-0 left-0 text-7xl">✨</div>
          </div>
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white flex items-center gap-3">
                📋 مدیریت رزروها
                <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  {totalBookings} رزرو
                </span>
              </h1>
              <p className="text-blue-100/80 mt-1">مدیریت و بررسی تمام رزروهای اتاق‌های فرار</p>
            </div>
            <button className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-2xl font-bold transition-all duration-300 hover:scale-105 border border-white/30 flex items-center gap-2">
              <Download size={18} />
              خروجی گرفتن
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">کل رزروها</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{totalBookings}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Calendar size={24} className="text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">در انتظار تایید</p>
                <p className="text-2xl font-bold text-amber-600 mt-1">{pendingBookings}</p>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                <Clock size={24} className="text-amber-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">تایید شده</p>
                <p className="text-2xl font-bold text-emerald-600 mt-1">{confirmedBookings}</p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                <CheckCircle size={24} className="text-emerald-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">انجام شده</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">{completedBookings}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <TrendingUp size={24} className="text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="جستجو در نام، اتاق، کد رزرو..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10 pl-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50/50"
              />
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <Filter size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="pr-10 pl-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50/50 appearance-none min-w-[140px]"
                >
                  <option value="all">همه وضعیت‌ها</option>
                  <option value="pending">در انتظار تایید</option>
                  <option value="confirmed">تایید شده</option>
                  <option value="cancelled">لغو شده</option>
                  <option value="completed">انجام شده</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Bookings List */}
        {filteredBookings.length === 0 ? (
          <div className="bg-white rounded-3xl p-20 text-center shadow-lg border border-gray-100">
            <div className="text-7xl mb-4">📭</div>
            <p className="text-gray-500 text-lg font-medium">هیچ رزروی یافت نشد</p>
            <p className="text-gray-400 text-sm mt-1">با تغییر فیلترها یا جستجو، نتایج را مشاهده کنید</p>
          </div>
        ) : (
          <div className="space-y-4">
            {paginatedBookings.map((booking) => (
              <div
                key={booking.id}
                className="group bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        {booking.roomName}
                        <span className="text-xs font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                          #{booking.id.slice(-8)}
                        </span>
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${getStatusColor(booking.status)}`}>
                        {getStatusIcon(booking.status)}
                        {getStatusLabel(booking.status)}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-gray-600 bg-gray-50/80 px-3 py-2 rounded-xl">
                        <User size={15} className="text-gray-400" />
                        <span>{booking.customerName}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 bg-gray-50/80 px-3 py-2 rounded-xl">
                        <Phone size={15} className="text-gray-400" />
                        <span>{booking.customerPhone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 bg-gray-50/80 px-3 py-2 rounded-xl">
                        <Mail size={15} className="text-gray-400" />
                        <span className="truncate max-w-[100px]">{booking.customerEmail}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 bg-gray-50/80 px-3 py-2 rounded-xl">
                        <Calendar size={15} className="text-gray-400" />
                        <span>{booking.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 bg-gray-50/80 px-3 py-2 rounded-xl">
                        <Clock size={15} className="text-gray-400" />
                        <span>{booking.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 bg-gray-50/80 px-3 py-2 rounded-xl">
                        <UsersIcon size={15} className="text-gray-400" />
                        <span>{booking.players} نفر</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 bg-blue-50/80 px-3 py-2 rounded-xl font-bold col-span-2 md:col-span-1">
                        💰 {booking.totalPrice.toLocaleString()} تومان
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end">
                    <div className="flex flex-wrap gap-2">
                      {booking.status === "pending" && (
                        <>
                          <button
                            onClick={() => handleStatusChange(booking.id, "confirmed")}
                            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-sm font-bold transition-all duration-300 hover:scale-105 flex items-center gap-1.5 shadow-lg shadow-emerald-200"
                          >
                            <Check size={16} />
                            تایید
                          </button>
                          <button
                            onClick={() => handleStatusChange(booking.id, "cancelled")}
                            className="px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl text-sm font-bold transition-all duration-300 hover:scale-105 flex items-center gap-1.5 shadow-lg shadow-rose-200"
                          >
                            <X size={16} />
                            لغو
                          </button>
                        </>
                      )}
                      {booking.status === "confirmed" && (
                        <button
                          onClick={() => handleStatusChange(booking.id, "completed")}
                          className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-sm font-bold transition-all duration-300 hover:scale-105 flex items-center gap-1.5 shadow-lg shadow-blue-200"
                        >
                          <Check size={16} />
                          انجام شد
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(booking.id)}
                        className="px-4 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-2xl text-sm font-bold transition-all duration-300 hover:scale-105 flex items-center gap-1.5"
                      >
                        <X size={16} />
                        حذف
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between gap-4 mt-6">
                <p className="text-sm text-gray-500">
                  نمایش {((currentPage - 1) * itemsPerPage) + 1} تا {Math.min(currentPage * itemsPerPage, filteredBookings.length)} از {filteredBookings.length} رزرو
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-2xl border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                  >
                    <ChevronRight size={18} />
                  </button>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 rounded-2xl font-bold transition-all duration-300 ${
                        currentPage === i + 1
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                          : "hover:bg-gray-100 text-gray-600"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-2xl border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                  >
                    <ChevronLeft size={18} />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}