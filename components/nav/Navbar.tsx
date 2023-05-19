"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { TbMessages } from "react-icons/tb";
import { buttonVariants } from "../ui/button/Button";
import { ModeToggle } from "../theme/ModeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 h-16 w-full bg-white dark:bg-background backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="flex w-full h-full flex-row justify-between items-center px-0">
        <Link href="/" className="flex items-center space-x-2">
          <TbMessages className="mx-auto h-6 w-6 text-blue-500" />
          <span className="font-bold">Messenger</span>
        </Link>
        <div>
          <div className="flex justify-center items-center gap-2">
            <Link
              href="/login"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
            >
              Login
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
