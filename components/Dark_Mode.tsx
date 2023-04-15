import React, { useEffect } from "react";
import { useTheme } from "next-themes";

type Props = {};

export default function Dark_Mode({}: Props) {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    theme == "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <div>
      <label className="toggler-wrapper style-12">
        <input
          type="checkbox"
          defaultChecked={theme == "light" ? false : true}
          onClick={(e: any) =>
            e.target.checked ? setTheme("dark") : setTheme("light")
          }
        />
        <div className="toggler-slider">
          <div className="toggler-knob"></div>
        </div>
      </label>
    </div>
  );
}
