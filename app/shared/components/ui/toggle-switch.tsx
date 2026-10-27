

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
    <div className="flex items-center justify-between gap-4 border border-[#303030] bg-[#151515] p-4">
      <span className="text-sm font-medium text-white">
        {label}
      </span>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative h-7 w-14 shrink-0 rounded-full transition-colors duration-200 ${
          checked ? "bg-[#5451EB]" : "bg-[#444444]"
        } disabled:cursor-not-allowed disabled:opacity-50`}
      >
        <span
          className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
            checked ? "translate-x-7" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
