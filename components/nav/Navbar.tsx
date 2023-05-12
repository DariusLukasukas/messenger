"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { TbMessages } from "react-icons/tb";
import { buttonVariants } from "../ui/button/Button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full">
      <div className="container flex h-16 items-center space-x-4 justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          <TbMessages className="mx-auto h-6 w-6 text-blue-500" />
          <span className="font-bold">Messenger</span>
        </Link>
        <Link
          href="/login"
          className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
