import React from "react";
import { Link } from "react-router-dom"; // Import Link
const CreatePollSurveyHome = () => {
  return (
    <div>
      <div className="flex flex-col items-center bg-white">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 mt-20 mb-5">
            Create a Poll & Survey
          </h1>
        </div>
        <p className="text-gray-600 mb-6 text-center ml-10 mr-10 ">
          <span className="text-black"> Create a Poll and survey </span> to
          accurately gauge public opinion on politics, including topics like
          demographics, party affiliation,
          <br /> key issues, candidate evaluation, voting intentions, media
          habits, and trust in government institutions.
        </p>

        <Link to="/create-a-poll">
          {" "}
          <button className="bg-indigo-600 w-40 text-white mt-10 py-2 px-6 mb-5 rounded hover:bg-indigo-700 transition duration-200">
            Create a Poll
          </button>
        </Link>

        <Link to="/create-a-survey">
          {" "}
          {/* Use Link to navigate */}
          <button className="bg-indigo-600 w-40 mb-20 text-white py-2 px-6 rounded hover:bg-indigo-700 transition duration-200">
            Create a Survey
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CreatePollSurveyHome;
