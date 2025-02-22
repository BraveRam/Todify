import { NextResponse } from "next/server";
import { Todo } from "../../../../models/TodoModel";
import { connect } from "@/lib/mongodb";

export async function POST(request: Request) {
  await connect();
  try {
    const { todoName, email, description, completed } = await request.json();
    
    const todoExists = await Todo.findOne({
        todoName: todoName,
        email: email
    })
    if(!todoExists){
      try{
        const newTodo = await Todo.create({ 
      todoName, description, email, completed});
        return NextResponse.json({message: "Todo created"}, {status: 201})
        } catch(error){
          return NextResponse.json({message: error}, {status: 500})
        }
      }
    
    return NextResponse.json({ message: "Todo already exists"}, { status: 504 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}