import React from "react";

const EducationItem = ({ course }) => {
  return (
    <div className="education-item">
      <img src={course.image} alt="" />
      <p className="institution">{course.institution}</p>
      <p className="course">{course.name}</p>
      <p className="finished">{course.finished}</p>
    </div>
  );
};

export default EducationItem;
