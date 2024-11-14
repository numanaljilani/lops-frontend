import Image from "next/image";
import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Button } from "../ui/button";

function Login() {
  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center shadow-lg">
      <div className="w-[75%] lg:grid lg:grid-cols-2 rounded-md overflow-hidden shadow-2xl shadow-blue-200">
        <div className="flex-1">
          <div className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="text-balance text-muted-foreground">
                  Enter your email below to login to your account
                </p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  //  onChange={(e :  React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
               <div className="flex items-center">
                 <Label htmlFor="password">Password</Label>
                 <Link
                   href="/forgot-password"
                   className="ml-auto inline-block text-sm underline"
                 >
                   Forgot your password?
                 </Link>
               </div>
               <Input
                 id="password"
                 type="password"
                 required
                //  onChange={(e :  React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
               />
             </div>
             <Button type="submit" className="w-full " >
               Login
             </Button>
            </div>
          </div>
        </div>
        <div className="border w-full h-full overflow-hidden">
          <Image
            src="/login.jpg"
            alt="Image"
            width="1920"
            height="1080"
            className="h-[80vh] object-fill dark:brightness-[0.2] dark:grayscale"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
