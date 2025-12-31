import { cva, VariantProps } from "class-variance-authority";
import {
  bgColors,
  bgGhostColors,
  bgGradientColors,
  bgHoverColors,
  bgHoverRevertColors,
  bgSoftColors,
  bgSoftHoverColors,
} from "./bg-colors";
import { textBgColor, textBgHoverColor, textColor } from "./text-color";
import { outlineColors, outlineHoverColors } from "./border-color";
import { ringHoverColors } from "./ring";
import { cn } from "../lib/utils";

export const VButton = {
  variant: {
    filled: "",
    outline: "border",
    soft: "shadow-xs",
    ghost: "",
    "ghost-outline": "border border-transparent",
    "hover-revert": "",
    "ring-hover":
      "ring-offset-background hover:ring-offset-2 hover:ring-2 shadow-sm hover:shadow-lg",
    "hover-shine":
      "before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]",
    gradiant:
      "bg-transparent bg-gradient-to-r [background-size:200%_auto] hover:bg-transparent hover:bg-[99%_center]",
    link: "underline-offset-4 hover:underline",
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

  size: {
    sm: "px-3 py-1.5 has-[>svg]:px-2.5",
    md: "px-4.5 py-2 has-[>svg]:px-3",
    lg: "px-4.5 py-2 has-[>svg]:px-4 text-lg",
    icon: "size-9",
    "icon-sm": "size-8",
    "icon-lg": "size-10",
  },
};

export const buttonVariants = cva(
  `inline-flex  cursor-pointer rounded-lg items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all
   disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 
   [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] 
   aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`,
  {
    variants: VButton,
    defaultVariants: {
      variant: "filled",
      size: "md",
      color: "primary",
    },
    compoundVariants: [
      // filled

      ...(Object.keys(VButton.color) as Array<keyof typeof VButton.color>).map(
        (color) => ({
          variant: "filled" as const,
          color: color as keyof typeof VButton.color,
          class: cn(
            `${(bgColors as Record<string, string>)[color]}`,
            `${(textColor as Record<string, string>)[color]}`,
            `${(bgHoverColors as Record<string, string>)[color]}`
          ),
        })
      ),

      ...(Object.keys(VButton.color) as Array<keyof typeof VButton.color>).map(
        (color) => ({
          variant: "hover-revert" as const,
          color: color as keyof typeof VButton.color,
          class: cn(
            `${(bgColors as Record<string, string>)[color]}`,
            `${(textColor as Record<string, string>)[color]}`,
            `${(bgHoverRevertColors as Record<string, string>)[color]}`,
            `${(textBgHoverColor as Record<string, string>)[color]}`
          ),
        })
      ),

      // Outlined
      ...(Object.keys(VButton.color) as Array<keyof typeof VButton.color>).map(
        (color) => ({
          variant: "outline" as const,
          color: color as keyof typeof VButton.color,
          class: cn(
            `${(outlineColors as Record<string, string>)[color]}`,
            `${(textBgColor as Record<string, string>)[color]}`,
            `${(bgGhostColors as Record<string, string>)[color]}`
          ),
        })
      ),

      // soft
      ...(Object.keys(VButton.color) as Array<keyof typeof VButton.color>).map(
        (color) => ({
          variant: "soft" as const,
          color: color as keyof typeof VButton.color,
          class: cn(
            `${(bgSoftColors as Record<string, string>)[color]}`,
            `${(textBgColor as Record<string, string>)[color]}`,
            `${(bgSoftHoverColors as Record<string, string>)[color]}`
          ),
        })
      ),

      // ghost
      ...(Object.keys(VButton.color) as Array<keyof typeof VButton.color>).map(
        (color) => ({
          variant: "ghost" as const,
          color: color as keyof typeof VButton.color,
          class: cn(
            `${(textBgColor as Record<string, string>)[color]}`,
            `${(bgGhostColors as Record<string, string>)[color]}`
          ),
        })
      ),

      // ghost-outline
      ...(Object.keys(VButton.color) as Array<keyof typeof VButton.color>).map(
        (color) => ({
          variant: "ghost-outline" as const,
          color: color as keyof typeof VButton.color,
          class: cn(
            `${(textBgColor as Record<string, string>)[color]}`,
            `${(outlineHoverColors as Record<string, string>)[color]}`
          ),
        })
      ),

      // gradiant
      ...(Object.keys(VButton.color) as Array<keyof typeof VButton.color>).map(
        (color) => ({
          variant: "gradiant" as const,
          color: color as keyof typeof VButton.color,
          class: cn(
            `${(bgGradientColors as Record<string, string>)[color]}`,
            `${(textColor as Record<string, string>)[color]}`
          ),
        })
      ),

      // link
      ...(Object.keys(VButton.color) as Array<keyof typeof VButton.color>).map(
        (color) => ({
          variant: "ring-hover" as const,
          color: color as keyof typeof VButton.color,
          class: cn(
            `${(ringHoverColors as Record<string, string>)[color]}`,
            `${(bgColors as Record<string, string>)[color]}`,
            `${(textColor as Record<string, string>)[color]}`,
            `${(bgHoverColors as Record<string, string>)[color]}`
          ),
        })
      ),

      // hover-shine
      ...(Object.keys(VButton.color) as Array<keyof typeof VButton.color>).map(
        (color) => ({
          variant: "hover-shine" as const,
          color: color as keyof typeof VButton.color,
          class: cn(
            `${(bgColors as Record<string, string>)[color]}`,
            `${(textColor as Record<string, string>)[color]}`,
            `${(bgHoverColors as Record<string, string>)[color]}`
          ),
        })
      ),

      // link
      ...(Object.keys(VButton.color) as Array<keyof typeof VButton.color>).map(
        (color) => ({
          variant: "link" as const,
          color: color as keyof typeof VButton.color,
          class: cn(`${(textBgColor as Record<string, string>)[color]}`),
        })
      ),
    ],
  }
);

export type TButtonVariants = VariantProps<typeof buttonVariants>;
