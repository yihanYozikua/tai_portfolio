import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { images } from './images.ts'
import navCss from '../css/nav.module.scss'

const Navbar = ({wrapperComponent, ...props}) => {
  const Wrapper = wrapperComponent;
  return(
    <Wrapper {...props}>
      <Link to="/about">about</Link>
      <Link to="/works">works</Link>
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