import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Escape Rooms",
  description: "رزرو اتاق فرار",
};

export default function EscapeRoomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body className="font-vazir bg-[#f0f4f8] text-black antialiased">
        {children}
      </body>
    </html>
  );
}