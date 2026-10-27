
import type { InputHTMLAttributes } from "react";

interface FormInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  error?: string;
}

export default function FormInput({
  label,
  helperText,
  error,
  id,
  className = "",
  ...props
}: FormInputProps) {
  const inputId = id ?? props.name ?? "form-input";

  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={inputId}
        className="text-sm font-semibold text-white"
      >
        {label}
      </label>

      <input
        id={inputId}
        className={`w-full border bg-[#151515] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-[#E7F05A] ${
          error ? "border-red-500" : "border-[#383838]"
        } ${className}`}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error || helperText ? `${inputId}-description` : undefined
        }
        {...props}
      />

      {(error || helperText) && (
        <p
          id={`${inputId}-description`}
          className={`text-xs ${error ? "text-red-400" : "text-gray-400"}`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
}
