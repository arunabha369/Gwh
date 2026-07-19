import * as React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.ComponentPropsWithRef<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[56px] w-full rounded-input border-[1.5px] border-[#222222] bg-[#F8F4E8] px-24 py-16 text-16 text-[#111111] placeholder-[#6B6B6B]/70 transition-all duration-200 outline-none focus:ring-2 focus:ring-[#2457FF] focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 font-sans",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
