export interface Room {
  id: number;
  name: string;
  description: string;
  story: string;
  price: number;
  duration: number;
  players: string;
  difficulty: "easy" | "medium" | "hard" | "expert";
  rating: number;
  image: string;
  images: string[];
}

export interface Booking {
  id: string;
  roomId: number;
  roomName: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  date: string;
  time: string;
  players: number;
  totalPrice: number;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  createdAt: string;
}