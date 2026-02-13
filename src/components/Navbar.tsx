import { Search, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import logoImg from "@/assets/eikyo-logo.jpg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "HOME", href: "#" },
    { label: "ABOUT US", href: "#" },
    { label: "PRODUCTS", href: "#", dropdown: true },
    { label: "CATALOGUE", href: "#" },
    { label: "CONTACT US", href: "#" },
    { label: "OUR UNIQUE WORK", href: "#", dropdown: true },
  ];

  return (
    <nav className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logoImg} alt="Eikyo International" className="h-10 md:h-12 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-heading text-sm font-semibold tracking-wider text-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                {link.label}
                {link.dropdown && <ChevronDown size={14} />}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-foreground hover:text-primary transition-colors">
            <Search size={18} />
          </button>
          <span className="font-heading text-sm font-semibold tracking-wider text-foreground cursor-pointer hover:text-primary transition-colors">
            EN
          </span>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-heading text-sm font-semibold tracking-wider text-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={14} />}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 mt-4 pt-3 border-t border-border">
            <Search size={18} className="text-foreground" />
            <span className="font-heading text-sm font-semibold tracking-wider text-foreground">EN</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
