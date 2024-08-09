import React from "react";
import "./index.css";

const Sidebar = () => {
  const sideContent = [
    "Revenue",
    "Shoppable Video",
    "Story",
    "Live Commerce",
    "Playlist Manager",
    "One Click Post",
    "Calendar",
    "Hire Influencer",
  ];
  return (
    <div className="sidebar">
      <ul>
        {sideContent.map((eachContent) => (
          <li key={eachContent} className="list-item">
            {eachContent === "Playlist Manager" ? (
              <details open>
                <summary>{eachContent}</summary>
                <p className="summary-name">Product playlist</p>
              </details>
            ) : (
              <details>
                <summary>{eachContent}</summary>
              </details>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
