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
      <div>
        <Button onClick={() => copy(text)}>{text}</Button>
      </div>
      <p>Copied value: {value ?? "Nothing is copied yet!"}</p>
    </>
  );
};
