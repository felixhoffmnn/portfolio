import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/cn";

// TODO: Fix link underlining
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 !no-underline",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 !no-underline",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground !no-underline",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 !no-underline",
        ghost: "hover:bg-accent hover:text-accent-foreground !no-underline",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-12 w-12 p-3 rounded-md md:h-14 md:w-14",
        "icon-sm": "h-10 w-10 p-2 rounded-md md:h-12 md:w-12",
        none: "p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
