import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/counter">Counter</Link>
      <br />
      <Link to="/toggle-switch">ToggleSwitch</Link>
    </div>
  );
}
