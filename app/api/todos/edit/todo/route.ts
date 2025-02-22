import { NextResponse } from "next/server";
import { Todo } from "../../../../../models/TodoModel";
import { connect } from "@/lib/mongodb";

export async function POST(request: Request) {
  await connect();

  try {
    const { todoId, todoName, description } = await request.json();
    const todo = await Todo.findById(todoId);
    if (!todo) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }
    
    await Todo.findByIdAndUpdate(todoId, {todoName: todoName, description: description});

    return NextResponse.json({ message: "Todo edited" }, { status: 200 });
  } catch (error) {
    console.error("Error updating todo:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}