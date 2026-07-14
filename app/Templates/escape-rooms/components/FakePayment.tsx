"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  X, CreditCard, Wallet, Shield, Lock, CheckCircle, 
  ArrowLeft, Clock, Truck, Headphones, Sparkles,
  ChevronLeft, ChevronRight, Calendar, User, Phone, Mail
} from "lucide-react";

interface PaymentPageProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  roomName: string;
  bookingId: string;
  onSuccess: () => void;
}

export default function PaymentPage({ 
  isOpen, 
  onClose, 
  amount, 
  roomName, 
  bookingId, 
  onSuccess 
}: PaymentPageProps) {
  const [step, setStep] = useState<"form" | "processing" | "success">("form");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "wallet" | "gateway">("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [trackingCode] = useState(() => 
    Math.random().toString(36).substring(2, 10).toUpperCase()
  );

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("processing");
    
    setTimeout(() => {
      setStep("success");
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 2000);
    }, 2500);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s/g, "").replace(/\D/g, "");
    const parts = v.match(/.{1,4}/g);
    return parts ? parts.join(" ") : v;
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\D/g, "");
    if (v.length >= 2) {
      return v.slice(0, 2) + "/" + v.slice(2, 4);
    }
    return v;
  };

  const resetAndClose = () => {
    setStep("form");
    setCardNumber("");
    setExpiry("");
    setCvv("");
    setCardHolder("");
    onClose();
  };

  // اگر درخواست مستقیم صفحه پرداخت باشد
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={resetAndClose}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
          >
            <ArrowLeft size={20} />
            بازگشت
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Wallet size={16} className="text-blue-600" />
            </div>
            <span className="font-bold text-gray-900">پرداخت امن</span>
          </div>
          <div className="text-sm text-gray-500">
            {step === "form" && "مرحله ۱ از ۳"}
            {step === "processing" && "مرحله ۲ از ۳"}
            {step === "success" && "مرحله ۳ از ۳"}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {step === "form" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                  خلاصه پرداخت
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">اتاق</span>
                    <span className="font-bold text-gray-900">{roomName}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">کد رزرو</span>
                    <span className="font-mono font-bold text-blue-600">{bookingId}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">تاریخ</span>
                    <span className="font-bold text-gray-900">{new Date().toLocaleDateString('fa-IR')}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200 flex justify-between">
                    <span className="text-gray-900 font-bold">مبلغ قابل پرداخت</span>
                    <span className="text-2xl font-black text-blue-600">{amount.toLocaleString()} تومان</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                <div className="flex items-start gap-3">
                  <Shield size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-blue-900">پرداخت امن</p>
                    <p className="text-xs text-blue-700">اطلاعات شما با رمزنگاری پیشرفته محافظت می‌شود</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-6">اطلاعات پرداخت</h2>

                {/* Payment Methods */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`py-3 rounded-xl border-2 transition-all duration-300 flex items-center justify-center gap-2 ${
                      paymentMethod === "card"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <CreditCard size={18} className={paymentMethod === "card" ? "text-blue-600" : "text-gray-400"} />
                    <span className={`text-sm font-medium ${paymentMethod === "card" ? "text-blue-600" : "text-gray-600"}`}>
                      کارت
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("wallet")}
                    className={`py-3 rounded-xl border-2 transition-all duration-300 flex items-center justify-center gap-2 ${
                      paymentMethod === "wallet"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Wallet size={18} className={paymentMethod === "wallet" ? "text-blue-600" : "text-gray-400"} />
                    <span className={`text-sm font-medium ${paymentMethod === "wallet" ? "text-blue-600" : "text-gray-600"}`}>
                      کیف پول
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("gateway")}
                    className={`py-3 rounded-xl border-2 transition-all duration-300 flex items-center justify-center gap-2 ${
                      paymentMethod === "gateway"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Sparkles size={18} className={paymentMethod === "gateway" ? "text-blue-600" : "text-gray-400"} />
                    <span className={`text-sm font-medium ${paymentMethod === "gateway" ? "text-blue-600" : "text-gray-600"}`}>
                      درگاه
                    </span>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {paymentMethod === "card" && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">شماره کارت</label>
                        <input
                          type="text"
                          required
                          maxLength={19}
                          placeholder="۱۲۳۴ ۵۶۷۸ ۹۰۱۲ ۳۴۵۶"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-mono"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">تاریخ انقضا</label>
                          <input
                            type="text"
                            required
                            maxLength={5}
                            placeholder="۱۲/۳۴"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            value={expiry}
                            onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">CVV2</label>
                          <input
                            type="password"
                            required
                            maxLength={4}
                            placeholder="***"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">نام دارنده کارت</label>
                        <input
                          type="text"
                          required
                          placeholder="مثال: مسعود جعفری"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          value={cardHolder}
                          onChange={(e) => setCardHolder(e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  {paymentMethod === "wallet" && (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <Wallet size={32} className="text-blue-600" />
                      </div>
                      <p className="text-gray-700">پرداخت با کیف پول</p>
                      <p className="text-sm text-gray-500">موجودی کیف پول: ۰ تومان</p>
                    </div>
                  )}

                  {paymentMethod === "gateway" && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <button type="button" className="p-3 border border-gray-200 rounded-xl hover:border-blue-500 transition text-sm font-medium">
                          زرین‌پال
                        </button>
                        <button type="button" className="p-3 border border-gray-200 rounded-xl hover:border-blue-500 transition text-sm font-medium">
                          نکست‌پی
                        </button>
                        <button type="button" className="p-3 border border-gray-200 rounded-xl hover:border-blue-500 transition text-sm font-medium">
                          آیدی‌پی
                        </button>
                        <button type="button" className="p-3 border border-gray-200 rounded-xl hover:border-blue-500 transition text-sm font-medium">
                          پی‌پی
                        </button>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                  >
                    <Shield size={18} />
                    پرداخت {amount.toLocaleString()} تومان
                  </button>

                  <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Lock size={12} /> رمزنگاری شده</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Shield size={12} /> امن</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {step === "processing" && (
          <div className="bg-white rounded-2xl p-16 text-center shadow-sm border border-gray-200">
            <div className="relative">
              <div className="w-24 h-24 mx-auto border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Wallet size={32} className="text-blue-500 animate-pulse" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">در حال پردازش</h3>
            <p className="text-gray-500">لطفاً صبر کنید...</p>
          </div>
        )}

        {step === "success" && (
          <div className="bg-white rounded-2xl p-16 text-center shadow-sm border border-gray-200">
            <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={48} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">پرداخت موفق</h3>
            <p className="text-gray-500">کد پیگیری: <span className="font-mono font-bold text-blue-600">{trackingCode}</span></p>
            <div className="mt-6 max-w-xs mx-auto bg-gray-50 rounded-2xl p-5 text-right text-sm">
              <div className="space-y-2">
                <div className="flex justify-between"><span className="text-gray-500">اتاق</span><span className="font-bold">{roomName}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">مبلغ</span><span className="font-bold text-green-600">{amount.toLocaleString()} تومان</span></div>
                <div className="flex justify-between"><span className="text-gray-500">کد رزرو</span><span className="font-bold">{bookingId}</span></div>
              </div>
            </div>
            <button
              onClick={resetAndClose}
              className="mt-6 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
            >
              بازگشت
            </button>
          </div>
        )}
      </div>
    </div>
  );
}