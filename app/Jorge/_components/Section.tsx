import type { PropsWithChildren } from "react";

export function SectionTitle({ children }: PropsWithChildren) {
  return (
    <h2 className="text-lg font-semibold tracking-wide text-white/90 sm:text-xl">
      <span className="jorge-gradient-text">{children}</span>
    </h2>
  );
}

export function SectionWrap({ children }: PropsWithChildren) {
  return <div className="space-y-3 sm:space-y-4">{children}</div>;
}
