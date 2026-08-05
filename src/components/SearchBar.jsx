import { useState, useEffect } from "react";
import { Search } from "lucide-react";

export function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <section className="grid-col-1 search grid">
      <Search size={20} className="search-icon text-gray-500" />

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-lg border py-2 pr-4 
        pl-10 outline-none focus:ring-2 focus:ring-black"
      />
    </section>
  );
}
