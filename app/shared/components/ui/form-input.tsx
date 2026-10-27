
import type { InputHTMLAttributes } from "react";

interface FormInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function FormInput({
  label,
  error,
  id,
  className = "",
  ...props
}: FormInputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <fieldset className="fieldset w-full">
      <label htmlFor={inputId} className="fieldset-legend">
        {label}
      </label>

      <input
        id={inputId}
        className={`input input-bordered w-full ${
          error ? "input-error" : ""
        } ${className}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />

      {error && (
        <p id={`${inputId}-error`} className="text-sm text-error">
          {error}
        </p>
      )}
    </fieldset>
  );
}

