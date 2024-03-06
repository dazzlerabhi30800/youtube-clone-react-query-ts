import { useQuery } from "@tanstack/react-query"
import { fetchRelatedVideo } from "../../Functions/FetchFunc"
import { VideoComp } from "../Home/VideoComp";
import Spinner from "../../Utils/Spinner";

export default function RelatedVideo({ id }: { id: string }) {
    const { data: relatedData, isLoading } = useQuery({
        queryKey: ["relatedVideo", id],
        queryFn: () => fetchRelatedVideo(id),
        staleTime: Infinity,
    })
    if (isLoading) return <Spinner />
    return (
        <div className="flex flex-col rounded-xl gap-4 p-2 items-center bg-neutral-900">
            {relatedData?.contents.map((data: any, index: number) => (
                <VideoComp key={index} data={data.video} />
            ))}
        </div>
    )
}
