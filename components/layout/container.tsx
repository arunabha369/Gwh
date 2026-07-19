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
          !clean && "mx-auto w-full max-w-7xl px-24 md:px-48 lg:px-64",
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";
