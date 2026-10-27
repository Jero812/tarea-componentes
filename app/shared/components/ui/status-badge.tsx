
interface StatusBadgeProps {
  label: string;
  status?: "active" | "pending" | "error" | "neutral";
}

const statusStyles = {
  active: "badge-success",
  pending: "badge-warning",
  error: "badge-error",
  neutral: "badge-ghost",
};

const statusSymbols = {
  active: "●",
  pending: "◷",
  error: "!",
  neutral: "—",
};

export default function StatusBadge({
  label,
  status = "neutral",
}: StatusBadgeProps) {
  return (
    <span
      className={`badge ${statusStyles[status]} gap-2 px-3 py-3`}
    >
      <span aria-hidden="true">{statusSymbols[status]}</span>
      {label}
    </span>
  );
}
