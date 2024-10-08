import { VideoComp } from "./VideoComp";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCategory } from "../../Functions/FetchFunc";
import Spinner from "../../Utils/Spinner";
import { useVideoContext } from "../../Context/Context";

export default function HomePage() {
  const { category, setProgress } = useVideoContext();
  const {
    data: videoData,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["videos", category],
    initialPageParam: 1,
    refetchInterval: 1000 * 60 * 5,
    queryFn: () => {
      setProgress(100);
      return fetchCategory(category);
    },
    getNextPageParam: (lastPage) => {
      return lastPage?.cursorNext;
    },
    staleTime: category === "New" ? 1000 * 60 * 8 : Infinity,
    enabled: !!category,
  });

  return (
    <section className="flex flex-col py-10 md:py-2 gap-8 items-center gap-8 flex-1 overflow-y-scroll scroll-smooth">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-5 md:p-7items-start gap-8 justify-center md:justify-start w-full flex-1 p-2 md:p-5">
        {isLoading && <Spinner />}
        {videoData?.pages.map((page) =>
          page?.contents.map((video: videoType, index: number) => (
            <VideoComp key={index} data={video.video} show={true} />
          )),
        )}
      </div>
      {isFetchingNextPage ? (
        <Spinner />
      ) : (
        <button
          disabled={!hasNextPage}
          className="py-3 mb-20 md:mb-8 px-10 border border-rose-600 font-semibold text-lg md:text-xl text-rose-600 hover:enabled:text-rose-400 hover:enabled:border-rose-400 w-fit rounded-md shadow-md mx-auto disabled:opacity-50 disabled:cursor-not-allowed my-2"
          onClick={() => fetchNextPage()}
        >
          Load More
        </button>
      )}
    </section>
  );
}
