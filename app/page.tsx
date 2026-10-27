

"use client";

import { useState } from "react";

import ActionButton from "./shared/components/ui/action-button";
import StatusBadge from "./shared/components/ui/status-badge";
import AlertBanner from "./shared/components/ui/alert-banner";
import FormInput from "./shared/components/ui/form-input";
import SearchBar from "./shared/components/ui/search-bar";
import UserAvatar from "./shared/components/ui/user-avatar";
import InfoCard from "./shared/components/ui/info-card";
import ToggleSwitch from "./shared/components/ui/toggle-switch";
import ProgressBar from "./shared/components/ui/progress-bar";
import ModalDialog from "./shared/components/ui/modal-dialog";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              <h1 className="text-lg font-bold tracking-wide">ICESI</h1>
              <p className="text-xs text-gray-400">
                Biblioteca de componentes
              </p>
            </div>
          </div>

          <span className="hidden border border-[#333333] px-3 py-2 text-xs text-gray-300 sm:inline-flex">
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
            Diez componentes configurables construidos con React,
            TypeScript y Tailwind CSS.
          </p>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <article className="border border-[#303030] bg-[#151515] p-6">
            <p className="text-xs text-gray-500">COMPONENTE 01</p>
            <h3 className="mb-5 mt-2 text-xl font-bold">ActionButton</h3>
            <div className="flex flex-wrap gap-3">
              <ActionButton
                label="Guardar"
                onClick={() => alert("¡Cambios guardados!")}
              />
              <ActionButton label="Cancelar" variant="outline" />
              <ActionButton
                label="Ver detalles"
                variant="secondary"
                size="sm"
              />
            </div>
          </article>

          <article className="border border-[#303030] bg-[#151515] p-6">
            <p className="text-xs text-gray-500">COMPONENTE 02</p>
            <h3 className="mb-5 mt-2 text-xl font-bold">StatusBadge</h3>
            <div className="flex flex-wrap gap-3">
              <StatusBadge label="Activo" status="active" />
              <StatusBadge label="Pendiente" status="pending" />
              <StatusBadge label="Error" status="error" />
              <StatusBadge label="Neutral" />
            </div>
          </article>
        </section>

        <section className="border border-[#303030] bg-[#151515] p-6">
          <p className="text-xs text-gray-500">COMPONENTE 03</p>
          <h3 className="mb-5 mt-2 text-xl font-bold">AlertBanner</h3>
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

        <section className="grid gap-5 lg:grid-cols-2">
          <article className="border border-[#303030] bg-[#151515] p-6">
            <p className="text-xs text-gray-500">COMPONENTE 04</p>
            <h3 className="mb-5 mt-2 text-xl font-bold">FormInput</h3>
            <div className="space-y-4">
              <FormInput
                label="Correo electrónico"
                placeholder="usuario@ejemplo.com"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <FormInput
                label="Contraseña"
                placeholder="Escribe tu contraseña"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </article>

          <article className="border border-[#303030] bg-[#151515] p-6">
            <p className="text-xs text-gray-500">COMPONENTE 05</p>
            <h3 className="mb-5 mt-2 text-xl font-bold">SearchBar</h3>
            <SearchBar
              placeholder="Buscar componentes..."
              buttonLabel="Buscar"
              onSearch={(query) => setSearchResult(query)}
            />
            {searchResult && (
              <p className="mt-4 text-sm text-[#E7F05A]">
                Búsqueda realizada: {searchResult}
              </p>
            )}
          </article>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <article className="border border-[#303030] bg-[#151515] p-6">
            <p className="text-xs text-gray-500">COMPONENTE 06</p>
            <h3 className="mb-5 mt-2 text-xl font-bold">UserAvatar</h3>
            <div className="flex flex-wrap items-center gap-6">
             <UserAvatar name="Jerónimo Escobar" size="md" />
              <UserAvatar
              name="María Pérez"
              size="md"
              showName={false}
              />
            <UserAvatar
             name="Carlos Gómez"
             size="md"
             imageUrl="https://i.pravatar.cc/100?img=12"
              />
            </div>
          </article>

          <article className="border border-[#303030] bg-[#151515] p-6">
            <p className="text-xs text-gray-500">COMPONENTE 07</p>
            <h3 className="mb-5 mt-2 text-xl font-bold">InfoCard</h3>
            <InfoCard
              category="DISEÑO UX/UI"
              title="Proyecto de interfaz"
              description="Explora una tarjeta que permite presentar información y ejecutar una acción."
              actionLabel="Ver proyecto"
              onActionClick={() => alert("Abriendo proyecto...")}
            />
          </article>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <article className="border border-[#303030] bg-[#151515] p-6">
            <p className="text-xs text-gray-500">COMPONENTE 08</p>
            <h3 className="mb-5 mt-2 text-xl font-bold">ToggleSwitch</h3>
            <ToggleSwitch
              label="Modo oscuro"
              checked={darkMode}
              onChange={setDarkMode}
            />
            <p className="mt-3 text-sm text-gray-400">
              Estado actual: {darkMode ? "Activado" : "Desactivado"}
            </p>
          </article>

          <article className="border border-[#303030] bg-[#151515] p-6">
            <p className="text-xs text-gray-500">COMPONENTE 09</p>
            <h3 className="mb-5 mt-2 text-xl font-bold">ProgressBar</h3>
            <div className="space-y-6">
              <ProgressBar
                label="Entrega del proyecto"
                value={75}
                variant="primary"
              />
              <ProgressBar
                label="Componentes terminados"
                value={10}
                max={10}
                variant="success"
              />
              <ProgressBar
                label="Objetivo semanal"
                value={45}
                variant="warning"
              />
            </div>
          </article>
        </section>

        <section className="border border-[#303030] bg-[#151515] p-6">
          <p className="text-xs text-gray-500">COMPONENTE 10</p>
          <h3 className="mb-3 mt-2 text-xl font-bold">ModalDialog</h3>
          <p className="mb-5 text-sm text-gray-400">
            Abre una ventana emergente para confirmar una acción.
          </p>
          <ActionButton
            label="Abrir ventana"
            onClick={() => setModalOpen(true)}
          />

          <ModalDialog
            isOpen={modalOpen}
            title="Confirmar acción"
            description="¿Deseas confirmar esta operación de prueba?"
            onClose={() => setModalOpen(false)}
            confirmLabel="Confirmar"
            onConfirm={() => {
              setModalOpen(false);
              alert("¡Acción confirmada!");
            }}
          />
        </section>

        <footer className="flex flex-col justify-between gap-2 border-t border-[#303030] pt-5 text-xs text-gray-500 sm:flex-row">
          <span>Desarrollo de componentes reutilizables</span>
          <span>Universidad Icesi · 2026</span>
        </footer>
      </div>
    </main>
  );
}
