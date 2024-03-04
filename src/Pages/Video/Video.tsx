import { useParams } from "react-router-dom";

export default function VideoPage() {
  const { id } = useParams();
  console.log(id);
  return <main>VideoPage</main>;
}
