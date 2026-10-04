import logoMark from "@/assets/takura-logo-mark.png";
import logoMarkInverted from "@/assets/takura-logo-mark-inverted.png";
import { cn } from "@/lib/utils";

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <img
        src={inverted ? logoMarkInverted : logoMark}
        alt="Takura Overseas"
        width={160}
        height={155}
        className="h-12 w-auto shrink-0 object-contain sm:h-14"
      />
    </span>
  );
}
