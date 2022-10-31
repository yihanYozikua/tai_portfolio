import React from 'react'
import PropTypes from 'prop-types'

import Cursor from '../Cursor'
import Footer from '../Footer'

const BG_COLOR_1 = "#F6F6F6"
const BG_COLOR_2 = "#DBDEE0"


const PageLayout = ({ children, bgColor }) => {
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
  bgColor: PropTypes.string,
}

PageLayout.defaultProps = {
  bgColor: '',
};

export default PageLayout;