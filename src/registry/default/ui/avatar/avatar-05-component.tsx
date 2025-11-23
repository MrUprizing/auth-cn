"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Avatar05() {
  return (
    <div className="flex gap-12 items-center py-6">
      <div className="flex-1">
        <p className="text-sm font-semibold mb-4 text-muted-foreground">
          Is NOT authenticated
        </p>
        <div className="flex gap-2">
          <Button variant="outline">Login</Button>
          <Button>Sign Up</Button>
        </div>
      </div>

      <div className="flex-1">
        <p className="text-sm font-semibold mb-4 text-muted-foreground">
          IS authenticated
        </p>
        <div className="flex gap-2">
          <Button variant="outline">Dashboard</Button>
          <Avatar>
            <AvatarImage src="https://avatar.vercel.sh/uprizing?size=60" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
