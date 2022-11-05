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
      setTimeout(()=>{
        nav_bar_ref.current.style.transform = 'translateX(0rem)';
        nav_bar_ref.current.style.transition = 'all 1s ease-in-out';
      }, 10);
      
    }
    else if(location.pathname == '/works'){
      nav_about_ref.current.style.color = COLOR_NAV_BG;
      nav_works_ref.current.style.color = 'white';
      setTimeout(()=>{
        nav_bar_ref.current.style.transform = 'translateX(6.5rem)';
        nav_bar_ref.current.style.transition = 'all 1s ease-in-out';
        // nav_bar_ref.current.style.marginLeft = '7rem';
        // nav_bar_ref.current.style.animation = 'nav_anim_to_works 2s ease-in-out';
      }, 10)
      
    }
  }, [location.pathname]);

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