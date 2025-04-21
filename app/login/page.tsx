import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">

      <Card className="w-full max-w-md border-green-100 shadow-md
      bg-green-300 border-2 rounded-lg transition-transform transform hover:scale-105 duration-300">
        <CardHeader className="space-y-2 text-center">
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
          <CardTitle className="text-2xl font-bold text-green-800">Welcome Back</CardTitle>
          <CardDescription className="text-green-600">Sign in to access your marketplace account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-green-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="border-green-200 focus:border-green-500 focus:ring-green-500
              placeholder:text-green-700 bg-green-300"
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-green-700">
                Password
              </Label>
              <Link
                href="/forgot-password"
                className="text-sm text-green-600 hover:text-green-800 hover:underline transition-colors"
              >
                Forgot Password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="border-green-200 focus:border-green-500 focus:ring-green-500
              placeholder:text-green-700 bg-green-300"  
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5"
          >
            Sign In
          </Button>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-green-100 pt-4">
          <p className="text-sm text-green-600">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-green-700 hover:text-green-900 hover:underline transition-colors"
            >
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
