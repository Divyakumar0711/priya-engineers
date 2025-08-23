"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Cinzel } from "next/font/google";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const cinzelFont = Cinzel({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-cinzel",
});

// ✅ Updated navigation with links for all dropdown items
const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Services",
    hasDropdown: true,
    items: [
      { name: "Installation", href: "/services/installation" },
      { name: "Maintenance", href: "/services/maintenance" },
    ],
  },
  { name: "Contact Us", href: "/contact" },
];
type HeroProps = {
  src: string;
};
function Header({}: HeroProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownStates, setMobileDropdownStates] = useState<{
    [key: string]: boolean;
  }>({});

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            width={8}
            height={8}
            src="https://media.istockphoto.com/id/825651030/photo/conceptual-gear-design-paper-cutting-style.webp?a=1&b=1&s=612x612&w=0&k=20&c=KyjEFLdqtScC-TM8IaQUykPds4Q3nXSxmglSjFdQruo="
            alt="Priya Engineers Logo"
            className="sm:h-12 sm:w-12 h-8 w-8 rounded-full object-cover"
          />
          <div>
            <h1
              className={`text-2xl sm:text-5xl tracking-wide font-bold ${cinzelFont.className}`}
            >
              <span className="text-red-700">PRIYA</span>{" "}
              <span className="text-blue-900">ENGINEERS</span>
            </h1>
          </div>
        </Link>

        {/* Menu Icon for Mobile */}
        <div className="flex items-center gap-4 md:hidden mr-2">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-7 h-7 text-black" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-xl font-bold tracking-wide">
          {navigation.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.name}
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <DropdownMenu open={openDropdown === item.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className="flex items-center text-blue-900 hover:text-red-700 tracking-wide"
                      onClick={(e) => e.preventDefault()}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-blue-900 w-76 rounded-md shadow-lg mt-2">
                    {item.items?.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link
                          href={subItem.href}
                          className="w-full px-6 py-3 text-xl text-white"
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-blue-900 hover:text-red-700"
              >
                {item.name}
              </Link>
            )
          )}

          <Link
            href="/get-quote"
            className="bg-red-700 text-white px-5 py-2 rounded-md hover:bg-red-700 transition tracking-wide"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="fixed top-0 right-0 w-full h-full bg-blue-900 z-50 text-white shadow-lg transition-transform duration-300 md:hidden mr-5">
            {/* Mobile Header */}
            <div className="flex justify-between items-center p-4 border-b border-white ml-5">
              <div className="flex items-center gap-2">
                <Image
                  src="https://media.istockphoto.com/id/825651030/photo/conceptual-gear-design-paper-cutting-style.webp?a=1&b=1&s=612x612&w=0&k=20&c=KyjEFLdqtScC-TM8IaQUykPds4Q3nXSxmglSjFdQruo="
                  alt="Priya Engineers Logo"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <h1
                  className={`text-xl font-bold tracking-wide ${cinzelFont.className}`}
                >
                  <span className="text-red-700">PRIYA</span>{" "}
                  <span className="text-white">ENGINEERS</span>
                </h1>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-7 h-7 text-white m-3" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex flex-col gap-4 p-4 text-lg ml-5">
              {navigation.map((item) => {
                const hasSubmenu = item.hasDropdown && item.items?.length;
                const isOpen = mobileDropdownStates[item.name] || false;

                return (
                  <div key={item.name}>
                    <button
                      onClick={() => {
                        if (hasSubmenu) {
                          setMobileDropdownStates((prev) => ({
                            ...prev,
                            [item.name]: !prev[item.name],
                          }));
                        } else {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                      className="flex justify-between items-center w-full text-left hover:text-red-400 pr-2"
                    >
                      {hasSubmenu ? (
                        <span className="cursor-pointer">{item.name}</span>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="w-full text-left"
                        >
                          {item.name}
                        </Link>
                      )}
                      {hasSubmenu && (
                        <span className="ml-2 mr-4">
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-white" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-white" />
                          )}
                        </span>
                      )}
                    </button>

                    {hasSubmenu && isOpen && (
                      <div className="mt-2 w-full flex flex-col gap-2 pr-8">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="bg-white text-blue-900 text-base px-4 py-2 rounded-md shadow-sm w-full block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pr-5">
                <Link
                  href="/get-quote"
                  className="block text-center bg-red-700 text-white py-3 rounded-md mt-4 hover:bg-red-800 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
