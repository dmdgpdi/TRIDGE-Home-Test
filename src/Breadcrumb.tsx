import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import type { ComponentPropsWithRef } from "react";
import {
  breadcrumbEllipsisStyle,
  breadcrumbItemStyle,
  breadcrumbLinkStyle,
  breadcrumbListStyle,
  breadcrumbPageStyle,
  breadcrumbSeparatorStyle,
  iconSizeStyle,
  srOnlyStyle,
} from "./Breadcrumb.css";
import "./reset.css";

function Breadcrumb({ ...props }: ComponentPropsWithRef<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({ className, ...props }: ComponentPropsWithRef<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={`${breadcrumbListStyle} ${className}`}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: ComponentPropsWithRef<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={`${breadcrumbItemStyle} ${className}`}
      {...props}
    />
  );
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: ComponentPropsWithRef<"a"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={`${breadcrumbLinkStyle} ${className}`}
      {...props}
    />
  );
}

function BreadcrumbPage({
  className,
  ...props
}: ComponentPropsWithRef<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={`${breadcrumbPageStyle} ${className}`}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: ComponentPropsWithRef<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={`${breadcrumbSeparatorStyle} ${className}`}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

function BreadcrumbEllipsis({
  className,
  ...props
}: ComponentPropsWithRef<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={`${breadcrumbEllipsisStyle} ${className}`}
      {...props}
    >
      <MoreHorizontal className={iconSizeStyle} />
      <span className={srOnlyStyle}>More</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
