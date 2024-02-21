import { useState } from "react";
import "./OrbitLoading.scss";

const defaultColors = [
  "#FF0018",
  "#FFA52C",
  "#FFFF41",
  "#008018",
  "#0000F9",
  "#86007D",
];

interface OrbitProps {
  colors?: Array<string>;
  /** px */
  size?: string;
}
const OrbitLoading = ({ colors = defaultColors }: OrbitProps) => {
  const beforeStyle = (color: string) => {
    return { backgroundColor: `${color}` };
  };

  return (
    <div className="go">
      <div className="loader orbit">
        {colors.map((color) => (
          <div
            key={color}
            style={beforeStyle(color)}
            className={`before:(bg-[${color}])`}
          />
        ))}
      </div>
    </div>
  );
};

export default OrbitLoading;
