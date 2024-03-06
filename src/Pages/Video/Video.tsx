import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Spinner from "../../Utils/Spinner";
import RelatedVideo from "./RelatedVideo";
import VideoDetails from "./VideoDetails";

export default function VideoPage() {
  const { id } = useParams();
  return (
    <section className="video--section flex gap-10 items-center md:items-start md:justify-between p-5 md:p-6 w-full overflow-y-auto">
      {!id && <Spinner />}
      {id && (
        <div className="flex flex-col gap-4 w-full flex-1">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            playing={true}
            controls={true}
            className="reactPlayer"
            width="100%"
            height={270}
          />
          <VideoDetails id={id} />
        </div>
      )}
      {id && <RelatedVideo id={id} />}
    </section>
  );
}
