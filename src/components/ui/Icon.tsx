
import * as React from "react";
import * as LucideIcons from "lucide-react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  fallback?: string;
  size?: number;
  color?: string;
}

const Icon = ({ name, fallback = "CircleAlert", size = 24, color, ...props }: IconProps) => {
  const IconComponent = LucideIcons[name as keyof typeof LucideIcons] || 
                       LucideIcons[fallback as keyof typeof LucideIcons];
  
  return <IconComponent size={size} color={color} {...props} />;
};

export default Icon;
