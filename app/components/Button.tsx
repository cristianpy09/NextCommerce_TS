import { on } from 'events';
import React from 'react';

interface Props {
  text: string;
  variant?: VariantColor;
  size?: SizeOptions;
  onClick? :() => void
}

type SizeOptions = "sm" | "md" | "lg";
type VariantColor = "primary" | "secondary" | "danger" | "modern";

export default function Button({ text, variant = "primary", size = "md" ,onClick  }: Props) {
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    primary: "bg-blue-400 text-white hover:bg-blue-500",
    secondary: "bg-yellow-400 text-black hover:bg-yellow-500",
    danger: "bg-red-400 text-white hover:bg-red-500",
    modern:"bg-[#32435F] text-white hover:bg-gray-500 "
  };

  return (
    <button onClick={onClick}  className={`${sizeClasses[size]} ${variantClasses[variant]} rounded cursor-pointer `}>
      {text}
    </button>
  );
}
