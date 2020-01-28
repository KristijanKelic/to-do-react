import React from 'react';
import { useHistory } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <div className="title">
        <h4 onClick={() => history.push('/')}>TO DO</h4>
      </div>
    </div>
  );
};

export default Header;
