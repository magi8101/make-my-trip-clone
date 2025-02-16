import type { ReactNode } from "react";

export interface ButtonProps {
  variant?: "ghost" | "default";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export function Button({
  variant = "default",
  className = "",
  onClick,
  children,
}: ButtonProps) {
  return (
    <button className={`btn ${variant} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

