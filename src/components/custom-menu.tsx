import React, { useState, useEffect } from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className={buttonVariants({ variant: "ghost", size: "lg" })}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <div
          className={`fixed right-0 z-10 px-2 mt-4 w-full h-screen rounded-lg shadow-lg${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          } data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-50 data-[state=open]:zoom-in-90 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`}
          data-state={isOpen ? "open" : "closed"} 
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="bg-slate-900 h-full rounded-lg">
            {/* Image Section */}
            <div className="w-full h-40 mb-6 overflow-hidden rounded-t-lg">
              <img
                src="/1.webp"
                alt="Dropdown Image"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="py-2 text-white uppercase" role="none">
              <Link
                href="#"
                className="block px-4 py-5 text-5xl leading-3 tracking-[-0.02em] hover:bg-gray-100"
                role="menuitem"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="block px-4 py-5 text-5xl leading-3 tracking-[-0.02em] hover:bg-gray-100"
                role="menuitem"
              >
                Sign-In
              </Link>
              <Link
                href="#"
                className="block px-4 py-5 text-5xl leading-3 tracking-[-0.02em] hover:bg-gray-100"
                role="menuitem"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;