
interface AlertBannerProps {
  title: string;
  message: string;
  type?: "info" | "success" | "warning" | "error";
}

const alertStyles = {
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error",
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
      className={`alert ${alertStyles[type]}`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-current font-bold">
        {alertSymbols[type]}
      </span>

      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}
