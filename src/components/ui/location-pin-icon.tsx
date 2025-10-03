import { LucideProps } from "lucide-react";

export const LocationPinIcon = ({ className = "", size = 24, ...props }: LucideProps) => {
  const sizeValue = typeof size === 'number' ? size : 24;
  
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Pin body - circle */}
      <circle cx="12" cy="9" r="4" />
      {/* Pin outer ring */}
      <path d="M12 2a7 7 0 0 0-7 7c0 2.5 7 13 7 13s7-10.5 7-13a7 7 0 0 0-7-7z" />
      {/* Downward arrow */}
      <path d="M12 13v5" />
      <path d="M9 16l3 3 3-3" />
    </svg>
  );
};
