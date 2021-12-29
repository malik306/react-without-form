import React from "react";
import { useSelector } from "react-redux";

function About() {
  //When Display the Value on UI
  const items = useSelector((state) => state.HandleForm).data;
  return (
    <div>
      <p>Output Form Data</p>
      {items !== undefined &&
        Object.entries(items).map((value, index) => {
          return (
            <div key={index} style={{ display: "flex", gap: "1em" }}>
              {value.map((val, i) => {
                return (
                  <span
                    key={i}
                    style={{ fontWeight: `${i === 0 ? "bold" : "normal"}` }}
                  >
                    {val}
                  </span>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}
export default About;
