"use client";
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Login = () => {
    console.log("email :", email);
    console.log("password :", password);
    if (email && password) {
      toast(`${email} you have loggedin"`, {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        // action: {
        //   label: "Undo",
        //   onClick: () => console.log("Undo"),
        // },
      });
      router.push("/dashboard");
    } else {
      toast(`Please provide the credentials"`, {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        // action: {
        //   label: "Undo",
        //   onClick: () => console.log("Undo"),
        // },
      });
    }
  };
  return (
    <div className="flex justify-center items-center pt-10">
    <Card className="mx-auto max-w-sm">
    <CardHeader>
      <CardTitle className="text-2xl">Login</CardTitle>
      <CardDescription>
        Enter your email below to login to your account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            onChange={(e)=>{
              e.preventDefault()
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link href="#" className="ml-auto inline-block text-sm underline">
              Forgot your password?
            </Link>
          </div>
          <Input id="password" type="password" required   onChange={(e)=>{
              e.preventDefault()
              setPassword(e.target.value)
            }}/>
        </div>
        <Button type="submit" className="w-full" onClick={Login}>
          Login
        </Button>
    
      </div>

    </CardContent>
  </Card>
  </div>
  );
}
