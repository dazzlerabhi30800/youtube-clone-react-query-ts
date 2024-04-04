import { useQuery } from "@tanstack/react-query";
import { channelVideo } from "../../Functions/FetchFunc";
import { VideoComp } from "../Home/VideoComp";
import Spinner from "../../Utils/Spinner";

export default function ChannelVideos({ id }: { id: string | undefined }) {
  const { data: videos, isLoading } = useQuery({
    queryKey: ["channelVideo", id],
    queryFn: () => id && channelVideo(id),
    refetchInterval: 1000 * 60 * 40,
    staleTime: Infinity,
  });
  if (isLoading) return <Spinner />;
  return (
    <div className="flex flex-wrap justify-center md:justify-start p-10 w-full sm:w-[95%] mx-auto mt-4 mb-20 items-center gap-4 bg-neutral-900 sm:rounded-md shadow-md">
      {videos?.contents.map((video: videoType, index: number) => (
        <VideoComp key={index} data={video.video} show={false} />
      ))}
    </div>
  );
}
