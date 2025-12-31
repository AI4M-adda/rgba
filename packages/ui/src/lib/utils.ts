import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function groupBy(array: any[], key: string) {
  if (array.length <= 0 || !key) return {};
  return array.reduce((result, currentValue) => {
    result[currentValue[key] || "N/A"] = [
      ...(result[currentValue[key]] || []),
      currentValue,
    ];
    return result;
  }, {});
}

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

export const fieldNameToLable = (fieldName: string) => {
  return (
    fieldName
      .replace(/([A-Z])/g, " $1")
      .trim()
      .charAt(0)
      .toUpperCase() +
    fieldName
      .replace(/([A-Z])/g, " $1")
      .trim()
      .slice(1)
  );
};
