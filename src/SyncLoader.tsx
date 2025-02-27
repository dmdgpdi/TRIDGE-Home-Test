import { CircleIcon } from "lucide-react";
import type { ComponentPropsWithRef } from "react";
import { bounceDistanceVar, dotStyle, loaderStyle } from "./SyncLoader.css";

interface SyncLoaderProps extends ComponentPropsWithRef<"div"> {
  size?: number;
  color?: React.CSSProperties["color"];
  dotClassName?: string;
  bounceDistance?: number;
}

export function SyncLoader({
  size = 12,
  color = "black",
  dotClassName = "",
  className,
  style,
  bounceDistance = 10,
  ...otherProps
}: SyncLoaderProps) {
  return (
    <div
      className={`${loaderStyle} ${className}`}
      style={
        {
          ...style,
          [bounceDistanceVar]: `${bounceDistance}px`,
        } as React.CSSProperties
      }
      {...otherProps}
    >
      <CircleIcon
        size={size}
        fill={color}
        className={`${dotStyle} ${dotClassName}`}
      />
      <CircleIcon
        size={size}
        fill={color}
        className={`${dotStyle} ${dotClassName}`}
      />
      <CircleIcon
        size={size}
        fill={color}
        className={`${dotStyle} ${dotClassName}`}
      />
    </div>
  );
}
