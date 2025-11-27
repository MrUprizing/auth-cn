"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { LogoPolar } from "@/registry/default/ui/polar/logo-polar";

export default function PolarButton() {
  return (
    <div>
      <Button onClick={() => authClient.customer.portal()}>
        <LogoPolar />
        Billing View
      </Button>
    </div>
  );
}
