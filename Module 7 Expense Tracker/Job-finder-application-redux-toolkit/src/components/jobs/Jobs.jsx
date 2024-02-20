import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import { useEffect } from "react";
import { fetchAllJobs } from "../../redux/features/jobs/jobsSlice";

const Jobs = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, jobs, filters } = useSelector(
    (state) => state.jobs
  );

  useEffect(() => {
    console.log("data fetching from server");
    dispatch(fetchAllJobs());
  }, [dispatch]);

  // Filter jobs based on search and type
  const filteredJobs = jobs.filter((job) => {
    const titleMatchesSearch = filters.search
      ? job.title.toLowerCase().includes(filters.search.toLowerCase())
      : true; // Show all jobs if no search query
    const typeMatchesFilter = filters.type === "" || job.type === filters.type;
    return titleMatchesSearch && typeMatchesFilter;
  });

  // Sort jobs based on the selected sort option
  if (filters.sort === "ascending") {
    filteredJobs.sort((a, b) => a.salary - b.salary);
  } else if (filters.sort === "descending") {
    filteredJobs.sort((a, b) => b.salary - a.salary);
  }

  // decide what to render
  let content = null;
  if (isLoading) content = <div>Loading...</div>;
  if (!isLoading && isError) content = <div>There was an Error </div>;
  if (!isLoading && !isError && filteredJobs.length === 0) {
    content = <div>No Jobs found! </div>;
  }
  if (!isLoading && !isError && filteredJobs?.length >= 0)
    content = filteredJobs.map((job) => <Job key={job.id} job={job} />);
  return <div className="jobs-list">{content}</div>;
};

export default Jobs;
