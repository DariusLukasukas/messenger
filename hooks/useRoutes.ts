import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";
import { TbLogout, TbMessage, TbUsers } from "react-icons/tb";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: "Chats",
        href: "/conversations",
        icon: TbMessage,
        active: pathname === "/conversations" || !!conversationId,
      },
      {
        label: "Users",
        href: "/users",
        icon: TbUsers,
        active: pathname === "/users",
      },
      {
        label: "Logout",
        onClick: () => signOut(),
        href: "#",
        icon: TbLogout,
      },
    ],
    [pathname, conversationId]
  );

  return routes;
};

export default useRoutes;
