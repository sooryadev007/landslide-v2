// app/api/signup/route.js
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { username, password, number, pin } = await request.json();

  try {
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      return new NextResponse(
        JSON.stringify({ error: "Username already exists" }),
        { status: 400 }
      );
    }

    // Create the new user
    const newUser = await prisma.user.create({
      data: {
        username,
        password,
        number,
        pin,
      },
    });

    return new NextResponse(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 }
    );
  } catch (error) {
    // Type guard to check if error is an instance of Error
    if (error instanceof Error) {
      console.error("Error creating user:", error.message);
      return new NextResponse(
        JSON.stringify({ error: "Failed to sign up. Please try again." }),
        { status: 500 }
      );
    } else {
      // Handle unexpected errors
      console.error("Unexpected error:", error);
      return new NextResponse(
        JSON.stringify({ error: "An unexpected error occurred." }),
        { status: 500 }
      );
    }
  }
}
