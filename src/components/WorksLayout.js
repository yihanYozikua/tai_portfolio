import React from 'react'
import PropTypes from 'prop-types'
import { Parallax, useParallax, ParallaxProvider } from 'react-scroll-parallax';

import Cursor from '../Cursor'
import Footer from '../Footer'

const WorksLayout = ({ children }) => {
  return(
    <ParallaxProvider>
      <Cursor />
      {children}
      <Footer />
    </ParallaxProvider>
  )
};

WorksLayout.propTypes = {
  children: PropTypes.node.isRequired
}

WorksLayout.defaultProps = {
  bgColor: '',
}

export default WorksLayout;