"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { signIn } from "next-auth/react"

export default function Hero() {
  const router = useRouter()
  return (
    <section className="relative flex flex-col items-center text-center py-24 px-6 md:px-10">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold md:text-6xl">Stay Organized with Todify</h1>
        <p className="text-lg text-muted-foreground">
          The simplest and most efficient way to manage your daily tasks. Track your progress and boost productivity!
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 pt-4">
          <Button onClick={()=>signIn("google")} className="px-6 py-3 w-full md:w-auto transition-all">Roll me in with Google</Button>
         
        </div>
      </div>
      <div className="mt-16 max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard 
          title="Simple & Intuitive"
          description="Easily add, edit, and complete tasks with a clean interface."
        />
        <FeatureCard 
          title="Sync Across Devices"
          description="Access your to-do list anywhere, on any device."
        />
        <FeatureCard 
          title="Dark Mode"
          description="Switch to dark mode for a comfortable viewing experience."
        />
        <FeatureCard 
          title="Quick Notes"
          description="Add short notes alongside your tasks for extra details."
        />
        <FeatureCard 
          title="Secure & Private"
          description="Your data is kept private, always."
        />
      </div>
    </section>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="shadow-md transition-transform transform hover:scale-105">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}