/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import RelatedVideos from "./RelatedVideos";
import VideoPlayer from "./VideoPlayer";
import { useGetVideoQuery } from "../../redux/features/api/apiSlice";
import VideoDescription from "./VideoDescription";

const Video = () => {
  const { videoId } = useParams();
  const { data: video, isLoading, isError } = useGetVideoQuery(videoId);

  // decide what to render
  let content = null;
  if (isLoading) content = <div>Loading...</div>;

  if (!isLoading && isError) content = <div>There was an error! </div>;

  if (!isLoading && !isError && video?.id)
    content = (
      <>
        <VideoPlayer link={video.link} title={video.title} />
        <VideoDescription video={video} />
      </>
    );

  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {content}
          </div>
          {video?.id ? (
            <RelatedVideos id={video.id} title={video.title} />
          ) : isLoading ? (
            <div>Loading.. </div>
          ) : (
            <div>There was an Error </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Video;
