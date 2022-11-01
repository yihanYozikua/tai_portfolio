import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { images } from '../images.ts'
import navCss from '../css/nav.module.scss'

const Navbar = ({wrapperComponent, ...props}) => {
  const Wrapper = wrapperComponent;
  return(
    <Wrapper {...props}>
      <Link to="/about" className={navCss.nav_prop}>About</Link>
      <Link to="/works" className={navCss.nav_prop}>Works</Link>
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