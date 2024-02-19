import { useGetVideosQuery } from "../../redux/features/api/apiSlice";
import VideoCart from "./VideoCart";

const Videos = () => {
  const { data: videos, isError, isLoading, refetch, isFetching, isSuccess } = useGetVideosQuery();

  // decide what to render
  let content = null;
  if (isLoading) content = <div>Loading...</div>;

  if (!isLoading && isError) content = <div>Error </div>;

  if (!isLoading && !isError && videos?.length === 0)
    content = <div>No videos found</div>;

  if (!isLoading && !isError && videos?.length > 0)
    content = videos.map((video) => <VideoCart video={video} key={video.id} />);

  return (
    // <!-- Video Grid -->
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
        {content}
      </div>
    </section>
  );
};

export default Videos;
