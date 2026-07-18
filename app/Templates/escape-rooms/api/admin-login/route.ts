import { NextResponse } from "next/server";
import { verifyPassword, createSession } from "../../lib/adminAuth";

export async function POST(request: Request) {
  const { password } = await request.json();
  if (!(await verifyPassword(String(password || "")))) {
    return NextResponse.json({ error: "رمز عبور اشتباه است" }, { status: 401 });
  }
  await createSession();
  return NextResponse.json({ success: true });
}
