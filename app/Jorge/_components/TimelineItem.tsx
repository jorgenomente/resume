import { cn } from "@/lib/utils";

type TimelineItemProps = {
  title: string;
  subtitle: string;
  period: string;
  points: string[];
  highlight?: boolean;
};

export function TimelineItem({ title, subtitle, period, points, highlight = false }: TimelineItemProps) {
  return (
    <div
      className={cn(
        "relative pl-5 sm:pl-6",
        highlight &&
          "rounded-2xl border border-[rgba(184,110,72,0.35)] bg-[rgba(23,59,63,0.28)] pb-4 pr-4 pt-4 shadow-[0_15px_35px_rgba(0,0,0,0.25)] sm:pr-5"
      )}
    >
      <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-[#173B3F] shadow-[0_0_0_2px_rgba(184,110,72,0.35),0_10px_30px_rgba(23,59,63,0.35)]" />
      <h3 className="font-medium text-white/95">{title}</h3>
      <p className="text-sm text-white/70">
        {subtitle} • {period}
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
