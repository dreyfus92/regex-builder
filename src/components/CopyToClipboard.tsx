import type { FC } from "react";
import useCopyToClipboard from "../lib/useCopyToClipboard";
import { Button } from "./Button";

type CopyToClipboardProps = {
  text: string;
};

export const CopyToClipboard: FC<CopyToClipboardProps> = ({ text }) => {
  const [value, copy] = useCopyToClipboard();

  return (
    <>
      <h1>Click to copy:</h1>
      <Button
        type="button"
        onClick={() => {
          copy(text);
        }}
      >
        {text}
      </Button>
    </>
  );
};
