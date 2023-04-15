import Dark_Mode from "@/components/Dark_Mode";
import React, { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Layouts({ children }: Props) {
  return (
    <div>
      <div
        id="background-pattern"
        className="absolute top-0 left-0 w-full h-full duration-200 pointer-events-none -z-10"
      ></div>
      <div className="absolute -translate-x-1/2 rounded-b-full -top-56 left-1/2 bg-dark-high-emphasis w-96 h-60 -z-20 blur-3xl"></div>
      <Dark_Mode />
      <main>{children}</main>
    </div>
  );
}
