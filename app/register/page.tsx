import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button/Button";
import { UserAuthForm } from "@/components/auth/UserAuthForm";
import { TbMessages } from "react-icons/tb";

export const metadata = {
  title: "Create an account",
  description: "Create an account to get started.",
};

export default function RegisterPage() {
  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Login
      </Link>
      <div className="hidden h-full lg:block bg-muted registerbg" />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <TbMessages className="mx-auto h-6 w-6 text-blue-500" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter the fields below to get started
            </p>
          </div>
          <UserAuthForm variant={"REGISTER"} />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href=""
              className="hover:text-brand underline underline-offset-4 pointer-events-none"
              prefetch={false}
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href=""
              className="hover:text-brand underline underline-offset-4 pointer-events-none"
              prefetch={false}
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
