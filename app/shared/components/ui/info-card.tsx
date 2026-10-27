
interface InfoCardProps {
  title: string;
  description: string;
  category?: string;
  actionLabel?: string;
  onActionClick?: () => void;
}

export default function InfoCard({
  title,
  description,
  category,
  actionLabel,
  onActionClick,
}: InfoCardProps) {
  return (
    <article className="border border-[#303030] bg-[#151515] p-5 transition-colors hover:border-[#5451EB]">
      {category && (
        <span className="inline-block border border-[#5451EB] px-2 py-1 text-xs font-medium text-[#B7B5FF]">
          {category}
        </span>
      )}

      <h3 className="mt-3 text-lg font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-400">
        {description}
      </p>

      {actionLabel && onActionClick && (
        <button
          type="button"
          onClick={onActionClick}
          className="mt-5 bg-[#E7F05A] px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-[#D8E448]"
        >
          {actionLabel}
        </button>
      )}
    </article>
  );
}
