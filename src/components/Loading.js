import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {Route, Link, Routes, useLocation} from 'react-router-dom';

import loadingCss from '../css/loading.module.scss'

const Loading = () => {

  // preloading section
  const loader = document.getElementById('loader');
  // if you want to show the loader when React loads data again
  const showLoader = () => loader.classList.remove('loader_hide');
  const hideLoader = () => loader.classList.add('loader_hide');

  return(
    <div id={loadingCss.loader}>

    </div>
  )
  
}

export default Loading;