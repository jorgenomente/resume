import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = PropsWithChildren<{ highlight?: boolean; className?: string }>;

export function Badge({ highlight = false, className, children }: BadgeProps) {
  return (
    <span className={cn("paolav2-badge", highlight && "paolav2-badge--highlight", className)}>
      {children}
    </span>
  );
}
