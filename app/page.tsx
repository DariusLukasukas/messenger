import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button/Button";
import Navbar from "@/components/nav/Navbar";
import Features from "./components/features/Features";

export default function page() {
  return (
    <>
      <div className="container w-full">
        <Navbar />
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <Link
              href="https://twitter.com/dariuslukasukas"
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              Follow along on Twitter
            </Link>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              An example app built using Next.js 13 server components.
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              I&apos;m building a web app with Next.js 13 and open sourcing
              everything. Follow along as we figure this out together.
            </p>
            <div className="space-x-4">
              <Link
                href="/login"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Get Started
              </Link>
              <Link
                href="https://github.com/DariusLukasukas/messenger"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" })
                )}
              >
                GitHub
              </Link>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Features
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              This project is an experiment to see how a modern app, with
              features like auth, real-time messaging, API routes, and static
              pages would work in Next.js 13 app dir.
            </p>
          </div>
          <Features />
        </section>
      </div>
    </>
  );
}
