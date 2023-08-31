import React from 'react';

const TeamMemberCard = ({ name, title, imageSrc, Url }) => {
  return (
    <div className="team-member-card">
      <div className="team-member-image">
        <a href={Url} target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} alt={name} />
        </a>
      </div>
      <h4>{name}</h4>
      <p>{title}</p>
    </div>
  );
};

export default TeamMemberCard;
