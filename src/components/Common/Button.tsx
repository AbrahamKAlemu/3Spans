// src/components/Common/Button.tsx

import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ href, children, className = "" }) => {
  return (
    <Link
      href={href}
      className={`px-8 py-3 text-base font-bold text-white duration-300 rounded-md bg-primary shadow-signUp hover:bg-white hover:text-primary md:px-9 lg:px-8 xl:px-9 ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
