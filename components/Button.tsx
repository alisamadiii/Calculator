import React from "react";

type Props = {
  numbers: string;
  mathSymbol: string;
  buttonStyle: "normal" | "medium-emphasis" | "high-emphasis";
  onClick: (a: any) => void;
};

const Buttons_Styles = {
  normal:
    "relative p-3 bg-light-low-emphasis rounded-3xl dark:bg-dark-low-emphasis overflow-hidden flex justify-center items-center active:scale-95",
  "medium-emphasis":
    "relative p-3 bg-light-medium-emphasis rounded-3xl dark:bg-dark-medium-emphasis overflow-hidden flex justify-center items-center active:scale-95",
  "high-emphasis":
    "relative p-3 text-white bg-light-high-emphasis rounded-3xl overflow-hidden flex justify-center items-center active:scale-95",
};

export default function Button({
  buttonStyle,
  numbers,
  mathSymbol,
  ...otherProps
}: Props) {
  return (
    <button
      value={mathSymbol}
      className={Buttons_Styles[buttonStyle]}
      id="button"
      {...otherProps}
    >
      {numbers}
    </button>
  );
}
