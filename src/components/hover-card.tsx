import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
          <img src="/logo.svg" alt="Logo" width={32} height={32} />
          <h1 className="text-xl font-semibold tracking-tight font-[customFont] hidden md:block">
            Solaris
          </h1>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/logo.svg" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">@ Solaris 2024</h4>
            <p className="text-sm">
              Chat with your documents—upload, ask, and get answers instantly.
            </p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">
                @ 2024 Solaris.app
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
