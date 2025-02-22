"use client";
import Loading from '../../components/Loading';
import TodoPage from "@/components/Todos";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { status } = useSession();
  const router = useRouter();
  const [showTodos, setShowTodos] = useState(false);

  // Redirect if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  // Delay showing the TodoPage component
  useEffect(() => {
    if (status === "authenticated") {
      const timeout = setTimeout(() => {
        setShowTodos(true);
      }, 2000);

      return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }
  }, [status]);

  if (status === "loading") return <Loading />;

  return showTodos ? <TodoPage /> : <Loading />;
}