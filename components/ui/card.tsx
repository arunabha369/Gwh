import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverLift?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverLift = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white border-[1.5px] border-[#222222] rounded-card p-32 shadow-soft transition-all duration-300",
          hoverLift && "hover:-translate-y-6 hover:shadow-soft-hover",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export const CardHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-8", className)} {...props} />
);
CardHeader.displayName = "CardHeader";

export const CardTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={cn(
      "font-heading text-24 md:text-32 font-bold leading-none tracking-tight",
      className
    )}
    {...props}
  />
);
CardTitle.displayName = "CardTitle";

export const CardDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-14 text-muted", className)} {...props} />
);
CardDescription.displayName = "CardDescription";

export const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("pt-16", className)} {...props} />
);
CardContent.displayName = "CardContent";

export const CardFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center pt-24", className)} {...props} />
);
CardFooter.displayName = "CardFooter";
