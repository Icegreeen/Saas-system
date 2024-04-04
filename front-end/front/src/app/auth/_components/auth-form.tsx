'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useForm } from "react-hook-form";
import { signIn } from 'next-auth/react'
import { toast } from "@/components/ui/use-toast"

export function AuthForm() {
  const form = useForm();

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn('email', { email: data.email, redirect: false})

      toast({
        title: 'Email login sent',
        description: 'Check your email for the magic link to login'
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occured. Please try again.'
      })
    }
  })

  return (
    <div className="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto w-[350px] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-gray-500 dark:text-gray-400">Enter your email below to login to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" required type="email" {...form.register('email')} />
            </div>
            {/*
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" required type="password" />
            </div>
            */}
            <Button type="submit" className="w-full">Send magic link</Button>

           {/*
            <Button className="w-full" variant="outline">
              Login with Google
            </Button>
           */}
          </form>
          <div className="mt-4 text-center text-sm">
            Don't have an account?
            <Link className="underline" href="#">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center">
        <img
          alt="Image"
          className="object-cover w-full h-full aspect-video"
          height="450"
          src="/neve.jpg"
          width="800"
        />
      </div>
    </div>
  )
}

