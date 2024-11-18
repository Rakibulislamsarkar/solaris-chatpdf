'use client'

import React, { useState } from "react";
import { Inbox, Phone, Settings, ShieldCheck, Upload } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "@/components/nav-user";
import Link from 'next/link';
import Fileupload from "./file-upload";

// Menu items.
const data = {
  user: {
    name: "rabbi",
    email: "m@example.com",
    avatar: "/rabbi.jpg",
  },
};

const items = [
  {
    title: "Upload PDF",
    url: "#",
    icon: Upload,
  },
  {
    title: "Workspace",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Upgrade",
    url: "/upgrade",
    icon: ShieldCheck,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Phone,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleFirstItemClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDrawerOpen(true);
  };

  const handleFileUpload = (file: File | null) => {
    if (file) {
      console.log("File uploaded:", file.name);
      console.log("File size:", file.size, "bytes");
      console.log("File type:", file.type);
    } else {
      console.log("No file was uploaded");
    }
  };

  return (
    <>
      <Sidebar collapsible="icon">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item, index) => (
                  <SidebarMenuItem key={item.title}>
                    {index === 0 ? (
                      <>
                        <SidebarMenuButton 
                          tooltip={item.title}
                          onClick={handleFirstItemClick}
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                        <Fileupload 
                          isOpen={isDrawerOpen} 
                          onOpenChange={setIsDrawerOpen}
                          onUpload={handleFileUpload}
                        />
                      </>
                    ) : (
                      <SidebarMenuButton 
                        asChild 
                        tooltip={item.title}
                      >
                        {index === 2 || index === 3 ? (
                          <Link href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        ) : (
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        )}
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>
    </>
  );
}