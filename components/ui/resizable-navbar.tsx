"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ children, className }) => {
  return (
    <nav
      className={cn(
        "relative w-full border-b border-border backdrop-blur-xl bg-background/90 sticky top-0 z-50",
        className
      )}
    >
      {children}
    </nav>
  );
};

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const NavBody: React.FC<NavBodyProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "max-w-6xl mx-auto px-6 py-4 hidden md:block",
        className
      )}
    >
      <div className="flex items-center justify-between">{children}</div>
    </div>
  );
};

interface NavItemsProps {
  items: Array<{ name: string; link: string }>;
  className?: string;
}

export const NavItems: React.FC<NavItemsProps> = ({ items, className }) => {
  return (
    <div className={cn("flex items-center gap-6", className)}>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

interface NavbarLogoProps {
  className?: string;
}

export const NavbarLogo: React.FC<NavbarLogoProps> = ({ className }) => {
  return (
    <div className={cn("text-2xl font-bold text-foreground", className)}>
      Xverta
    </div>
  );
};

interface NavbarButtonProps {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const NavbarButton: React.FC<NavbarButtonProps> = ({
  variant,
  children,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        className
      )}
    >
      {children}
    </button>
  );
};

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ children, className }) => {
  return (
    <div className={cn("md:hidden", className)}>
      {children}
    </div>
  );
};

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const MobileNavHeader: React.FC<MobileNavHeaderProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "max-w-6xl mx-auto px-6 py-4 flex items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

interface MobileNavToggleProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const MobileNavToggle: React.FC<MobileNavToggleProps> = ({
  isOpen,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-2 rounded-lg hover:bg-muted transition-colors",
        className
      )}
    >
      <div className="w-6 h-6 relative">
        <span
          className={cn(
            "absolute top-1 left-0 w-full h-0.5 bg-foreground transition-all duration-200",
            isOpen ? "rotate-45 top-3" : ""
          )}
        />
        <span
          className={cn(
            "absolute top-3 left-0 w-full h-0.5 bg-foreground transition-all duration-200",
            isOpen ? "opacity-0" : ""
          )}
        />
        <span
          className={cn(
            "absolute top-5 left-0 w-full h-0.5 bg-foreground transition-all duration-200",
            isOpen ? "-rotate-45 top-3" : ""
          )}
        />
      </div>
    </button>
  );
};

interface MobileNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const MobileNavMenu: React.FC<MobileNavMenuProps> = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={menuRef}
      className={cn(
        "absolute top-full left-0 w-full bg-background border-b border-border shadow-lg transition-all duration-200",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none",
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-6">
        {children}
      </div>
    </div>
  );
};
