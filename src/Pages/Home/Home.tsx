import { VideoComp } from "./VideoComp";
import { useQuery } from "@tanstack/react-query";
import { fetchHome } from "../../Functions/FetchFunc";
import Spinner from "../../Utils/Spinner";
import { useVideoContext } from "../../Context/Context";

export default function HomePage() {
  const { setProgress } = useVideoContext();
  const { data: videoData, isLoading } = useQuery({
    queryKey: ["videos"],
    queryFn: fetchHome,
    staleTime: 1000 * 60 * 7,
  });

  return (
    <section className="flex justify-center sm:justify-start gap-8 p-5 flex-wrap overflow-y-scroll flex-1">
      {isLoading && <Spinner />}
      {videoData?.contents?.map((content: any, index: number) => (
        <VideoComp key={index} data={content.video} />
      ))}
    </section>
  );
}
