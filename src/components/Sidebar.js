import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { images } from '../images.ts'
import sidebarCss from '../css/sidebar.module.scss'

const Sidebar = ({ sidebarTitle, emoji_1, empji_1_text, emoji_2, emoji_2_text }) => {
  return(
    <div>
      TO DO: sidebar
    </div>
  )
}

Sidebar.propTypes = {
  sidebarTitle: PropTypes.string,
  emoji_1: PropTypes.string,
  emoji_1_text: PropTypes.string,
  emoji_2: PropTypes.string,
  emoji_2_text: PropTypes.string,
};

Sidebar.defaultProps = {
  sidebarTitle: '',
  emoji_1: '',
  emoji_1_text: '',
  emoji_2: '',
  emoji_2_text: '',
}

export default Sidebar;