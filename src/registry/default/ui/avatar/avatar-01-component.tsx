import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Avatar01Component() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <Avatar>
        <AvatarImage
          src="https://avatar.vercel.sh/shadcn?size=60"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://avatar.vercel.sh/evilrabbit?size=60"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://avatar.vercel.sh/uprizing?size=60"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://avatar.vercel.sh/maxleiter?size=60"
          alt="@maxleiter"
        />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://avatar.vercel.sh/evilrabbit?size=60"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </div>
  );
}
