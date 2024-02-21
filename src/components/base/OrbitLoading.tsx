import "./OrbitLoading.scss";

interface OrbitProps {
  colors: Array<string>;
  /** px */
  size: string;
}
const OrbitLoading = ({ colors }: OrbitProps) => {
  return (
    <div className="go">
      <div className="loader orbit">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default OrbitLoading;
