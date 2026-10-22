
interface StatusBadgeProps {
  label: string;
  status?: "active" | "pending" | "error" | "neutral";
}

const statusStyles = {
  active: "border-[#347A50] bg-[#14271B] text-[#6DDB98]",
  pending: "border-[#77702A] bg-[#292710] text-[#E7F05A]",
  error: "border-[#873E35] bg-[#2D1715] text-[#FF8C7D]",
  neutral: "border-[#444444] bg-[#202020] text-[#CCCCCC]",
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
      className={`inline-flex items-center gap-2 border px-3 py-1.5 text-xs font-medium ${statusStyles[status]}`}
    >
      <span aria-hidden="true">{statusSymbols[status]}</span>
      {label}
    </span>
  );
}
