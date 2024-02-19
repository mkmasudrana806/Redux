import { useEffect, useState } from "react";
import {
  useAddVideoMutation,
  useEditVideoMutation,
  useGetVideoQuery,
} from "../../redux/features/api/apiSlice";
import { useParams } from "react-router-dom";

const AddVideoForm = () => {
  const { id } = useParams();
  // to add new video
  const [addVideo, { isLoading, isSuccess }] = useAddVideoMutation();
  // get single video based on route id to update video
  const { data: video } = useGetVideoQuery(id, { skip: !id });
  // edit video based on route id
  const [editVideo, { isError: updatedIsError, isSuccess: updatedIsSuccess }] =
    useEditVideoMutation();

  const initialState = {
    title: "",
    author: "",
    description: "",
    date: "",
    duration: "",
    views: "",
    link: "",
    thumbnail: "",
  };
  const [newVideo, setNewVideo] = useState(initialState);

  // set state for specific video when video true
  useEffect(() => {
    setNewVideo((prev) => ({ ...prev, ...video }));
  }, [video]);

  useEffect(() => {
    console.log("effect called");
  }, []);
  // handle Add new video
  const addNewVideoOrUpdate = (e) => {
    e.preventDefault();
    if (id) {
      editVideo({ id: id, data: { ...newVideo } });
    } else {
      addVideo(newVideo);
      setNewVideo(initialState);
    }
  };

  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <div className="w-full">
          <div className="px-4 sm:px-0 pb-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Add new video
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Please fillup the form to add new video
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={addNewVideoOrUpdate} action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Title
                      </label>
                      <input
                        value={newVideo.title}
                        onChange={(e) =>
                          setNewVideo({ ...newVideo, title: e.target.value })
                        }
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Author
                      </label>
                      <input
                        value={newVideo.author}
                        onChange={(e) =>
                          setNewVideo({ ...newVideo, author: e.target.value })
                        }
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          value={newVideo.description}
                          onChange={(e) =>
                            setNewVideo({
                              ...newVideo,
                              description: e.target.value,
                            })
                          }
                          id="about"
                          name="about"
                          rows="3"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        ></textarea>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Brief description for your video
                      </p>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        YouTube Video Link
                      </label>
                      <input
                        value={newVideo.link}
                        onChange={(e) =>
                          setNewVideo({ ...newVideo, link: e.target.value })
                        }
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Thumbnail link
                      </label>
                      <input
                        value={newVideo.thumbnail}
                        onChange={(e) =>
                          setNewVideo({
                            ...newVideo,
                            thumbnail: e.target.value,
                          })
                        }
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date
                      </label>
                      <input
                        value={newVideo.date}
                        onChange={(e) =>
                          setNewVideo({ ...newVideo, date: e.target.value })
                        }
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Duration
                      </label>
                      <input
                        value={newVideo.duration}
                        onChange={(e) =>
                          setNewVideo({ ...newVideo, duration: e.target.value })
                        }
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Views
                      </label>
                      <input
                        value={newVideo.views}
                        onChange={(e) =>
                          setNewVideo({ ...newVideo, views: e.target.value })
                        }
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                  >
                    {id ? "Update Video" : isLoading ? "Saving..." : "save"}
                  </button>
                </div>
              </div>
            </form>
            {isSuccess && <p>video was added successfully </p>}
            {id && updatedIsSuccess && <div>Updated Successfully</div>}
            {id && updatedIsError && <div>there was an Error</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddVideoForm;
