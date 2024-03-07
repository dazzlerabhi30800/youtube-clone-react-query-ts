import { useQuery } from "@tanstack/react-query";
import Resize from "../../Utils/Resize";
import { channelDetails } from "../../Functions/FetchFunc";
import Spinner from "../../Utils/Spinner";
import { useVideoContext } from "../../Context/Context";

export default function ChannelComp({ id }: { id: string | undefined }) {
  const { resize } = Resize();
  const { setProgress } = useVideoContext();
  const { data: channelData, isLoading } = useQuery({
    queryKey: ["channelInfo", id],
    queryFn: () => {
      setProgress(100);
      return id && channelDetails(id);
    },
    staleTime: Infinity,
  });
  if (isLoading) return <Spinner />;
  return (
    <div className="channel-comp flex shadow-md relative">
      <img
        src={
          resize < 600
            ? channelData?.banner?.mobile[2]?.url
            : channelData?.banner?.desktop[2]?.url
        }
        className="w-ful h-[180px] sm:h-[220px] md:h-[270px] lg:h-[310px] flex-1 object-cover"
        alt={channelData?.title}
      />
      <div className="channel--info flex items-center gap-5 bg-neutral-900/30 py-3 px-6 rounded-md shadow-md backdrop-blur-[5px] absolute -bottom-[35px] left-[50%] w-[250px] md:w-[300px] -translate-x-[50%]">
        <img
          src={channelData?.avatar[0]?.url}
          alt={channelData?.title}
          className="size-[50px] rounded-[50%]"
        />
        <div className="flex flex-col gap-1 whitespace-nowrap">
          <h1 className="font-semibold md:text-lg text-white">
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
