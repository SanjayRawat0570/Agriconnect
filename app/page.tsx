"use client"

import React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  ArrowRight,
  Sprout,
  Building2,
  TruckIcon,
  BarChart3,
  ShieldCheck,
  Users,
  Moon,
  Sun,
  ShoppingCart,
} from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Sprout className="h-6 w-6 text-green-600" />
              <span className="text-xl font-bold">AgriConnect</span>
            </div>
            <nav className="hidden md:flex gap-6">
              <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
                How It Works
              </Link>
              <Link href="#features" className="text-sm font-medium hover:text-primary">
                Features
              </Link>
              <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
                Testimonials
              </Link>
              <Link href="/products" className="text-sm font-medium hover:text-primary">
                Products
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
                Log in
              </Link>
              <Button asChild className="dark:bg-green-400 dark:text-white">
                <Link href="/signup">Sign up</Link>
              </Button>
              <Link href="/cart">
               <ShoppingCart className="h-6 w-6 text-green-600" />
              </Link>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Direct Farm-to-Business Marketplace
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Connect farmers directly with businesses. List crops, find buyers, and grow your agricultural
                      business with our platform.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button size="lg" className="bg-green-500 hover:bg-green-600 ">
                      <Link href="/signup" className="flex items-center ">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </div>
                  <div className="mt-6 flex w-full max-w-md items-center space-x-2">
                    <Input type="text" placeholder="Search for crops..." className="rounded-l-md border-r-0" />
                    <Button type="submit" className="rounded-l-none bg-green-500 hover:bg-green-700">
                      <Search className="h-4 w-4" />
                      <span className="sr-only">Search</span>
                    </Button>
                  </div>
                </div>

                <Image
                  src="/placeholder1.png?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Farm produce"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square shadow-[0_25px_80px_rgba(0,150,0,0.85)]"
                />




              </div>
            </div>
          </section>

          <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted dark:bg-muted/50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm text-green-800 dark:text-green-300">
                    Simple Process
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How FarmConnect Works</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl">
                    Our platform makes it easy for farmers to connect with businesses and sell their crops directly.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3 md:gap-12">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                    <Sprout className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold">Farmers List Crops</h3>
                  <p className="text-muted-foreground">
                    Create a profile and list your available crops with details on quantity, quality, and pricing.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                    <Building2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold">Businesses Browse & Order</h3>
                  <p className="text-muted-foreground">
                    Businesses search for crops, compare options, and place orders directly with farmers.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                    <TruckIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold">Delivery & Payment</h3>
                  <p className="text-muted-foreground">
                    Coordinate delivery and receive secure payments through our platform.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}

          <Benefits/>
          
      
            {/* Testimonials Section */}    
          <Reviews/>
          

          <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 dark:bg-green-500 text-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Ready to Transform Your Agricultural Business?
                  </h2>
                  <p className="max-w-[900px] md:text-xl">
                    Join thousands of farmers and businesses already using FarmConnect to grow their operations.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-300">
                    Sign Up Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700">
                    Request Demo
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="w-full border-t bg-background py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
            <div className="flex items-center gap-2">
              <Sprout className="h-6 w-6 text-green-600" />
              <span className="text-xl font-bold">AgriConnect</span>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Terms
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Privacy
              </Link>
              <a
                href="https://www.linkedin.com/in/rahul-rawat01/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                Contact
              </a>

            </nav>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} AgriConnect. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

import { useTheme } from "next-themes"
import Reviews from "./reviews"
import Benefits from "./benefits"

interface ThemeToggleProps extends React.HTMLAttributes<HTMLButtonElement> { }

const ThemeToggle = React.forwardRef<HTMLButtonElement, ThemeToggleProps>(({ className, ...props }, ref) => {
  const { setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      className={className}
      onClick={() => setTheme((theme) => (theme === "light" ? "dark" : "light"))}
      {...props}
      ref={ref}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
})
ThemeToggle.displayName = "ThemeToggle"

