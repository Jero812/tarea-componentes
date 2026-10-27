

import type { ButtonHTMLAttributes } from "react";

interface ActionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline: "btn-outline",
};

const sizes = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

export default function ActionButton({
  label,
  variant = "primary",
  size = "md",
  disabled,
  className = "",
  type = "button",
  ...props
}: ActionButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`btn ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}

