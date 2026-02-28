import { cn } from "@/lib/utils";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-14",
        centered && "text-center",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border",
            light
              ? "text-primary bg-primary/10 border-primary/25"
              : "text-primary bg-primary/10 border-primary/20"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-4xl md:text-5xl font-black leading-tight tracking-tight",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed max-w-2xl",
            centered && "mx-auto",
            light ? "text-slate-400" : "text-slate-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
