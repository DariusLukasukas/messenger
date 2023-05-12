import bcrypt from "bcrypt";

import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
// const signInResult = await signIn("credentials", {
//   //   email: data.email.toLowerCase(),
//   ...data,
//   redirect: false,
//   callbackUrl: searchParams?.get("from") || "/conversations",
// });

// if (!signInResult?.ok) {
//   return toast({
//     title: "Something went wrong.",
//     description: "Your sign in request failed. Please try again.",
//     variant: "destructive",
//   });
// } else if (signInResult?.ok) {
//   router.push("/conversations");
// }

// return setIsLoading(false);
