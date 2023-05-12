"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { FieldValues, useForm } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Loader2 } from "lucide-react";
import { buttonVariants } from "../ui/button/Button";
import { toast } from "@/components/ui/toast/use-toast";

import axios from "axios";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}
type Variant = "LOGIN" | "REGISTER";

export function UserAuthForm({
  className,
  variant,
  ...props
}: UserAuthFormProps) {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/conversations");
    }
  }, [session?.status, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isGitHubLoading, setIsGitHubLoading] = useState(false);

  const searchParams = useSearchParams();

  async function onSubmit(data: FieldValues) {
    setIsLoading(true);

    if (variant === "LOGIN") {
      signIn("credentials", {
        ...data,
        redirect: false,
        callbackUrl: searchParams?.get("from") || "/conversations",
      })
        .then((callback) => {
          if (callback?.error) {
            return toast({
              title: "Invalid credentials!.",
              description: "Your sign in request failed. Please try again.",
              variant: "destructive",
            });
          }

          if (callback?.ok) {
            router.push("/conversations");
          }
        })
        .catch(() =>
          toast({
            title: "Something went wrong!",
            description: "Your sign in request failed. Please try again.",
            variant: "destructive",
          })
        )
        .finally(() => setIsLoading(false));
    } else if (variant === "REGISTER") {
      axios
        .post("/api/register", {
          ...data,
          email: data.email.toLowerCase(),
        })
        .then(() =>
          signIn("credentials", {
            ...data,
            redirect: false,
          })
        )
        .then((callback) => {
          if (callback?.error) {
            return toast({
              title: "Invalid credentials!.",
              description: "Your sign in request failed. Please try again.",
              variant: "destructive",
            });
          }

          if (callback?.ok) {
            router.push("/conversations");
          }
        })
        .catch(() =>
          toast({
            title: "Something went wrong!",
            description: "Your sign up request failed. Please try again.",
            variant: "destructive",
          })
        )
        .finally(() => setIsLoading(false));
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-3">
          <div className="grid gap-2">
            {variant === "REGISTER" && (
              <div>
                <Label className="sr-only" htmlFor="name">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  type="string"
                  required
                  disabled={isLoading}
                  {...register("name")}
                />
              </div>
            )}
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              required
              disabled={isLoading || isGitHubLoading}
              {...register("email")}
            />
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              required
              {...register("password")}
            />
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign In with Email
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {
          setIsGitHubLoading(true);
          signIn("github", { redirect: true });
        }}
        disabled={isLoading || isGitHubLoading}
      >
        {isGitHubLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Github className="mr-2 h-4 w-4" />
        )}
        Github
      </button>
    </div>
  );
}
