
interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  variant?: "primary" | "success" | "warning";
}

const variants = {
  primary: "bg-[#5451EB]",
  success: "bg-[#6DDB98]",
  warning: "bg-[#E7F05A]",
};

export default function ProgressBar({
  value,
  max = 100,
  label,
  showPercentage = true,
  variant = "primary",
}: ProgressBarProps) {
  const percentage =
    max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-3">
        {label && (
          <span className="text-sm font-medium text-white">
            {label}
          </span>
        )}

        {showPercentage && (
          <span className="text-sm text-gray-400">
            {Math.round(percentage)}%
          </span>
        )}
      </div>

      <div
        role="progressbar"
        aria-label={label ?? "Progreso"}
        aria-valuenow={Math.round(percentage)}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 w-full overflow-hidden bg-[#303030]"
      >
        <div
          className={`h-full transition-all duration-300 ${variants[variant]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
