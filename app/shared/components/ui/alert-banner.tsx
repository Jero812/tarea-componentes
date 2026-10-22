
interface AlertBannerProps {
  title: string;
  message: string;
  type?: "info" | "success" | "warning" | "error";
}

const alertStyles = {
  info: "border-[#4542B9] bg-[#19182C] text-[#C7C5FF]",
  success: "border-[#347A50] bg-[#14271B] text-[#8BE4AA]",
  warning: "border-[#77702A] bg-[#292710] text-[#E7F05A]",
  error: "border-[#873E35] bg-[#2D1715] text-[#FF9B8F]",
};

const alertSymbols = {
  info: "i",
  success: "✓",
  warning: "!",
  error: "×",
};

export default function AlertBanner({
  title,
  message,
  type = "info",
}: AlertBannerProps) {
  return (
    <div
      role="alert"
      className={`flex items-start gap-3 border p-4 ${alertStyles[type]}`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-current text-sm font-bold">
        {alertSymbols[type]}
      </span>

      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="mt-1 text-sm leading-6 opacity-80">
          {message}
        </p>
      </div>
    </div>
  );
}
