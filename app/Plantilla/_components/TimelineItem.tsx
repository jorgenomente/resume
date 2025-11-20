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
      className={cn("plantilla-timeline-item space-y-2", highlight && "plantilla-timeline-item--highlight")}
    >
      <h3 className="text-lg font-semibold text-[color:var(--text-0)]">{title}</h3>
      <p className="text-sm text-[color:var(--text-dim)]">
        {subtitle} • {period}
      </p>
      <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-[color:var(--text-0)] opacity-90 marker:text-[color:var(--ink-300)]">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
