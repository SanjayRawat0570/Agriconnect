"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft } from "lucide-react";

// Supabase client setup (or import from /lib/supabaseClient)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function SignupPage() {
  const [form, setForm] = useState({ fullName: "", email: "", password: "", confirmPassword: "", userType: "buyer" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSignup = async () => {
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const { data, error: signUpError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          fullName: form.fullName,
          userType: form.userType,
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b">
      <Card className="w-full max-w-md bg-green-300 border-green-100 shadow-md">
        <CardHeader className="space-y-2 text-center">
          <Link href="/">
            <Button className="flex items-center justify-center mr-auto ml-0 bg-green-300 hover:bg-green-500 h-5 w-5">
              <ArrowLeft className="text-green-700 w-6 h-5" size={20} />
            </Button>
          </Link>
          <div className="mx-auto w-16 h-16 mb-2 relative">
            <div className="absolute inset-0 rounded-full bg-green-100 animate-pulse"></div>
            <Image src="/logo.png" alt="Logo" width={64} height={64} className="relative z-10 rounded-xl" />
          </div>
          <CardTitle className="text-2xl font-bold text-green-800">Join AgriConnect</CardTitle>
          <CardDescription className="text-green-600">Create an account to start buying or selling</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {error && <p className="text-red-700 text-sm">{error}</p>}

          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-green-700">Full Name</Label>
            <Input id="fullName" value={form.fullName} onChange={handleChange} placeholder="Enter your full name" className="bg-green-300" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-green-700">Email</Label>
            <Input id="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="bg-green-300" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-green-700">Password</Label>
            <Input id="password" type="password" value={form.password} onChange={handleChange} className="bg-green-300" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-green-700">Confirm Password</Label>
            <Input id="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} className="bg-green-300" required />
          </div>

          <div className="space-y-2">
            <Label className="text-green-700">I am a:</Label>
            <RadioGroup value={form.userType} onValueChange={(val) => setForm({ ...form, userType: val })} className="flex space-x-2">
              <div className="flex items-center space-x-2 bg-green-400 p-3 rounded-md border border-green-100 flex-1 cursor-pointer hover:bg-green-500">
                <RadioGroupItem value="farmer" id="farmer" />
                <Label htmlFor="farmer" className="cursor-pointer">Farmer</Label>
              </div>
              <div className="flex items-center space-x-2 bg-green-400 p-3 rounded-md border border-green-100 flex-1 cursor-pointer hover:bg-green-500">
                <RadioGroupItem value="buyer" id="buyer" />
                <Label htmlFor="buyer" className="cursor-pointer">Buyer</Label>
              </div>
            </RadioGroup>
          </div>

          <Button onClick={handleSignup} className="w-full bg-green-700 hover:bg-green-800 text-white">Create Account</Button>
        </CardContent>

        <CardFooter className="flex justify-center border-t border-green-100 pt-4">
          <p className="text-sm text-green-600">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-green-700 hover:text-green-900 underline">Sign in</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

