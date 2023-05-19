"use client";

import DesktopItem from "./DesktopItem";
import useRoutes from "@/hooks/useRoutes";
import SettingsModal from "../modals/SettingsModal";
import { useState } from "react";
import { User } from "@prisma/client";
import { TbMessages, TbSettings } from "react-icons/tb";
import { UserAccountNav } from "./UserAccountNav";
import Image from "next/image";

interface DesktopSidebarProps {
  currentUser: User;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div
        className="
        hidden
        md:fixed
        md:inset-y-0
        md:left-0
        md:z-40
        md:w-20
        xl:px-6
        md:overflow-y-auto
        lg:bg-white
        md:border-r-[1px]
        md:pb-4
        md:flex
        md:flex-col
        justify-start
        dark:bg-background
        dark:border-neutral-600
      "
      >
        <nav className="flex flex-col justify-between h-full">
          <ul role="list" className="flex flex-col items-center space-y-1">
            <div className="text-blue-500 pt-4 mb-4">
              <Image
                height="48"
                width="48"
                className="mx-auto w-auto"
                src="/images/logo.png"
                alt="Logo"
              />
            </div>
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
              />
            ))}
          </ul>
          <div className="mt-4 flex flex-col space-y-1 items-center">
            <div
              onClick={() => setIsOpen(true)}
              className="cursor-pointer hover:opacity-75 rounded-md transition p-3 text-gray-500 hover:text-black hover:bg-gray-100"
            >
              <TbSettings size={24} className="shrink-0" aria-hidden="true" />
            </div>
            <UserAccountNav user={currentUser} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default DesktopSidebar;
