"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authClient } from "@/lib/auth-client";

export default function Avatar01() {
  const { data: session } = authClient.useSession();
  if (!session) {
    return null; // or a loading state, or a prompt to log in
  }
  const userName = session?.user.name;
  const imageUrl =
    session?.user.image ||
    `https://avatar.vercel.sh/${encodeURIComponent(userName)}?size=60`;

  return (
    <Avatar>
      <AvatarImage src={imageUrl} alt={userName} />
      <AvatarFallback>{userName[0]}</AvatarFallback>
    </Avatar>
  );
}
