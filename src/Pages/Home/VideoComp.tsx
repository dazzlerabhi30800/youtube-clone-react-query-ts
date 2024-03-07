import { Link } from "react-router-dom";
import { formatTime, formatViews } from "../../Functions/FetchFunc";
export const VideoComp = ({
  data,
  show,
}: {
  data: videoData;
  show?: boolean | undefined;
}) => {
  if (!data) return;
  const {
    videoId,
    thumbnails,
    isLiveNow,
    lengthSeconds,
    title,
    author,
    stats,
  } = data;
  return (
    <div className="flex flex-col w-fit p-2 w-[90%] sm:w-[320px] relative">
      <Link to={`/video/${videoId}`} className="w-full flex-1">
        <img
          className="h-40 rounded-md object-cover w-full"
          src={thumbnails[1]?.url || thumbnails[0]?.url}
          loading="lazy"
          alt={title}
        />
        <h2 className="text-sm sm:text-base font-bold px-2 mt-2">{title}</h2>
      </Link>
      <div className="flex items-center gap-3 px-2 mt-2">
        {show && (
          <Link
            to={`/channel/${author?.channelId}`}
            className="cursor-pointer"
          >
            <img
              src={author.avatar[0]?.url}
              alt={author?.title}
              className="rounded-[50%] size-[50px] object-cover"
            />
          </Link>
        )}
        <div className="flex flex-col">
          <p className="text-sm md:text-small font-medium text-gray-300 px-2">
            {author?.title}
          </p>
          <div className="px-2 text-sm md:text-small  font-medium text-gray-300 flex items-center gap-3 mt-1">
            {stats?.views && <span>{formatViews(stats?.views)}</span>}
            {stats?.views && (
              <span className="size-5 bg-gray-500 rounded-[50%]"></span>
            )}
            {data.publishedTimeText && <span>{data.publishedTimeText}</span>}
            {isLiveNow && (
              <span className="bg-red-500 rounded-md py-[3px] px-2 text-sm text-white font-semibold">
                Live
              </span>
            )}
          </div>
        </div>
      </div>
      {lengthSeconds && (
        <span className="absolute bg-black/90 text-white py-1 px-2 text-xs rounded-br-md top-36 right-[8px]">
          {formatTime(lengthSeconds)}
        </span>
      )}
    </div>
  );
};
