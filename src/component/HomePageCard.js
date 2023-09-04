
  import React, { useState } from "react";
  

const HomePageCard = ({ title, content,  }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleCard = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card ${expanded ? "expanded" : ""}`} onClick={toggleCard}>
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      {expanded && <p>{content}</p>}
    </div>
  );
};

export default HomePageCard;
