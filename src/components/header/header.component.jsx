import React from 'react';
import { useHistory } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <h4 className="title" onClick={() => history.push('/')}>
        TO DO
      </h4>
    </div>
  );
};

export default Header;
