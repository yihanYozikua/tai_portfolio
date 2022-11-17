import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Parallax, useParallax, ParallaxProvider } from 'react-scroll-parallax';

import Loading from './Loading'
import Cursor from '../Cursor'
import Footer from '../Footer'



const PageLayout = ({children}) => {

  return(
    <ParallaxProvider>
      {children}
      <Footer />
    </ParallaxProvider>
  )
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

PageLayout.defaultProps = {
  // bgColor: '',
};

export default PageLayout;