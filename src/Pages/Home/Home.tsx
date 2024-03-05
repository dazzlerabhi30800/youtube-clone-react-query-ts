import { Link } from "react-router-dom";
import { VideoComp } from "./Video";
import { useQuery } from "@tanstack/react-query";
import { fetchHome } from "../../Functions/FetchFunc";

export default function HomePage() {
  const {
    data: videoData,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: fetchHome,
    staleTime: 1000 * 60 * 7,
  });

  return (
    <section className="flex justify-center gap-8 p-5 flex-wrap overflow-y-scroll flex-1">
      {isLoading && <div>Loading...</div>}
      {videoData?.contents?.map((content: any, index: number) => (
        <VideoComp key={index} data={content.video} />
      ))}
    </section>
  );
}
