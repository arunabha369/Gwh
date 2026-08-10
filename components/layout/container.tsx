import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  clean?: boolean;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Component = "div", clean = false, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          !clean && "mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12",
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";
