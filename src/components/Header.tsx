import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between px-8 py-4">
      <div className="flex-1">
        <a href="#" className="text-2xl font-bold">TESLA</a>
      </div>

      <nav className="hidden flex-1 md:block">
        <ul className="flex justify-center space-x-4">
          <li><a href="#" className="px-3 py-2 text-sm font-medium hover:rounded hover:bg-black/5">Model S</a></li>
          <li><a href="#" className="px-3 py-2 text-sm font-medium hover:rounded hover:bg-black/5">Model 3</a></li>
          <li><a href="#" className="px-3 py-2 text-sm font-medium hover:rounded hover:bg-black/5">Model X</a></li>
          <li><a href="#" className="px-3 py-2 text-sm font-medium hover:rounded hover:bg-black/5">Model Y</a></li>
          <li><a href="#" className="px-3 py-2 text-sm font-medium hover:rounded hover:bg-black/5">Solar Roof</a></li>
          <li><a href="#" className="px-3 py-2 text-sm font-medium hover:rounded hover:bg-black/5">Solar Panels</a></li>
        </ul>
      </nav>

      <div className="flex flex-1 justify-end">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="rounded px-3 py-2 text-sm font-medium hover:bg-black/5"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="rounded p-2 hover:bg-black/5"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="px-8">
            <ul className="space-y-4">
              <li><a href="#" className="block py-2 text-sm font-medium">Model S</a></li>
              <li><a href="#" className="block py-2 text-sm font-medium">Model 3</a></li>
              <li><a href="#" className="block py-2 text-sm font-medium">Model X</a></li>
              <li><a href="#" className="block py-2 text-sm font-medium">Model Y</a></li>
              <li><a href="#" className="block py-2 text-sm font-medium">Solar Roof</a></li>
              <li><a href="#" className="block py-2 text-sm font-medium">Solar Panels</a></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;