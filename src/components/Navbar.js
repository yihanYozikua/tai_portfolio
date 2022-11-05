import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {Route, Link, Routes, useLocation} from 'react-router-dom';

import { images } from '../images.ts'
import navCss from '../css/nav.module.scss'

const Navbar = ({wrapperComponent, ...props}) => {
  const nav_about_ref = useRef(null);
  const nav_works_ref = useRef(null);
  const nav_bar_ref = useRef(null);
  const COLOR_NAV_BG = '#282D2F';

  const Wrapper = wrapperComponent;
  const location = useLocation();

  useEffect(() => {
    if(location.pathname == '/about'){
      nav_about_ref.current.style.color = 'white';
      nav_works_ref.current.style.color = COLOR_NAV_BG;

      nav_bar_ref.current.style.marginLeft = '.5rem';
    }
    else if(location.pathname == '/works'){
      nav_about_ref.current.style.color = COLOR_NAV_BG;
      nav_works_ref.current.style.color = 'white';

      nav_bar_ref.current.style.marginLeft = '7rem';
    }
  }, []);

  return(
    <Wrapper {...props}>
      <Link to="/about" className={navCss.nav_prop} ref={nav_about_ref}>About</Link>
      <Link to="/works" className={navCss.nav_prop} ref={nav_works_ref}>Works</Link>
      <div className={navCss.nav_bar_container}>
        <div className={navCss.nav_bar_bg} ref={nav_bar_ref}></div>
      </div>
      
    </Wrapper>
  )
}

Navbar.propTypes = {
  wrapperComponent: PropTypes.elementType,
};

Navbar.defaultProps = {
  wrapperComponent: 'nav',
};

export default Navbar;