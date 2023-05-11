"use client";

import DesktopItem from "./DesktopItem";
import useRoutes from "@/hooks/useRoutes";
import SettingsModal from "../modals/SettingsModal";
import { useState } from "react";
import Avatar from "../ui/avatar/Avatar";
import { User } from "@prisma/client";
import { TbMessages, TbSettings } from "react-icons/tb";

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
      "
      >
        <nav className="flex flex-col justify-between">
          <ul role="list" className="flex flex-col items-center space-y-1">
            <div className="text-blue-500 pt-4 mb-4">
              <TbMessages size={24} className="shrink-0" aria-hidden="true" />
            </div>
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={item.onClick}
              />
            ))}
            <div
              onClick={() => setIsOpen(true)}
              className="cursor-pointer hover:opacity-75 transition p-3 text-gray-500 hover:text-black hover:bg-gray-100 order-1"
            >
              <TbSettings size={24} className="shrink-0" aria-hidden="true" />
            </div>
          </ul>
        </nav>
        <nav className="mt-4 flex flex-col justify-between items-center">
          <div
            // onClick={() => setIsOpen(true)}
            className="cursor-pointer hover:opacity-75 transition"
          >
            <Avatar user={currentUser} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default DesktopSidebar;