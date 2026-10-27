
"use client";

import { useState } from "react";
import type { FormEvent } from "react";

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(query.trim());
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-center gap-2"
    >
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="input input-bordered min-w-0 flex-1"
      />

      <button type="submit" className="btn btn-primary">
        {buttonLabel}
      </button>
    </form>
  );
}

