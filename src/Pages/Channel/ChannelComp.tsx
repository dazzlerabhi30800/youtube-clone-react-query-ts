import { useQuery } from "@tanstack/react-query";
import { channelDetails } from "../../Functions/FetchFunc";
import Spinner from "../../Utils/Spinner";
import { useVideoContext } from "../../Context/Context";

export default function ChannelComp({ id }: { id: string | undefined }) {
  const { setProgress } = useVideoContext();
  const { data: channelData, isLoading } = useQuery({
    queryKey: ["channelInfo", id],
    queryFn: () => {
      setProgress(100);
      return id && channelDetails(id);
    },
    refetchInterval: 1000 * 60 * 40,
    staleTime: Infinity,
  });
  if (isLoading || !id) return <Spinner />;
  return (
    <div className="channel-comp flex shadow-md relative">
      <img
        src={channelData?.banner?.desktop[2]?.url}
        className="w-ful h-[180px] sm:h-[220px] md:h-[270px] lg:h-[310px] flex-1 object-cover"
        alt={channelData?.title}
      />
      <div className="channel--info flex items-center gap-5 bg-neutral-900/30 py-3 px-6 rounded-md shadow-md backdrop-blur-[5px] absolute -bottom-[35px] left-[50%] w-4/5 sm:w-[60%] md:w-fit -translate-x-[50%] border-2 border-gray-500 shadow-md">
        <img
          src={channelData?.avatar[0]?.url}
          alt={channelData?.title}
          className="size-[50px] rounded-[50%]"
        />
        <div className="flex flex-col gap-1 flex-1 whitespace-nowrap">
          <h1 className="font-semibold w-fit text-sm md:text-lg text-white">
            {channelData?.title}
          </h1>
          <p className="text-gray-300 text-sm md:text-base">
            {channelData?.stats?.subscribersText}
          </p>
        </div>
      </div>
    </div>
  );
}
