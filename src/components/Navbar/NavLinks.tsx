// NavLinks.tsx
import React from "react";

export interface INavLinksProps {
  label: string;
  href: string;
  className?: string;
}

const NavLinks: React.FC<INavLinksProps> = ({ label, href, className }) => {
  return (
    <a href={href} className={`nav-link ${className || ""}`}>
      {label}
    </a>
  );
};

export default NavLinks;
