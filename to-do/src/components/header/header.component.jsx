import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <Logo className="logo" onClick={() => history.push('/')} />
      <div className="title">
        <h4>TO DO</h4>
      </div>
    </div>
  );
};

export default Header;
