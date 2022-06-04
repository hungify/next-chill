import React from "react";

interface CustomIconComponentProps {
  width: string | number;
  height: string | number;
  fill: string;
  viewBox?: string;
  className?: string;
  style?: React.CSSProperties;
}

interface IconProps {
  component: React.ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>>;
  children?: React.ReactNode;
}

export default function Icon(props: IconProps) {
  const { component: IconComponent, children } = props;

  return <IconComponent>{children}</IconComponent>;
}
