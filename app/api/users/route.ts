import { NextResponse } from "next/server";
import { User } from "../../../models/UserModel";
import { connect } from "@/lib/mongodb";

export async function GET() {
  await connect();
  try {
    const users = await User.find({});
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  await connect();
  try {
    const { name, email } = await request.json();
    const newUser = await User.create({ name, email });
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}