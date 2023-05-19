"use client";

import { SiNextdotjs, SiPusher, SiReact, SiTailwindcss } from "react-icons/si";
import { TbDatabase } from "react-icons/tb";

const FeatureItems = [
  {
    icon: <SiNextdotjs className="h-12 w-12 fill-current" />,
    title: "Next.js 13",
    description: "App dir, Routing, Layouts, Loading UI and API routes.",
  },
  {
    icon: <SiReact className="h-12 w-12 fill-current" />,
    title: "React 18",
    description: "Server and Client Components. Use hook",
  },
  {
    icon: <TbDatabase className="w-12 h-12" />,

    title: "Database",
    description: "ORM using Prisma and deployed on MongoDB.",
  },
  {
    icon: <SiTailwindcss className="h-12 w-12 fill-current" />,
    title: "Components",
    description:
      "UI components built using Radix UI and styled with Tailwind CSS.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="h-12 w-12 fill-current"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    title: "Authentication",
    description: "Authentication using NextAuth.js and middleware.",
  },
  {
    icon: <SiPusher className="h-12 w-12 fill-current" />,
    title: "Messaging",
    description:
      "Real-time messaging using Pusher for seamless messaging experiences.",
  },
];

export default function Features() {
  return (
    <>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {FeatureItems.map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg border bg-background p-2"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="h-12 w-12 fill-current">{item.icon}</div>
              <div className="space-y-2">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
