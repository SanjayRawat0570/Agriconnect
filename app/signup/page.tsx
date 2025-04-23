"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft } from "lucide-react"

export default function SignupPage() {
  const [userType, setUserType] = useState<string>("buyer")

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b">
      <Card className="w-full max-w-md 
      bg-green-300 border-green-100 shadow-md">
        <CardHeader className="space-y-2 text-center">
          <Link href="/">
            <Button className="flex items-center justify-center mr-auto ml-0 bg-green-300 hover:bg-green-500 h-5 w-5 ">
              <ArrowLeft className="text-green-700 w-6 h-5" size={20} />
            </Button>
          </Link>
          <div className="mx-auto w-16 h-16 mb-2 relative">
            <div className="absolute inset-0 rounded-full bg-green-100 animate-pulse"></div>

            <Image
              src="/logo.png?height=64&width=64"
              alt="Farmers Marketplace Logo"
              width={64}
              height={64}
              className="relative z-10 rounded-xl"
            />
          </div>
          <CardTitle className="text-2xl font-bold text-green-800">Join AgriConnecct</CardTitle>
          <CardDescription className="text-green-600">Create an account to start buying or selling</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-green-700">
              Full Name
            </Label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              className="border-green-200 focus:border-green-500 focus:ring-green-500
              bg-green-300 placeholder:text-green-600"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-green-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="border-green-200 focus:border-green-500 focus:ring-green-500 bg-green-300
              placeholder:text-green-600"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-green-700">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              className="border-green-200 focus:border-green-500 focus:ring-green-500
              bg-green-300"
              placeholder="******"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-green-700">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              className="border-green-200 focus:border-green-500 focus:ring-green-500
              bg-green-300"
              required
            />
          </div>
          <div className="space-y-2">
            <Label className="text-green-700">I am a:</Label>
            <RadioGroup defaultValue={userType} onValueChange={setUserType} className="flex space-x-2">
              <div className="flex items-center space-x-2 bg-green-400 p-3 rounded-md border border-green-100 flex-1 cursor-pointer hover:bg-green-500 transition-colors">
                <RadioGroupItem value="farmer" id="farmer" className="text-green-600" />
                <Label htmlFor="farmer" className="cursor-pointer">
                  Farmer
                </Label>
              </div>
              <div className="flex items-center space-x-2 bg-green-400 p-3 rounded-md border border-green-100 flex-1 cursor-pointer hover:bg-green-500 transition-colors">
                <RadioGroupItem value="buyer" id="buyer" className="text-green-600" />
                <Label htmlFor="buyer" className="cursor-pointer">
                  Buyer
                </Label>
              </div>
            </RadioGroup>
          </div>
          <Button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5"
          >
            Create Account
          </Button>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-green-100 pt-4">
          <p className="text-sm text-green-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-green-700 hover:text-green-900 hover:underline transition-colors"
            >
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
