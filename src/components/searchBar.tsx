import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Pesquisar..."
        className="w-full px-4 py-2 text-gray-800 bg-violet-100 border--primary rounded-md "
      />
      <button><Search color="--primary" size={24}/></button>
    </div>
  );
};

export default SearchBar;