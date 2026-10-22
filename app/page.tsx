
"use client";

import ActionButton from "./shared/components/ui/action-button";
import StatusBadge from "./shared/components/ui/status-badge";
import AlertBanner from "./shared/components/ui/alert-banner";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#101010] text-white">
      <div className="h-2 bg-[#5451EB]" />

      <header className="border-b border-[#303030] bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-xl font-bold">
              I
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-wide">
                ICESI
              </h1>
              <p className="text-xs text-gray-400">
                Biblioteca de componentes
              </p>
            </div>
          </div>

          <span className="border border-[#333333] px-3 py-2 text-xs text-gray-300">
            DESARROLLO WEB
          </span>
        </div>
      </header>

      <div className="h-1 bg-[#5451EB]" />

      <div className="mx-auto max-w-7xl space-y-8 px-6 py-10">
        <section className="border-l-4 border-[#E7F05A] py-2 pl-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E7F05A]">
            Proyecto académico
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Componentes reutilizables
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
            Elementos de interfaz construidos con React,
            TypeScript y Tailwind CSS. Configurables mediante
            propiedades para utilizarlos en diferentes contextos.
          </p>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <article className="border border-[#303030] bg-[#151515] p-6 transition-colors hover:border-[#5451EB]">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-2xl text-[#E7F05A]">↗</span>
              <div>
                <p className="text-xs text-gray-500">
                  COMPONENTE 01
                </p>
                <h3 className="text-xl font-bold">ActionButton</h3>
              </div>
            </div>

            <p className="mb-6 text-sm leading-6 text-gray-400">
              Botones con diferentes variantes, tamaños y acciones.
            </p>

            <div className="flex flex-wrap gap-3">
              <ActionButton
                label="Guardar"
                onClick={() => alert("¡Cambios guardados!")}
              />
              <ActionButton
                label="Cancelar"
                variant="outline"
              />
              <ActionButton
                label="Ver detalles"
                variant="secondary"
                size="sm"
              />
            </div>
          </article>

          <article className="border border-[#303030] bg-[#151515] p-6 transition-colors hover:border-[#5451EB]">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-2xl text-[#E7F05A]">◉</span>
              <div>
                <p className="text-xs text-gray-500">
                  COMPONENTE 02
                </p>
                <h3 className="text-xl font-bold">StatusBadge</h3>
              </div>
            </div>

            <p className="mb-6 text-sm leading-6 text-gray-400">
              Indicadores visuales para identificar estados.
            </p>

            <div className="flex flex-wrap gap-3">
              <StatusBadge label="Activo" status="active" />
              <StatusBadge label="Pendiente" status="pending" />
              <StatusBadge label="Error" status="error" />
              <StatusBadge label="Sin estado" />
            </div>
          </article>
        </section>

        <section className="border border-[#303030] bg-[#151515] p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-2xl text-[#E7F05A]">◇</span>
            <div>
              <p className="text-xs text-gray-500">
                COMPONENTE 03
              </p>
              <h3 className="text-xl font-bold">AlertBanner</h3>
            </div>
          </div>

          <p className="mb-6 text-sm text-gray-400">
            Mensajes informativos, confirmaciones y advertencias.
          </p>

          <div className="space-y-4">
            <AlertBanner
              title="Operación exitosa"
              message="Los cambios se guardaron correctamente."
              type="success"
            />
            <AlertBanner
              title="Información"
              message="Hay una nueva actualización disponible."
              type="info"
            />
            <AlertBanner
              title="Atención"
              message="Revisa los datos antes de continuar."
              type="warning"
            />
            <AlertBanner
              title="Error"
              message="No fue posible completar la operación."
              type="error"
            />
          </div>
        </section>

        <footer className="flex flex-col justify-between gap-2 border-t border-[#303030] pt-5 text-xs text-gray-500 sm:flex-row">
          <span>Desarrollo de componentes reutilizables</span>
          <span>Universidad Icesi · 2026</span>
        </footer>
      </div>
    </main>
  );
}
