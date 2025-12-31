import { Check, Copy } from "lucide-react";
import { copyToClipboard } from "@rgba/ui/lib/utils";
import { Button, TButton } from "./button";
import { useState } from "react";

export function CopyButton({
  copyText,
  ...props
}: TButton & { copyText: string | (() => string) }) {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <Button
      {...props}
      variant="outline"
      onClick={() => {
        if (isCopied) return;
        copyToClipboard(typeof copyText === "function" ? copyText() : copyText);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      }}
    >
      {isCopied ? (
        <Check className="h-4 w-4 mr-2" />
      ) : (
        <Copy className="h-4 w-4 mr-2" />
      )}
      {isCopied ? "Copied!" : "Copy"}
    </Button>
  );
}
