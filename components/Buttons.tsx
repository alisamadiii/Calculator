import React from "react";
import Button from "./Button";

type Props = {
  value: string;
  setValue: (a: string) => void;
  setResult: (a: boolean) => void;
};

export default function Buttons({ value, setValue, setResult }: Props) {
  return (
    <div className="grid grid-cols-4 gap-3 mt-auto text-3xl">
      <Button
        buttonStyle="medium-emphasis"
        numbers="C"
        mathSymbol="c"
        onClick={(e) => setValue("")}
      />
      <Button
        buttonStyle="medium-emphasis"
        numbers="del"
        mathSymbol="del"
        onClick={(e) => setValue(value.toString().slice(0, -1))}
      />
      <Button
        buttonStyle="medium-emphasis"
        numbers="%"
        mathSymbol="%"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <Button
        buttonStyle="high-emphasis"
        numbers="÷"
        mathSymbol="/"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <Button
        buttonStyle="normal"
        numbers="7"
        mathSymbol="7"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <Button
        buttonStyle="normal"
        numbers="8"
        mathSymbol="8"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <Button
        buttonStyle="normal"
        numbers="9"
        mathSymbol="9"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <Button
        buttonStyle="high-emphasis"
        numbers="x"
        mathSymbol="*"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <Button
        buttonStyle="normal"
        numbers="4"
        mathSymbol="4"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <Button
        buttonStyle="normal"
        numbers="5"
        mathSymbol="5"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <Button
        buttonStyle="normal"
        numbers="6"
        mathSymbol="6"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <Button
        buttonStyle="high-emphasis"
        numbers="-"
        mathSymbol="-"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <Button
        buttonStyle="normal"
        numbers="1"
        mathSymbol="1"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <Button
        buttonStyle="normal"
        numbers="2"
        mathSymbol="2"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <Button
        buttonStyle="normal"
        numbers="3"
        mathSymbol="3"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <Button
        buttonStyle="high-emphasis"
        numbers="+"
        mathSymbol="+"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <Button
        buttonStyle="normal"
        numbers="."
        mathSymbol="."
        onClick={(e) => setValue(value + e.target.value)}
      />
      <Button
        buttonStyle="normal"
        numbers="0"
        mathSymbol="0"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <Button
        buttonStyle="normal"
        numbers="c"
        mathSymbol="c"
        onClick={(e) => setValue(value + e.target.value)}
      />
      <Button
        buttonStyle="high-emphasis"
        numbers="="
        mathSymbol="="
        onClick={(e) => setValue(eval(value))}
      />
    </div>
  );
}
