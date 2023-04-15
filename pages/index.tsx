import React, { useEffect, useState } from "react";
import { Work_Sans } from "next/font/google";
import { motion } from "framer-motion";

import Buttons from "@/components/Buttons";
import Dark_Mode from "@/components/Dark_Mode";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function Home() {
  // useEffect(() => {
  //   document.documentElement.classList.add("dark");
  // }, []);

  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState(false);

  return (
    <main
      className={`${workSans.className} flex flex-col justify-center items-center h-screen`}
    >
      <Dark_Mode />

      <div
        id="background-pattern"
        className="absolute w-full h-full duration-200 pointer-events-none -z-10"
      ></div>
      <div className="absolute -translate-x-1/2 rounded-b-full -top-56 left-1/2 bg-dark-high-emphasis w-96 h-60 -z-20 blur-3xl"></div>

      <div className="w-full max-w-[300px] h-[500px] flex flex-col">
        <div className="flex flex-col items-end justify-end h-full">
          <motion.input
            layout
            transition={{ duration: 0.2, type: "tween" }}
            type="text"
            readOnly={true}
            value={value.length == 0 ? "0" : value}
            className={`w-full font-light text-right bg-transparent opacity-70 ${
              result ? "text-2xl" : "text-5xl pb-3"
            }`}
            style={{ transition: "font-size .3s, padding .3s" }}
          />
          {result && (
            <motion.input
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              type="text"
              readOnly={true}
              value={value2}
              className={`w-full pb-3 font-light text-right bg-transparent opacity-70 ${
                value2.toString().length > 10 ? "text-3xl" : "text-5xl"
              }`}
            />
          )}
        </div>
        <Buttons
          value={value}
          setValue={setValue}
          setResult={setResult}
          setValue2={setValue2}
        />
      </div>
    </main>
  );
}
