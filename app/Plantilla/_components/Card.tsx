import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type CardProps = PropsWithChildren<{ className?: string }>;

export function Card({ className, children }: CardProps) {
  return <section className={cn("plantilla-card", className)}>{children}</section>;
}
