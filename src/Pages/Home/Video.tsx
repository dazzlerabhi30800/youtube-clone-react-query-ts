import { Link } from "react-router-dom";
import { formatTime } from "../../Functions/FetchFunc";
export const VideoComp = ({ data }: { data: any }) => {
  const { videoId, thumbnails, lengthSeconds, title, author, stats } = data;
  return (
    <Link to={`/video/${videoId}`}>
      <div className="flex flex-col w-fit p-2 w-[95%] max-w-[300px]">
        <img
          className="h-40 rounded-md object-cover"
          src={thumbnails[0]?.url}
          alt={title}
        />
        <h2 className="text-sm sm:text-base font-bold px-2 mt-1">{title}</h2>
        <p className="text-sm md:text-small font-medium text-gray-300 px-2 mt-2">
          {author?.title}
        </p>
        <div className="px-2 text-sm md:text-small  font-medium text-gray-300 flex items-center gap-3 mt-1">
          <span>{stats?.views}</span>
          <span className="size-5 bg-gray-500 rounded-[50%]"></span>
          <span>{formatTime(lengthSeconds)}</span>
        </div>
      </div>
    </Link>
  );
};