import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-badge border-[1.5px] border-[#222222] px-12 py-4 text-xs font-semibold select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-[#222222]",
        secondary: "bg-[#F8F4E8] text-[#111111] border-[#222222]",
        accent: "bg-accent text-accent-foreground border-[#222222]",
        success: "bg-[#22C55E] text-white border-[#222222]",
        danger: "bg-[#EF4444] text-white border-[#222222]",
        outline: "bg-transparent text-[#111111] border-[#222222]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
export type { BadgeProps };
