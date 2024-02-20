import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addJob,
  clearSingleJob,
  editJob,
  getSingleJob,
} from "../../redux/features/jobs/jobsSlice";

const AddNewJob = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleJob, isLoading, isError } = useSelector((state) => state.jobs);

  const [newJob, setNewJob] = useState({
    title: "",
    type: "",
    salary: "",
    deadline: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(getSingleJob(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id) {
      setNewJob((prev) => ({ ...prev, ...singleJob }));
    }
  }, [id, singleJob]);

  // handle add job
  const handleAddAndUpdateJob = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(editJob({ id, data: newJob }));
      dispatch(clearSingleJob(id));
    } else {
      dispatch(addJob(newJob));
    }
  };

  return (
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
      <div className="lg:pl-[14rem] mt-[5.8125rem]">
        <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
          <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>

          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleAddAndUpdateJob} className="space-y-6">
              <div className="fieldContainer">
                <label
                  htmlFor="lws-JobTitle"
                  className="text-sm font-medium text-slate-300"
                >
                  Job Title
                </label>
                <select
                  id="lws-JobTitle"
                  value={newJob.title}
                  onChange={(e) =>
                    setNewJob({ ...newJob, title: e.target.value })
                  }
                  name="lwsJobTitle"
                  required
                >
                  <option hidden>Select Job</option>
                  <option>Software Engineer</option>
                  <option>Software Developer</option>
                  <option>Full Stack Developer</option>
                  <option>MERN Stack Developer</option>
                  <option>DevOps Engineer</option>
                  <option>QA Engineer</option>
                  <option>Product Manager</option>
                  <option>Social Media Manager</option>
                  <option>Senior Executive</option>
                  <option>Junior Executive</option>
                  <option>Android App Developer</option>
                  <option>IOS App Developer</option>
                  <option>Frontend Developer</option>
                  <option>Frontend Engineer</option>
                </select>
              </div>

              <div className="fieldContainer">
                <label htmlFor="lws-JobType">Job Type</label>
                <select
                  value={newJob.type}
                  onChange={(e) =>
                    setNewJob({ ...newJob, type: e.target.value })
                  }
                  id="lws-JobType"
                  name="lwsJobType"
                  required
                >
                  <option hidden selected>
                    Select Job Type
                  </option>
                  <option>Full Time</option>
                  <option>Internship</option>
                  <option>Remote</option>
                </select>
              </div>

              <div className="fieldContainer">
                <label htmlFor="lws-JobSalary">Salary</label>
                <div className="flex border rounded-md shadow-sm border-slate-600">
                  <span className="input-tag">BDT</span>
                  <input
                    value={newJob.salary}
                    onChange={(e) =>
                      setNewJob({ ...newJob, salary: e.target.value })
                    }
                    type="number"
                    name="lwsJobSalary"
                    id="lws-JobSalary"
                    required
                    className="!rounded-l-none !border-0"
                    placeholder="20,00,000"
                  />
                </div>
              </div>

              <div className="fieldContainer">
                <label htmlFor="lws-JobDeadline">Deadline</label>
                <input
                  value={newJob.deadline}
                  onChange={(e) =>
                    setNewJob({ ...newJob, deadline: e.target.value })
                  }
                  type="date"
                  name="lwsJobDeadline"
                  id="lws-JobDeadline"
                  required
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  id="lws-submit"
                  className="cursor-pointer btn btn-primary w-fit"
                >
                  {id ? "update" : "submit"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddNewJob;
