"use client";
import Loading from './Loading';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import axios from "axios";
import { useSession } from "next-auth/react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

interface Todo {
  _id: string;
  name: string;
  description: string;
  completed: boolean;
}

export default function TodoPage() {
  const { data: session } = useSession();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editTodo, setEditTodo] = useState<Todo | null>(null);
  const [formData, setFormData] = useState({ todoName: "", description: "" });

  useEffect(() => {
    async function getTodos() {
      if (!session?.user?.email) return;
      try {
        setLoading(true);
        const response = await axios.post("http://localhost:3000/api/todos/fetch", {
          email: session.user.email,
        });
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setLoading(false);
      }
    }
    getTodos();
  }, [session]);

  const handleCheckboxChange = async (todoId: string, completed: boolean) => {
    try {
      await axios.post("http://localhost:3000/api/todos/edit/complete", { todoId, completed });
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo._id === todoId ? { ...todo, completed } : todo))
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleDelete = async (todoId: string) => {
    try {
      await axios.post("http://localhost:3000/api/todos/delete", { todoId });
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== todoId));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleEditClick = (todo: Todo) => {
    setEditTodo(todo);
    setFormData({ todoName: todo.todoName, description: todo.description });
    setOpen(true);
  };

  const handleSubmitEdit = async () => {
    if (editTodo) {
      try {
        await axios.post("http://localhost:3000/api/todos/edit/todo", {
          todoId: editTodo._id,
          todoName: formData.todoName,
          description: formData.description,
        });

        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo._id === editTodo._id
              ? { ...todo, todoName: formData.todoName, description: formData.description }
              : todo
          )
        );
        setOpen(false);
      } catch (error) {
        console.error("Error editing todo:", error);
      }
    }
  };

  return (
    <section className="max-w-3xl mx-auto py-16 px-6">
      <div className="flex gap-4 mb-8">
        <h1 className="flex-1 font-extrabold text-3xl">Your Todos:</h1>
        <Button className="px-6 py-3">
          <Link href="/AddTodo">Add Todo</Link>
        </Button>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="space-y-4">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <Card key={todo._id} className="shadow-md">
                <CardContent className="py-4 px-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{todo.todoName}</h2>
                    <Checkbox
                      checked={todo.completed}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(todo._id, Boolean(checked))
                      }
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">{todo.description}</p>

                  <div className="flex gap-2">
                    <Button variant="outline" className="w-full" onClick={() => handleEditClick(todo)}>
                      Edit
                    </Button>
                    <Button onClick={() => handleDelete(todo._id)} variant="destructive" className="w-full">
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-muted-foreground">No tasks yet. Start by adding one!</p>
          )}
        </div>
      )}

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Edit Todo</AlertDialogTitle>
            <AlertDialogDescription>Edit the name and description of your todo.</AlertDialogDescription>
          </AlertDialogHeader>

          <div className="space-y-4">
            <input
              type="text"
              value={formData.todoName}
              onChange={(e) => setFormData({ ...formData, todoName: e.target.value })}
              className="w-full p-2 border rounded"
              placeholder="Todo Name"
            />
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full p-2 border rounded"
              placeholder="Todo Description"
            />
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmitEdit}>Save Changes</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}