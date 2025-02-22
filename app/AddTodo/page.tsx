"use client";
import Loading from '../../components/Loading';
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  todoName: z
    .string()
    .min(3, { message: "Todo Name must be at least 3 characters." })
    .max(50, { message: "Todo Name must not exceed 50 characters." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." })
    .max(200, { message: "Description must not exceed 200 characters." }),
});

export default function AddTodoPage() { 
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/");
    }
  }, [status, router]);

  if (status === "loading" || status === "unauthenticated") {
    return <Loading />;
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      todoName: "",
      description: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await axios.post("/api/todos/add", {
        todoName: data.todoName,
        description: data.description,
        email: session?.user?.email,
        completed: false,
      });

      router.push("/dashboard");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} >
        <FormField
          control={form.control}
          name="todoName"
          render={({ field }) => (
            <FormItem className="w-[90%] mx-auto my-5">
              <FormLabel>Todo Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter todo name" {...field} />
              </FormControl>
              <FormDescription>Give your todo a name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
          <FormItem className="w-[90%] mx-auto">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter todo description" {...field} />
              </FormControl>
              <FormDescription>Describe the todo.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="mx-auto block w-[80%] my-10" type="submit">Add Todo</Button>
      </form>
    </Form>
  );
}