import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Logo from '../img/logo.png';

// // interface NavigationProps { }

const Navigation = (/*props: NavigationProps*/) => {
  const [visible, setVisible] = useState(false)

  const handleVisible = () => {
    setVisible(!visible)
  }

  return (
    <>
      <nav className="navbar navbar-dark fixed-top bg-gray-900 flex-md-nowrap p-0 shadow">
        <div className={`nav-icon-toggler d-block d-lg-none nav-icon-custom ${visible && 'open'}`} onClick={handleVisible}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link className="navbar-brand pl-4" to="/">
          <img src={Logo} alt="logo.png" height="30" />
        </Link>
      </nav>
      <Sidebar visible={visible} onVisible={handleVisible} />
    </>
  );
};

export default React.memo(Navigation)
