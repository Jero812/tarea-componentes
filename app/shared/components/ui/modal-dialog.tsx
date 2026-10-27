
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="w-full max-w-md border border-[#383838] bg-[#151515] p-6 shadow-2xl"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2
            id="modal-title"
            className="text-xl font-bold text-white"
          >
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana"
            className="text-xl text-gray-400 hover:text-[#E7F05A]"
          >
            ×
          </button>
        </div>

        {description && (
          <p className="mb-4 text-sm leading-6 text-gray-400">
            {description}
          </p>
        )}

        {children}

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="border border-[#383838] px-4 py-2 text-sm text-white hover:border-[#E7F05A]"
          >
            Cancelar
          </button>

          {confirmLabel && onConfirm && (
            <button
              type="button"
              onClick={onConfirm}
              className="bg-[#E7F05A] px-4 py-2 text-sm font-semibold text-black hover:bg-[#D8E448]"
            >
              {confirmLabel}
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
