/* eslint-disable react/prop-types */
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteVideoMutation } from "../../redux/features/api/apiSlice";
import { useEffect } from "react";

const VideoDescription = ({ video }) => {
  const { id, date, title, description } = video;
  const [deleteVideo, { isLoading, isError, isSuccess }] =
    useDeleteVideoMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [navigate, isSuccess]);

  // handle delete video
  const handleDeleteVideo = (id) => {
    deleteVideo(id);
  };
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {date}
        </h2>

        {/* <!-- delete/edit --> */}
        <div className="flex gap-10 w-48">
          <div className="flex gap-1">
            <Link to={`/edit/videos/${id}`} className="shrink-0">
              <img className="w-5 block" src={editIcon} alt="Edit" />
            </Link>
            <p className="text-sm leading-[1.7142857] text-slate-600">Edit</p>
          </div>
          <div className="flex gap-1">
            <div onClick={() => handleDeleteVideo(id)} className="shrink-0">
              <img className="w-5 block" src={deleteIcon} alt="Delete" />
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
              Delete
            </div>
          </div>
        </div>
      </div>
      {!isLoading && isError && <div> There was an error! </div>}
      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {description}
      </div>
    </div>
  );
};

export default VideoDescription;
