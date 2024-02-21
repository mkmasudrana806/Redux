import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchJob, sortJob } from "../../redux/features/jobs/jobsSlice";

const JobsSearch = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  // handle search jobs
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchJob(search));
  };

  // sort jobs based on ascending and descending
  const handleSort = (e) => {
    dispatch(sortJob(e.target.value));
  };
  return (
    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
      <h1 className="lws-section-title">All Available Jobs</h1>
      <div className="flex gap-4">
        <form onSubmit={handleSearch} className="search-field group flex-1">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search Job"
            className="search-input"
            id="lws-searchJob"
          />
        </form>
        <select
          onChange={handleSort}
          id="lws-sort"
          name="sort"
          autoComplete="sort"
          className="flex-1"
        >
          <option value={""}>Default</option>
          <option value={"ascending"}>Salary (Low to High)</option>
          <option value={"descending"}>Salary (High to Low)</option>
        </select>
      </div>
    </div>
  );
};

export default JobsSearch;
