import { Booking } from "../../types/escape-room/index";

// Storage key
const STORAGE_KEY = "escape_rooms_bookings";

// Get all bookings
export const getBookings = (): Booking[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// Save booking
export const saveBooking = (booking: Omit<Booking, "id" | "createdAt">): Booking => {
  const bookings = getBookings();
  const newBooking: Booking = {
    ...booking,
    id: `BK-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    createdAt: new Date().toISOString(),
    status: "pending",
  };
  bookings.push(newBooking);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  return newBooking;
};

// Update booking status
export const updateBookingStatus = (id: string, status: Booking["status"]): void => {
  const bookings = getBookings();
  const index = bookings.findIndex((b) => b.id === id);
  if (index !== -1) {
    bookings[index].status = status;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  }
};

// Delete booking
export const deleteBooking = (id: string): void => {
  const bookings = getBookings();
  const filtered = bookings.filter((b) => b.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};