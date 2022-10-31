import React from 'react'
import PropTypes from 'prop-types'

import Cursor from '../Cursor'
import Footer from '../Footer'



const PageLayout = ({ children }) => {
  return(
    <>
      <Cursor />
      {children}
      <Footer />
    </>
  )
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

PageLayout.defaultProps = {
  bgColor: '',
};

export default PageLayout;