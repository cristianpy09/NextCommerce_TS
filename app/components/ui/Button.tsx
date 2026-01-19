import React from 'react';
import { cn } from '@/app/utils/cn';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: VariantColor;
  size?: SizeOptions;
}

type SizeOptions = "sm" | "md" | "lg";
type VariantColor = "primary" | "secondary" | "danger" | "modern" | "ghost";

export default function Button({ text, variant = "primary", size = "md", className, ...props }: Props) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200/50",
    secondary: "bg-yellow-400 text-black hover:bg-yellow-500 shadow-yellow-200/50",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-red-200/50",
    modern: "bg-slate-800 text-white hover:bg-slate-900 shadow-slate-400/50",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100 shadow-none border border-transparent hover:border-gray-200"
  };

  return (
    <button
      className={cn(
        "rounded-lg font-medium transition-all duration-200 shadow-lg active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {text}
    </button>
  );
}

