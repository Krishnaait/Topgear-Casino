import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useBalance } from "@/contexts/BalanceContext";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { balance } = useBalance();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/games", label: "Games" },
    { href: "/how-to-play", label: "How to Play" },
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-background border-b border-border">
      <div className="container px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <img src="/images/topgear-logo.webp" alt="TOPGEAR Casino" className="h-10 sm:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 whitespace-nowrap">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Balance and Menu */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Balance Display */}
            <div className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-primary to-primary/80 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-primary/50 shadow-md">
              <span className="text-lg sm:text-xl">💰</span>
              <div className="flex flex-col">
                <span className="text-xs text-primary-foreground/80 hidden sm:inline font-semibold">Balance</span>
                <span className="text-sm sm:text-lg font-bold text-primary-foreground">{balance.toLocaleString()}</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-card rounded-lg transition-colors flex-shrink-0"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <div className="flex flex-col p-3 sm:p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-background rounded-lg transition-colors block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
