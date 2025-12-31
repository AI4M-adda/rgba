import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import {
  bgColors,
  bgGhostColors,
  bgHoverColors,
  bgSoftColors,
  bgSoftHoverColors,
} from "./bg-colors";
import { textBgColor, textColor } from "./text-color";
import { outlineColors, outlineHoverColors } from "./border-color";

export const VAlert = {
  variant: {
    filled: "",
    outline: "border",
    soft: "shadow-xs ",
    ghost: "",
    "ghost-outline": "border border-transparent",
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

export const alertVariants = cva(
  "relative w-full transition-all flex justify-between rounded-lg px-4 py-3 text-sm gap-x-3 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: VAlert,
    defaultVariants: {
      variant: "outline",
      color: "primary",
    },
    compoundVariants: [
      ...(Object.keys(VAlert.color) as Array<keyof typeof VAlert.color>).map(
        (color) => ({
          variant: "filled" as const,
          color: color as keyof typeof VAlert.color,
          class: cn(
            `${(bgColors as Record<string, string>)[color]}`,
            `${(textColor as Record<string, string>)[color]}`,
            `${(bgHoverColors as Record<string, string>)[color]}`
          ),
        })
      ),

      // Outlined
      ...(Object.keys(VAlert.color) as Array<keyof typeof VAlert.color>).map(
        (color) => ({
          variant: "outline" as const,
          color: color as keyof typeof VAlert.color,
          class: cn(
            `${(outlineColors as Record<string, string>)[color]}`,
            `${(textBgColor as Record<string, string>)[color]}`,
            `${(bgGhostColors as Record<string, string>)[color]}`
          ),
        })
      ),

      // soft
      ...(Object.keys(VAlert.color) as Array<keyof typeof VAlert.color>).map(
        (color) => ({
          variant: "soft" as const,
          color: color as keyof typeof VAlert.color,
          class: cn(
            `${(bgSoftColors as Record<string, string>)[color]}`,
            `${(textBgColor as Record<string, string>)[color]}`,
            `${(bgSoftHoverColors as Record<string, string>)[color]}`
          ),
        })
      ),

      // ghost
      ...(Object.keys(VAlert.color) as Array<keyof typeof VAlert.color>).map(
        (color) => ({
          variant: "ghost" as const,
          color: color as keyof typeof VAlert.color,
          class: cn(
            `${(textBgColor as Record<string, string>)[color]}`,
            `${(bgGhostColors as Record<string, string>)[color]}`
          ),
        })
      ),

      // ghost-outline
      ...(Object.keys(VAlert.color) as Array<keyof typeof VAlert.color>).map(
        (color) => ({
          variant: "ghost-outline" as const,
          color: color as keyof typeof VAlert.color,
          class: cn(
            `${(textBgColor as Record<string, string>)[color]}`,
            `${(outlineHoverColors as Record<string, string>)[color]}`
          ),
        })
      ),
    ],
  }
);

export type TAlertVariants = VariantProps<typeof alertVariants>;
