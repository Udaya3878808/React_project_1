import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Randomcolor = () => {
  const [typeOfColor, setTypeOfColor] = useState();
  const [color, setcolor] = useState();

  

  function randomcolor(length) {
    return Math.floor(Math.random() * length);
  }


  function handleHexcolor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "c", "d", "e", "f"];
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor += hex[randomcolor(hex.length)];
    }
    setcolor(hexcolor);
  }

  function handleRgbcolor() {
    const r = randomcolor(256);
    const g = randomcolor(256);
    const b = randomcolor(256);
    setcolor(`rgb (${r},${g},${b})`);
  }
  useEffect(() => {
    if (typeOfColor === "rgb") handleRgbcolor();
    else handleHexcolor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        background: color,
        width: "100vw",
        height: "100vh",
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>hex color</button>
      <button onClick={() => setTypeOfColor("rgb")}>rgb color</button>
      <button onClick={typeOfColor === "hex" ? handleHexcolor : handleRgbcolor}>
        Generated
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "20px",
          marginTop: "50px",
          flexDirection: "column",
        }}
      >
        <h2>{typeOfColor === "rgb" ? "rgb color" : " hex color"}</h2>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default Randomcolor;
