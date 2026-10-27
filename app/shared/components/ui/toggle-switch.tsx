
"use client";

interface ToggleSwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export default function ToggleSwitch({
  label,
  checked,
  onChange,
  disabled = false,
}: ToggleSwitchProps) {
  return (
    <label className="flex items-center justify-between gap-4 rounded-box border border-base-300 bg-base-200 p-4">
      <span className="text-sm font-medium">{label}</span>

      <input
        type="checkbox"
        className="toggle toggle-primary"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(event.target.checked)}
        aria-label={label}
      />
    </label>
  );
}
