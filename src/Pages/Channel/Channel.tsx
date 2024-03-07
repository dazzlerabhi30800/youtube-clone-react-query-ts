import { useParams } from "react-router-dom";
import ChannelComp from "./ChannelComp";
import ChannelVideos from "./ChannelVideos";

export default function Channel() {
  const { id } = useParams();
  return (
    <section className="flex flex-col gap-14 w-full overflow-y-auto scroll-smooth">
      <ChannelComp id={id} />
      <ChannelVideos id={id} />
    </section>
  );
}
