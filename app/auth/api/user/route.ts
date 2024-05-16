import { db } from "@/lib/db";
import { error } from "console";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function GET() {
  return NextResponse.json({ success: true });
}

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Tunggu hasil resolusi promise
    const { email, username, password } = body;

    // Check If Email Already Exist
    const existingUserByEmail = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { success: false, message: "Email already exist" },
        { status: 409 }
      );
    }
    // Check If Username Already Exist
    const existingUserByUsername = await db.user.findUnique({
      where: {
        username: username,
      },
    });
    if (existingUserByUsername) {
      return NextResponse.json(
        { success: false, message: "Username already exist" },
        { status: 409 }
      );
    }

    //

    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      {
        user: rest,
        message: "User Created Successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error); // Tangkap dan log kesalahan
    return NextResponse.json(
      { success: false, message: "An error occurred" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = body;

    // Check if user exists
    const existingUser = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!existingUser) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // Optional: Check if email or username already exists in other users
    // This part is skipped for brevity but can be implemented similarly to the POST method checks

    const hashedPassword = password
      ? await hash(password, 10)
      : existingUser.password;
    const updatedUser = await db.user.update({
      where: { email: email },
      data: {
        email: email || existingUser.email,
        username: username || existingUser.username,
        password: hashedPassword,
      },
    });

    const { password: updatedUserPassword, ...rest } = updatedUser;

    return NextResponse.json(
      {
        user: rest,
        message: "User updated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "An error occurred" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    const existingUser = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!existingUser) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    await db.user.delete({
      where: {
        email: email,
      },
    });

    return NextResponse.json(
      { success: true, message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "An error occurred" },
      { status: 500 }
    );
  }
}
