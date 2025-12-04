import type { PropsWithChildren } from "react";

export function SectionTitle({ children }: PropsWithChildren) {
  return (
    <h2 className="text-2xl font-semibold text-[color:var(--ink-100)] tracking-tight">{children}</h2>
  );
}

export function SectionWrap({ children }: PropsWithChildren) {
  return <div className="space-y-4">{children}</div>;
}
