import { Button } from "@/components/ui/button";
import { LogoPolar } from "@/registry/default/ui/polar/logo-polar";

export default function PolarButton() {
  return (
    <div>
      <Button>
        <LogoPolar />
        Billing View
      </Button>
    </div>
  );
}
