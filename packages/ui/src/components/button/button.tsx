import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@rgba/ui/lib/utils";
import { buttonVariants, TButtonVariants } from "@rgba/ui/variants/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";
import { Badge } from "../badge";

export type TButton = React.ComponentProps<"button"> &
  TButtonVariants & {
    asChild?: boolean;
    roundedFull?: boolean;
  };
export function Button({
  className,
  variant,
  size,
  color,
  asChild = false,
  roundedFull = false,
  ...props
}: TButton) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, color, size, className }), {
        "rounded-full": roundedFull,
      })}
      {...props}
    />
  );
}

export type TButtonTooltip = TButton & {
  tooltipContent: React.ReactNode;
};
export function ButtonTooltip({
  children,
  tooltipContent = "Tooltip Content",
  ...props
}: TButtonTooltip) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button {...props}>{children}</Button>
      </TooltipTrigger>
      <TooltipContent className="px-2 py-1 text-xs">
        {tooltipContent}
      </TooltipContent>
    </Tooltip>
  );
}
export type TButtonBadge = TButton & {
  badgeCount?: number;
  badgeProps?: React.ComponentProps<typeof Badge>;
};
export const ButtonBadge = ({
  children,
  badgeCount = 0,
  badgeProps,
  ...props
}: TButtonBadge) => {
  return (
    <Button {...props} className="relative">
      {children}
      <Badge
        className="absolute -top-2.5 -right-2.5 h-5 min-w-5 rounded-full px-1 tabular-nums"
        variant="destructive"
        {...badgeProps}
      >
        {badgeCount}
      </Badge>
    </Button>
  );
};
