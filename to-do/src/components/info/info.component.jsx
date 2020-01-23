import React from 'react';

import './info.styles.scss';

const InfoText = () => {
  return (
    <div className="info-text">
      <span>
        You have <span className="number-of-tasks"> 4 </span> tasks left to do!
      </span>
    </div>
  );
};

export default InfoText;
