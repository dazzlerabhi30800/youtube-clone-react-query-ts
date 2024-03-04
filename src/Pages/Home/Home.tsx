import { Link } from "react-router-dom";
import { useVideoContext, videocontext } from "../../Context/Context";

export default function HomePage() {
  const { category, setCategory } = useVideoContext() as videocontext;
  console.log(category);
  return (
    <main>
      <h1>Home Page</h1>
      <Link to={`/video/2`}>to video page</Link>
      <button onClick={() => setCategory("New")}>
        Click to change category
      </button>
    </main>
  );
}
