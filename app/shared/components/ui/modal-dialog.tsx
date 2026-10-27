
"use client";

import type { ReactNode } from "react";

interface ModalDialogProps {
  isOpen: boolean;
  title: string;
  description?: string;
  children?: ReactNode;
  onClose: () => void;
  confirmLabel?: string;
  onConfirm?: () => void;
}

export default function ModalDialog({
  isOpen,
  title,
  description,
  children,
  onClose,
  confirmLabel,
  onConfirm,
}: ModalDialogProps) {
  if (!isOpen) return null;

  return (
    <div
      className="modal modal-open"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="modal-box border border-base-300"
      >
        <h2 id="modal-title" className="text-xl font-bold">
          {title}
        </h2>

        {description && (
          <p className="py-4 text-base-content/70">
            {description}
          </p>
        )}

        {children}

        <div className="modal-action">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-ghost"
          >
            Cancelar
          </button>

          {confirmLabel && onConfirm && (
            <button
              type="button"
              onClick={onConfirm}
              className="btn btn-primary"
            >
              {confirmLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

