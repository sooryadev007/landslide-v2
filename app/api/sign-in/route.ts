import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

interface SignInRequestBody {
  username: string;
  password: string;
}

export async function POST(request: NextRequest) {
  const { username, password }: SignInRequestBody = await request.json();

  try {
    // Check if the user exists
    const user: User | null = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return new NextResponse(
        JSON.stringify({ error: "Invalid username or password" }),
        { status: 401 }
      );
    }

    // Check if the password matches (this example assumes plain text; use hashing in real applications)
    if (user.password !== password) {
      return new NextResponse(
        JSON.stringify({ error: "Invalid username or password" }),
        { status: 401 }
      );
    }

    // Authentication successful
    if (user.isAdmin) {
      return new NextResponse(
        JSON.stringify({ status: "admin" }), // Return "admin" if the user is an admin
        { status: 200 }
      );
    } else {
      return new NextResponse(
        JSON.stringify({ status: "user" }), // Return "user" if the user is not an admin
        { status: 200 }
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error during sign-in:", error.message);
      return new NextResponse(
        JSON.stringify({ error: "Internal server error" }),
        { status: 500 }
      );
    } else {
      console.error("Unexpected error:", error);
      return new NextResponse(
        JSON.stringify({ error: "An unexpected error occurred." }),
        { status: 500 }
      );
    }
  }
}
