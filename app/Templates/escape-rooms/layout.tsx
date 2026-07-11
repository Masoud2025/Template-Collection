export default function EscapeRoomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div dir="rtl" className="bg-[#f0f4f8] dark:bg-black min-h-screen">
      {children}
    </div>
  );
}