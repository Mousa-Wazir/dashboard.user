
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedHamburgerProps {
  open: boolean;
  onClick: () => void;
  "aria-label"?: string;
  className?: string;
}

const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({
  open,
  onClick,
  "aria-label": ariaLabel = "Open menu",
  className = "",
}) => {
  return (
    <button
      className={cn(
        "group relative flex items-center justify-center w-11 h-11 rounded-md bg-accent border border-border shadow-lg transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-95 hover:shadow-2xl hover:bg-accent/70",
        className
      )}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {/* Hamburger lines */}
      <span
        className={cn(
          "block absolute w-7 h-0.5 bg-muted-foreground rounded transition-all duration-300",
          open
            ? "rotate-45 top-1/2 left-2.5 translate-y-0"
            : "top-3 left-2.5"
        )}
      />
      <span
        className={cn(
          "block absolute w-7 h-0.5 bg-muted-foreground rounded transition-all duration-300",
          open ? "opacity-0 left-2.5 top-1/2" : "top-5 left-2.5"
        )}
      />
      <span
        className={cn(
          "block absolute w-7 h-0.5 bg-muted-foreground rounded transition-all duration-300",
          open
            ? "-rotate-45 top-1/2 left-2.5"
            : "top-7 left-2.5"
        )}
      />
    </button>
  );
};

export default AnimatedHamburger;
