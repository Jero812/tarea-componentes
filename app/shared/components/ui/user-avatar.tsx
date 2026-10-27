
interface UserAvatarProps {
  name: string;
  imageUrl?: string;
  size?: "sm" | "md" | "lg";
  showName?: boolean;
}

const sizes = {
  sm: "w-8",
  md: "w-11",
  lg: "w-14",
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
    <div className="flex items-center gap-3">
      <div className={`avatar ${imageUrl ? "" : "placeholder"}`}>
        <div
          className={`${sizes[size]} aspect-square flex items-center justify-center rounded-full border border-primary bg-base-300 text-base-content`}
        >
          {imageUrl ? (
            <img src={imageUrl} alt={name} />
          ) : (
            <span className="font-bold text-primary">{initials}</span>
          )}
        </div>
      </div>

      {showName && (
        <span className="text-sm font-medium">{name}</span>
      )}
    </div>
  );
}

