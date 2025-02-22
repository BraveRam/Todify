import { NextResponse } from "next/server";
import { Todo } from "../../../../models/TodoModel";
import { connect } from "@/lib/mongodb";

export async function POST(request: Request) {
  await connect();
  try {
    const { email } = await request.json();

    const todos = await Todo.find({ email: email });

    if (todos && todos.length > 0) {
      return NextResponse.json(todos, { status: 200 });
    } else {
      return NextResponse.json({ message: "Todo not found" }, { status: 200 });
    }
    
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}