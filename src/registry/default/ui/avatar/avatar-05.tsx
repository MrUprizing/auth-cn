"use client";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export default function Avatar05() {
  const { data: session } = authClient.useSession();
  if (!session) {
    return (
      <div className="flex gap-2">
        <Button variant="outline" asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild>
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    );
  }
  const userName = session?.user.name;
  const imageUrl =
    session?.user.image ||
    `https://avatar.vercel.sh/${encodeURIComponent(userName)}?size=60`;

  return (
    <div className="flex gap-2">
      <Button variant="outline" asChild>
        <Link href="/dashboard">Dashboard</Link>
      </Button>
      <Avatar>
        <AvatarImage src={imageUrl} />
        <AvatarFallback>{userName[0]}</AvatarFallback>
      </Avatar>
    </div>
  );
}
