import React from "react";
import "./CourseList.css";
import TilesBackground from "../Backgrounds/TilesBackground";
import AnimatedText from "../AnimatedText/AnimatedText";

export default function CourseList() {
  const coursesData = [
    {
      id: 1,
      title: "RV GO – Bucket Shell",
      color: "#f7931e",
      details: [
        "School Academics (IB/IGCSE/A Level/ICSE/CBSE/US/All KS Year 6 to Year 16/UK SAT)",
        "Foundation For APs",
        "Foundation for SAT (Free ISEE & PSAT)",
        "$23 per class (International Kids)",
        "Rs. 600 to 1000 per class (CBSE, ICSE)",
        "Rs. 1000 to 1200 per class (IB, IGCSE)",
        "*Affordable Cost – please contact",
      ],
    },
    {
      id: 2,
      title: "RV GO – SAT",
      color: "#00aaff",
      details: [
        "Fast Track Program – 2 months program*",
        "Steady Track Program – 4 months program*",
        "Foundation – 4+ months program*",
        "Master & Strategy Sessions",
        "Mocks, Remedial Sessions",
        "*Conditions apply",
      ],
    },
    {
      id: 3,
      title: "RV GO – ACT",
      color: "#16a085",
      details: [
        "Fast Track Program – 2 months program*",
        "Steady Track Program – 4 months program*",
        "Foundation – 4+ months program*",
        "Master & Strategy Sessions",
        "Mocks, Remedial Sessions",
        "*Conditions apply",
      ],
    },
    {
      id: 4,
      title: "RV GO – APS",
      color: "#e74c3c",
      details: ["One on One tutoring", "Expert tutors", "Affordable Cost"],
    },
  ];

  return (
    <div className="courses-wrapper" id="our-courses">
      <TilesBackground />
      <div className="courses-container">
        <AnimatedText text="OUR COURSES" />
        <div className="courses">
          {coursesData.map((item, index) => (
            <div key={item.id} className="courses-item">
              <div
                className="courses-circle"
                style={{ backgroundColor: item.color }}
              >
                {index + 1}
              </div>
              <div className="courses-content">
                <h3>{item.title}</h3>
                {(item.title.includes("SAT") || item.title.includes("ACT")) ? (
                  <>
                    <div className="program-tracks">
                      <div className="track-card fast">{item.details[0]}</div>
                      <div className="track-card steady">{item.details[1]}</div>
                      <div className="track-card foundation">
                        {item.details[2]}
                      </div>
                    </div>
                    <div className="courses-list">
                      {item.details.slice(3).map((point, i) => (
                        <div key={i} className="courses-list-item">
                          <span className="check">
                            <svg
                              className="check-svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 
                                7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 
                                0 0 1 1.06-1.06l2.353 2.353 
                                4.493-6.74a.75.75 0 0 1 
                                1.04-.207Z"
                              />
                            </svg>
                          </span>
                          <span className="list-text">{point}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="courses-list">
                    {item.details.map((point, i) => (
                      <div key={i} className="courses-list-item">
                        <span className="check">
                          <svg
                            className="check-svg"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              fillRule="evenodd"
                              d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 
                              7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 
                              0 0 1 1.06-1.06l2.353 2.353 
                              4.493-6.74a.75.75 0 0 1 
                              1.04-.207Z"
                            />
                          </svg>
                        </span>
                        <span className="list-text">{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
