import { NextResponse } from "next/server";
import { Todo } from "../../../../models/TodoModel";
import { connect } from "@/lib/mongodb";

export async function POST(request: Request) {
  await connect();

  try {
    const { todoId } = await request.json();
    const todo = await Todo.findById(todoId);
    console.log(todoId);
    if (!todo) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }

    await Todo.deleteOne({ _id: todoId });

    return NextResponse.json({ message: "Todo deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting todo:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}