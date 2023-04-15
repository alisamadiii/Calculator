import React from "react";

type Props = {};

import { HiReceiptPercent } from "react-icons/hi2";

export default function Input({}: Props) {
  return (
    <div className="flex overflow-hidden rounded-lg">
      <input
        type="text"
        className={`w-24 font-light text-right bg-transparent rounded-l-lg border-r-0 opacity-70 outline-none border-2 border-gray-300 focus:border-dark-high-emphasis duration-200`}
      />
      <div className="flex items-center justify-center px-2 bg-dark-high-emphasis">
        <HiReceiptPercent />
      </div>
    </div>
  );
}
