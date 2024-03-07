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
  /** rem */
  size?: number;
  colors?: Array<string>;
}
const OrbitLoading = ({ colors = defaultColors, size = 7 }: OrbitProps) => {
  return (
    <div
      className="loader"
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
      }}
    >
      {colors.map((color, idx) => (
        <div
          className="loader-orbit skew-y-12"
          style={{
            borderColor: `${color}`,
            animationDelay: `-${1000 * idx}ms`,
          }}
        >
          <span
            className="loader-orbit_circle block rounded-[50%]"
            style={{
              backgroundColor: `${color}`,
              animationDelay: `-${500 * idx}ms`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default OrbitLoading;
