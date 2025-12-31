import { cva, VariantProps } from "class-variance-authority";
import { textBgColor } from "./text-color";
import { outlineColors } from "./border-color";
import { cn } from "../lib/utils";
import { bgGhostColors, bgSoftColors } from "./bg-colors";

export const VAccordionItem = {
  variant: {
    default: "",
    outline: "rounded-lg border! px-lg mb-md",
    open: "",
    soft: "px-lg mb-md rounded-lg border-none",
    "soft-header":
      "mb-md rounded-lg [&_button]:px-lg [&_button]:rounded-b-none border! overflow-hidden",
    ghost: "px-lg mb-md rounded-lg",
    "open-soft": "px-lg mb-md rounded-lg",
    "open-outline": "px-lg mb-md rounded-lg",
  },
  color: {
    primary: "",
    secondary: "",
    success: "",
    warning: "",
    destructive: "",
    info: "",
    muted: "",
  },
};

export const accordionItemVariants = cva(
  "border-b last:border-b-0 transition-all",
  {
    variants: VAccordionItem,
    defaultVariants: {
      variant: "default",
      color: "primary",
    },
    compoundVariants: [
      // outline
      ...(
        Object.keys(VAccordionItem.color) as Array<
          keyof typeof VAccordionItem.color
        >
      ).map((color) => ({
        variant: "outline" as const,
        color: color as keyof typeof VAccordionItem.color,
        class: cn(
          `${(outlineColors as Record<string, string>)[color]}`,
          `${(textBgColor as Record<string, string>)[color]} `
        ),
      })),

      // soft
      ...(
        Object.keys(VAccordionItem.color) as Array<
          keyof typeof VAccordionItem.color
        >
      ).map((color) => ({
        variant: "soft" as const,
        color: color as keyof typeof VAccordionItem.color,
        class: cn(
          `${(bgSoftColors as Record<string, string>)[color]}`,
          `${(textBgColor as Record<string, string>)[color]} `
        ),
      })),

      // ghost
      ...(
        Object.keys(VAccordionItem.color) as Array<
          keyof typeof VAccordionItem.color
        >
      ).map((color) => ({
        variant: "ghost" as const,
        color: color as keyof typeof VAccordionItem.color,
        class: cn(
          `${(bgGhostColors as Record<string, string>)[color]}`,
          `${(textBgColor as Record<string, string>)[color]}`,
          "data-[state=open]:border-none",
          {
            "data-[state=open]:bg-primary/10": color == "primary",
            "data-[state=open]:bg-secondary/10": color == "secondary",
            "data-[state=open]:bg-success/10": color == "success",
            "data-[state=open]:bg-warning/10": color == "warning",
            "data-[state=open]:bg-info/10": color == "info",
            "data-[state=open]:bg-destructive/10": color == "destructive",
            "data-[state=open]:bg-muted/10": color == "muted",
          }
        ),
      })),

      // open-soft
      ...(
        Object.keys(VAccordionItem.color) as Array<
          keyof typeof VAccordionItem.color
        >
      ).map((color) => ({
        variant: "open-soft" as const,
        color: color as keyof typeof VAccordionItem.color,
        class: cn("data-[state=open]:border-none", {
          "data-[state=open]:bg-primary/10": color == "primary",
          "data-[state=open]:bg-secondary/10": color == "secondary",
          "data-[state=open]:bg-success/10": color == "success",
          "data-[state=open]:bg-warning/10": color == "warning",
          "data-[state=open]:bg-info/10": color == "info",
          "data-[state=open]:bg-destructive/10": color == "destructive",
          "data-[state=open]:bg-muted/10": color == "muted",
        }),
      })),

      // soft-header
      ...(
        Object.keys(VAccordionItem.color) as Array<
          keyof typeof VAccordionItem.color
        >
      ).map((color) => ({
        variant: "soft-header" as const,
        color: color as keyof typeof VAccordionItem.color,
        class: cn("", {
          "[&_button]:bg-primary/10 [&_button]:text-primary border-primary":
            color == "primary",
          "[&_button]:bg-secondary/10 [&_button]:text-secondary border-secondary":
            color == "secondary",
          "[&_button]:bg-success/10 [&_button]:text-success border-success":
            color == "success",
          "[&_button]:bg-warning/10 [&_button]:text-warning border-warning":
            color == "warning",
          "[&_button]:bg-info/10 [&_button]:text-info border-info":
            color == "info",
          "[&_button]:bg-destructive/10 [&_button]:text-destructive border-destructive":
            color == "destructive",
          "[&_button]:bg-muted/10 [&_button]:text-muted border-muted":
            color == "muted",
        }),
      })),

      // open-outline
      ...(
        Object.keys(VAccordionItem.color) as Array<
          keyof typeof VAccordionItem.color
        >
      ).map((color) => ({
        variant: "open-outline" as const,
        color: color as keyof typeof VAccordionItem.color,
        class: cn("data-[state=open]:border", {
          "data-[state=open]:border-primary data-[state=open]:text-primary":
            color == "primary",
          "data-[state=open]:border-secondary": color == "secondary",
          "data-[state=open]:border-success data-[state=open]:text-success":
            color == "success",
          "data-[state=open]:border-warning data-[state=open]:text-warning":
            color == "warning",
          "data-[state=open]:border-info data-[state=open]:text-info":
            color == "info",
          "data-[state=open]:border-destructive data-[state=open]:text-destructive":
            color == "destructive",
          "data-[state=open]:border-muted data-[state=open]:text-muted":
            color == "muted",
        }),
      })),

      // open
      ...(
        Object.keys(VAccordionItem.color) as Array<
          keyof typeof VAccordionItem.color
        >
      ).map((color) => ({
        variant: "open" as const,
        color: color as keyof typeof VAccordionItem.color,
        class: cn({
          "data-[state=open]:border-primary not-last:data-[state=open]:border-b-2 [&[data-state=open]>svg]:text-primary data-[state=open]:text-primary":
            color == "primary",
          "data-[state=open]:border-secondary not-last:data-[state=open]:border-b-2 [&[data-state=open]>svg]:text-secondary data-[state=open]:text-secondary":
            color == "secondary",
          "data-[state=open]:border-success not-last:data-[state=open]:border-b-2 [&[data-state=open]>svg]:text-success data-[state=open]:text-success":
            color == "success",
          "data-[state=open]:border-warning not-last:data-[state=open]:border-b-2 [&[data-state=open]>svg]:text-warning data-[state=open]:text-warning":
            color == "warning",
          "data-[state=open]:border-info not-last:data-[state=open]:border-b-2 [&[data-state=open]>svg]:text-info data-[state=open]:text-info":
            color == "info",
          "data-[state=open]:border-destructive not-last:data-[state=open]:border-b-2 [&[data-state=open]>svg]:text-destructive data-[state=open]:text-destructive":
            color == "destructive",
          "data-[state=open]:border-muted not-last:data-[state=open]:border-b-2 [&[data-state=open]>svg]:text-muted data-[state=open]:text-muted":
            color == "muted",
        }),
      })),
    ],
  }
);

export type TAccordionItemVariants = VariantProps<typeof accordionItemVariants>;
