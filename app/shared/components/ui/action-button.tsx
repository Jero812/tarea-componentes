
import type { ButtonHTMLAttributes } from "react";

interface ActionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary:
    "bg-[#E7F05A] text-black hover:bg-[#D8E448]",
  secondary:
    "bg-[#5451EB] text-white hover:bg-[#6663F5]",
  outline:
    "border border-[#555555] bg-transparent text-white hover:border-[#E7F05A] hover:text-[#E7F05A]",
};

const sizes = {
  sm: "px-3 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
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
      className={`inline-flex items-center justify-center border border-transparent font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E7F05A] disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}
