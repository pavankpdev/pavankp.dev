import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

interface NavbarProps {
  currentPath: string;
}

export default function Navbar({ currentPath }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="/"
            className="flex-shrink-0 cursor-pointer flex items-center gap-2 no-underline"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-magenta-500 rounded flex items-center justify-center">
              <span className="font-orbitron font-bold text-white">P</span>
            </div>
            <span className="font-orbitron font-bold text-xl tracking-widest text-white">
              PAVAN<span className="text-cyan-400">KP</span>
            </span>
          </a>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors font-mono no-underline ${
                    isActive(item.href)
                      ? "text-cyan-400 border-b-2 border-cyan-400"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="primary"
                className="ml-4 !py-2 !px-4 text-xs"
                onClick={() =>
                  window.open("mailto:pavankpdev@gmail.com", "_blank")
                }
              >
                Contact Me
              </Button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-neutral-900 inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium no-underline ${
                  isActive(item.href)
                    ? "text-cyan-400 bg-neutral-900"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
