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
  const spanStyle = (color: string, idx: number) => {
    const animationDelay = `${-(idx * 0.5)}s`;
    return { backgroundColor: `${color}`, animationDelay };
  };

  return (
    <div className="go">
      <div className="loader orbit">
        {colors.map((color, idx) => (
          <div
            key={color}
            style={{
              animationDelay: `-(${idx * 0.75})s`,
            }}
          >
            <span
              style={{
                left: "calc(50% - 0.5em)",
                animation: "loading-orbit-before 2s infinite ease-in-out",
                ...spanStyle(color, idx),
              }}
              className="absolute block h-1 w-1 rounded-[50%] scale-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrbitLoading;
