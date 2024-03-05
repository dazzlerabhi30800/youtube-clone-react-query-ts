import { Link } from "react-router-dom";
import { useVideoContext } from "../../Context/Context";

export default function HomePage() {
  const { setCategory } = useVideoContext();
  return (
    <div className="flex flex-col gap-5 items-center">
      <h1>Home Page</h1>
      <Link to={`/video/2`}>to video page</Link>
      <button onClick={() => setCategory("New")}>
        Click to change category
      </button>
    </div>
  );
}
