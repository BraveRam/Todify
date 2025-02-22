"use client"
import Hero from './Hero';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LandingPage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);
  if (status === "authenticated") {
    return null;
  }

  return (
    <>
      <Hero />
    </>
  );
}

export default LandingPage;