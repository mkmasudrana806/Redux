/* eslint-disable react/prop-types */
import { useGetRelatedVideosQuery } from "../../redux/features/api/apiSlice";
import RelatedSingleVideo from "./RelatedSingleVideo";

const RelatedVideos = ({ id, title }) => {
  const {
    data: videos,
    isError,
    isLoading,
  } = useGetRelatedVideosQuery({ id, title });

  // decide what to render
  let content = null;
  if (isLoading) content = <div>Loading...</div>;

  if (!isLoading && isError) content = <div>There was an error!</div>;

  if (!isLoading && !isError && videos?.length === 0)
    content = <div>No Related videos found</div>;

  if (!isLoading && !isError && videos?.length > 0)
    content = videos.map((video) => (
      <RelatedSingleVideo video={video} key={video.id} />
    ));

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideos;
