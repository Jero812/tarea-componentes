
"use client";

import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  buttonLabel?: string;
  onSearch: (query: string) => void;
  initialValue?: string;
}

export default function SearchBar({
  placeholder = "Buscar...",
  buttonLabel = "Buscar",
  onSearch,
  initialValue = "",
}: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(query.trim());
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2">
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="min-w-0 flex-1 border border-[#383838] bg-[#151515] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 transition-colors focus:border-[#E7F05A]"
      />

      <button
        type="submit"
        className="bg-[#E7F05A] px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#D8E448]"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
