import { useQuery } from "@tanstack/react-query";
import { fetchVideoById, formatViews } from "../../Functions/FetchFunc";
import Spinner from "../../Utils/Spinner";
import { FaMessage, FaHeart, FaEye } from "react-icons/fa6";
import { useVideoContext } from "../../Context/Context";
import {Link} from 'react-router-dom';

export default function VideoDetails({ id }: { id: string }) {
  const { setProgress } = useVideoContext();
  const { data: videoData, isLoading } = useQuery({
    queryKey: ["videoDetails", id],
    queryFn: () => {
      setProgress(100);
      return fetchVideoById(id);
    },
    refetchInterval: 1000 * 60 * 30,
    staleTime: Infinity,
  });
  if (isLoading) return <Spinner />;
  return (
    <div className="flex flex-col gap-3 text-gray-300 px-2 my-6">
      <h1 className="font-bold text-lg md:text-xl text-white">
        {videoData?.title}
      </h1>
      <p>{videoData?.description.substring(0, 300)} ...</p>
      <p className="font-semibold">
        Uploaded :- {" "} 
        <span className="font-medium text-white">
          {new Date(videoData?.publishedDate).toLocaleString()}
        </span>
      </p>
      <div className="flex items-center gap-8 py-2 text-lg md:text-xl">
        <span className="flex items-center gap-2">
          <FaMessage color="#7EF867" />
          {formatViews(videoData?.stats?.comments)}
        </span>
        <span className="flex items-center gap-2">
          <FaHeart color="#F867AB " />
          {formatViews(videoData?.stats?.likes)}
        </span>
        <span className="flex items-center gap-2">
          <FaEye color="#67F8E7 " />
          {formatViews(videoData?.stats?.views)}
        </span>
      </div>
      {/* Author */}
      <div className="flex items-center gap-5">
      <Link to={`/channel/${videoData?.author.channelId}`} >
        <img
          className="rounded-[50%] size-[55px] object-cover"
          src={videoData?.author?.avatar[0]?.url}
          alt={videoData?.author.title}
          />
          </Link>
        <div className="flex flex-col gap-1">
          <p className="text-white font-medium text-sm md:text-base">
            {videoData?.author.title}
          </p>
          <span className="text-xs md:text-sm">
            {videoData?.author?.stats?.subscribersText}
          </span>
        </div>
          {videoData?.isLiveNow && (
            <span className="bg-red-500 rounded-md py-[3px] px-2 text-sm text-white font-semibold">
              Live
            </span>
          )}
      </div>
    </div>
  );
}
