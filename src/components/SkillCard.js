import React from "react";

const SkillCard = ({ img, title, description }) => {
  return (
    <div className="group flex justify-center items-center flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center transition transform hover:scale-105 hover:shadow-lg">
      <img
        className="rounded-t-lg h-36 transform transition group-hover:rotate-360"
        src={img}
        alt="HTML"
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
