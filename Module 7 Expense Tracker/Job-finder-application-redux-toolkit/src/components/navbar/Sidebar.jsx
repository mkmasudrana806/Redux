import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterJob } from "../../redux/features/jobs/jobsSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleJobType = (e) => {
    dispatch(filterJob(e.target.innerText.trim()));
  };
  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <p className="main-menu menu-active" id="lws-alljobs-menu">
              <i className="fa-solid fa-briefcase"></i>{" "}
              <span> All Available Jobs</span>
            </p>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <p className="sub-menu" id="lws-internship-menu">
                  <i className="fa-solid fa-stop !text-[#FF5757]"></i>{" "}
                  <span onClick={handleJobType}>Internship</span>
                </p>
              </li>
              <li>
                <p
                  onClick={handleJobType}
                  className="sub-menu"
                  id="lws-fulltime-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF8A00]"></i> Full Time
                </p>
              </li>
              <li>
                <p
                  onClick={handleJobType}
                  className="sub-menu"
                  id="lws-remote-menu"
                >
                  <i className="fa-solid fa-stop !text-[#56E5C4]"></i> Remote
                </p>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/addJob" className="main-menu" id="lws-addJob-menu">
              <i className="fa-solid fa-file-circle-plus"></i>{" "}
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
