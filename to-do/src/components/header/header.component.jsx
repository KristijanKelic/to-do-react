import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = () => {
  return (
    <div className="header">
      <Logo className="logo" />
      <div className="title">
        <h4>TO DO</h4>
      </div>
    </div>
  );
};

export default Header;
