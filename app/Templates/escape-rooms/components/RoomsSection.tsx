"use client";

import { useSearchParams } from "next/navigation";
import RoomCards from "./RoomCards";

export default function RoomsSection() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || undefined;
  const players = searchParams.get("players") || undefined;
  const difficulty = searchParams.get("difficulty") || undefined;
  const genre = (searchParams.get("genre") as
    | "همه"
    | "معمایی"
    | "ترسناک"
    | "ماجراجویی"
    | "علمی-تخیلی"
    | "تاریخی") || "همه";

  return (
    <RoomCards
      title="اتاق‌های فرار"
      subtitle="یکی رو انتخاب کن و وارد ماجراجویی شو"
      genre={genre}
      searchParams={{ name, players, difficulty }}
    />
  );
}
