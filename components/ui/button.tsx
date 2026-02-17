"use client";
import * as React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// Create a motion component for Next.js Link
// We need to forward ref properly for Link
const LinkBehavior = React.forwardRef<HTMLAnchorElement, React.ComponentProps<typeof Link>>((props, ref) => (
  <Link ref={ref} {...props} />
));
LinkBehavior.displayName = "LinkBehavior";

const MotionLink = motion(LinkBehavior);

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "liquid";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  href?: string;
  external?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps & { asChild?: boolean }>(
  ({ className, variant = "primary", size = "md", children, isLoading, href, external, asChild, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent/10 hover:text-accent",
      outline: "border border-border bg-transparent hover:bg-accent/5 hover:border-accent/50",
      liquid: "bg-gradient-to-br from-indigo-500/80 via-purple-500/80 to-pink-500/80 text-white backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(168,85,247,0.4),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6),inset_0_1px_0_0_rgba(255,255,255,0.4)] hover:-translate-y-0.5",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    const classes = cn(
      "relative inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer", // cursor-pointer for links
      variants[variant],
      sizes[size],
      className
    );

    const animationProps = {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.95 },
      transition: { type: "spring", stiffness: 400, damping: 17 } as const,
    };

    const content = (
      <>
        {isLoading ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </>
    );

    if (href) {
      if (external || href.startsWith('#')) {
        return (
          <motion.a
            href={href}
            ref={ref as React.Ref<HTMLAnchorElement>}
            className={classes}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            {...animationProps}
            {...(props as HTMLMotionProps<"a">)}
          >
            {content}
          </motion.a>
        );
      }
      return (
        <MotionLink
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...animationProps}
          {...(props as any)} // MotionLink props typing can be tricky
        >
          {content}
        </MotionLink>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...animationProps}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
