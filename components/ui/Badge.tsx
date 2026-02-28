import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "white" | "dark";
  className?: string;
}

export default function Badge({ children, variant = "green", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border",
        {
          "text-primary bg-primary/10 border-primary/20": variant === "green",
          "text-white bg-white/10 border-white/15": variant === "white",
          "text-slate-600 bg-slate-100 border-slate-200": variant === "dark",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
