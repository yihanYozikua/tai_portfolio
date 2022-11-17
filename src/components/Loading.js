import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {Route, Link, Routes, useLocation} from 'react-router-dom';

import loadingCss from '../css/loading.module.scss'

const Loading = ({bg_style, onloadComponent}) => {

  setTimeout(() => {
    document.getElementById(`${bg_style}`).style.opacity = 0;
    document.getElementById(`${bg_style}`).style.zIndex = -10;
    document.getElementById(`${bg_style}`).style.transition = 'all .3s ease-in-out';
  }, 2000);
  

  return(
    <div id={bg_style}>
    </div>
  )
  
}

export default Loading;