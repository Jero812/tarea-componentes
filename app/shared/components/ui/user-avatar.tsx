

interface UserAvatarProps {
  name: string;
  imageUrl?: string;
  size?: "sm" | "md" | "lg";
  showName?: boolean;
}

const sizes = {
  sm: "h-9 w-9 text-xs",
  md: "h-11 w-11 text-sm",
  lg: "h-14 w-14 text-base",
};

export default function UserAvatar({
  name,
  imageUrl,
  size = "md",
  showName = true,
}: UserAvatarProps) {
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div className="inline-flex min-w-0 items-center gap-3">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className={`${sizes[size]} shrink-0 rounded-full border border-[#5451EB] object-cover`}
        />
      ) : (
        <div
          aria-label={name}
          className={`${sizes[size]} flex shrink-0 items-center justify-center rounded-full border border-[#5451EB] bg-[#24213D] font-bold text-[#E7F05A]`}
        >
          {initials}
        </div>
      )}

      {showName && (
        <span className="text-sm font-medium text-white">
          {name}
        </span>
      )}
    </div>
  );
}

