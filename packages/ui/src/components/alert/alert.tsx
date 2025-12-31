import * as React from "react";
import { cn } from "@rgba/ui/lib/utils";
import { alertVariants, TAlertVariants } from "@rgba/ui/variants/alert";

export type TAlert = React.ComponentProps<"div"> &
  TAlertVariants & {
    roundedFull?: boolean;
    shadow?: boolean;
  };

function Alert({
  className,
  variant,
  color,
  roundedFull = false,
  shadow = false,
  ...props
}: TAlert) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant, color }), className, {
        "rounded-full px-xl": roundedFull,
        "shadow-sm hover:shadow-md": shadow,
      })}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
