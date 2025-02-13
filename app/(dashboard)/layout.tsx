import BreadcurmbHeader from "@/components/breadcrumb-header";
import DashboardSidebar from "@/components/dashboard-sidebar";
import { ModeToggle } from "@/components/theme-mode-toggle";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { cookies } from "next/headers";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <div className="flex h-screen">
      <SidebarProvider defaultOpen={defaultOpen}>
        <DashboardSidebar />
        <div className="flex flex-col flex-1 min-h-screen">
          <div className="flex items-center">
            <SidebarTrigger />
            <header className="flex items-center justify-between px-6 py-4 h-12 container">
              <BreadcurmbHeader />
              <div className="gap-4 flex items-center">
                <ModeToggle />
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </header>
          </div>
          <Separator />
          <div className="overflow-auto">
            <div className="flex-1 container py-4 text-accent-foreground">
              {children}
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default layout;
