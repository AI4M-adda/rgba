import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@rgba/ui/lib/utils";
import {
  accordionItemVariants,
  TAccordionItemVariants,
} from "@rgba/ui/variants/accordion";

function Accordion({
  className,
  bordered = false,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root> & {
  bordered?: boolean;
}) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      {...props}
      className={cn("w-full group", className, {
        "rounded-md border": bordered,
      })}
    />
  );
}

export type TAccordionItem = React.ComponentProps<
  typeof AccordionPrimitive.Item
> &
  TAccordionItemVariants & {
    shadow?: boolean;
  };
function AccordionItem({
  className,
  variant,
  color,
  shadow,
  ...props
}: TAccordionItem) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      data-variant={variant}
      className={cn(
        accordionItemVariants({ variant, color }),
        "group/item",
        className,
        {
          "shadow-sm data-[state=open]:shadow-lg": shadow,
        }
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header data-slot="accordion-header" className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring rounded-b-4xl focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className=" pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "pb-lg data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm text-muted-foreground",
        className,
        "group-data-[variant=soft-header]/item:p-lg"
      )}
      {...props}
    >
      <div className={cn("", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
