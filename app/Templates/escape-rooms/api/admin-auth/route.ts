import { NextResponse } from "next/server";
import { isAuthenticated, destroySession } from "../../lib/adminAuth";

export async function GET() {
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    return new NextResponse(null, { status: 401 });
  }
  return new NextResponse(null, { status: 200 });
}

export async function DELETE() {
  await destroySession();
  return new NextResponse(null, { status: 200 });
}
