import React, { useEffect, useState } from "react";
import { Work_Sans } from "next/font/google";
import Buttons from "@/components/Buttons";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function Home() {
  // useEffect(() => {
  //   document.documentElement.classList.add("dark");
  // }, []);

  const [value, setValue] = useState("");
  const [result, setResult] = useState(false);

  return (
    <main
      className={`${workSans.className} flex justify-center items-center h-screen`}
    >
      <div className="w-full max-w-[300px] h-[500px] flex flex-col">
        <div className="flex items-end justify-end h-full">
          <input
            type="text"
            value={value.length == 0 ? "0" : value}
            className="w-full p-3 text-5xl font-light text-right bg-transparent opacity-70"
          />
          {/* {result && <p>{eval(value)}</p>} */}
        </div>
        <Buttons value={value} setValue={setValue} setResult={setResult} />
      </div>
    </main>
  );
}
