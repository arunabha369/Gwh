import * as React from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-none text-sm font-bold whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 gap-2 border-[1.5px] border-[#222222] select-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-[#111111] shadow-[2px_2px_0_#111111] hover:bg-[#ffdb58] hover:-translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0_#111111] active:translate-y-[2px] active:translate-x-[2px] active:shadow-none",
        secondary:
          "bg-transparent text-[#111111] hover:bg-[#222222]/5 active:bg-[#222222]/10",
        ghost:
          "bg-transparent text-[#111111] border-transparent hover:text-primary link-underline",
        destructive:
          "bg-destructive text-destructive-foreground border-transparent hover:bg-destructive/90",
      },
      size: {
        default: "h-[46px] px-6 text-[14px]",
        sm: "h-[36px] px-4 text-xs",
        lg: "h-[54px] px-8 text-[15px]",
        icon: "size-[46px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonPrimitive.Props,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <ButtonPrimitive
        ref={ref}
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };
