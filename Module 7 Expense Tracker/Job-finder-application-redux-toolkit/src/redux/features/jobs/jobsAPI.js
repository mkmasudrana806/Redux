import axios from "../../../utils/axios.js";

// get all jobs
export const getAllJobs = async () => {
  const jobs = await axios.get("/jobs");
  return jobs.data;
};

// add a job
export const createJob = async (job) => {
  const newJob = await axios.post("/jobs", job);
  return newJob.data;
};
// get a job from server
export const getJob = async (id) => {
  const job = await axios.get(`/jobs/${id}`);
  return job.data;
};

// edit or update a job
export const updateJob = async (id, updatedJob) => {
  const job = await axios.put(`/jobs/${id}`, updatedJob);
  return job.data;
};

//delete a job
export const removeJob = async (id) => {
  const job = await axios.delete(`/jobs/${id}`);
  return job.data;
};
