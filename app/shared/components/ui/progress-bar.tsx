
interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  variant?: "primary" | "success" | "warning";
}

const variants = {
  primary: "progress-primary",
  success: "progress-success",
  warning: "progress-warning",
};

export default function ProgressBar({
  value,
  max = 100,
  label,
  showPercentage = true,
  variant = "primary",
}: ProgressBarProps) {
  const percentage =
    max > 0
      ? Math.min(100, Math.max(0, (value / max) * 100))
      : 0;

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-3">
        {label && (
          <span className="text-sm font-medium">{label}</span>
        )}

        {showPercentage && (
          <span className="text-sm opacity-70">
            {Math.round(percentage)}%
          </span>
        )}
      </div>

      <progress
        className={`progress w-full ${variants[variant]}`}
        value={percentage}
        max={100}
        aria-label={label ?? "Progreso"}
      />
    </div>
  );
}
