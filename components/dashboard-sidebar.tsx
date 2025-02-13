"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  ShieldCheckIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { buttonVariants } from "./ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "./ui/sidebar";

const items = [
  { title: "Home", url: "", icon: HomeIcon },
  { title: "Workflows", url: "Workflows", icon: Layers2Icon },
  { title: "Credentials", url: "credentials", icon: ShieldCheckIcon },
  { title: "Billing", url: "billing", icon: CoinsIcon },
];

const DashboardSidebar = () => {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const activeRoute =
    items.find((item) => item.url.length > 0 && pathname.includes(item.url)) ||
    items[0];
  const { setOpenMobile, open } = useSidebar();

  return (
    <Sidebar className="px-2">
      <SidebarHeader className="my-2">
        {isMobile ? (
          <div className="flex items-center justify-between">
            <Logo />
            <SidebarTrigger />
          </div>
        ) : (
          <Logo />
        )}
      </SidebarHeader>
      <SidebarContent className="mt-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link
                  onClick={() => setOpenMobile(!open)}
                  href={item.url}
                  className={buttonVariants({
                    variant:
                      activeRoute.url === item.url
                        ? "sidebarActiveItem"
                        : "sidebarItem",
                  })}
                >
                  <item.icon size={20} />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;
