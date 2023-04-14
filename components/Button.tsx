import React from "react";

type Props = {
  numbers: string;
  mathSymbol: string;
  buttonStyle: "normal" | "medium-emphasis" | "high-emphasis";
  onClick: (a: any) => void;
};

const Buttons_Styles = {
  normal: "p-3 bg-light-low-emphasis rounded-3xl dark:bg-dark-low-emphasis",
  "medium-emphasis":
    "p-3 bg-light-medium-emphasis rounded-3xl dark:bg-dark-medium-emphasis",
  "high-emphasis": "p-3 text-white bg-light-high-emphasis rounded-3xl",
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
      {...otherProps}
    >
      {numbers}
    </button>
  );
}
