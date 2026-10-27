
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
    <article className="card border border-base-300 bg-base-200">
      <div className="card-body gap-3">
        {category && (
          <span className="badge badge-primary self-start">
            {category}
          </span>
        )}

        <h3 className="card-title">{title}</h3>

        <p className="text-base-content/70">{description}</p>

        {actionLabel && onActionClick && (
          <div className="card-actions justify-start pt-2">
            <button
              type="button"
              onClick={onActionClick}
              className="btn btn-primary btn-sm"
            >
              {actionLabel}
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
