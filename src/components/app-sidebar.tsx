'use client'

import React, { useState, useRef } from "react";
import { Inbox, Phone, Search, Settings, ShieldCheck, Upload } from 'lucide-react';
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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import Link from 'next/link';

// Menu items.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
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
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFirstItemClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDrawerOpen(true);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : null);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log("Uploading file:", fileName);
    setIsDrawerOpen(false);
    setFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
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
                    <SidebarMenuButton 
                      asChild 
                      tooltip={item.title}
                      onClick={index === 0 ? handleFirstItemClick : undefined}
                    >
                      {index === 2 || 3 ? (
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

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="max-w-md mx-auto p-4 rounded-lg shadow-lg">
          <DrawerHeader>
            <DrawerTitle className="text-2xl md:text-3xl tracking-tighter font-semibold text-center">Upload PDF</DrawerTitle>
            <DrawerDescription className="mt-5">
            <div className="p-4 pb-0">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="file-upload">Select Files to Upload</Label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full justify-start text-left font-normal"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  {fileName || 'Select PDF or document'}
                </Button>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                />
                {fileName && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setFileName(null);
                      if (fileInputRef.current) {
                        fileInputRef.current.value = '';
                      }
                    }}
                  >
                    Clear
                  </Button>
                )}
              </div>
              {fileName && <p className="text-sm text-muted-foreground mt-1">Selected file: {fileName}</p>}
            </div>
          </div>
            </DrawerDescription>
          </DrawerHeader>
         
          <DrawerFooter>
            <Button onClick={handleUpload} disabled={!fileName}>Upload</Button>
            <DrawerClose asChild>
              <Button variant="destructive">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}