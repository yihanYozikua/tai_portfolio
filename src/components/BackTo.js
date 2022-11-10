import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {Route, Link, Routes, useLocation} from 'react-router-dom';

import { images } from '../images.ts'
import { backCss } from '../css/back.module.scss'
import PageLayout from './PageLayout';

const BackTo = ({wrapperComponent, url, ...props}) => {
  <Wrapper {...props}>
    <Link to={url}></Link>
  </Wrapper>
}

PageLayout.propTypes = {
  url: url
}

PageLayout.defaultProps = {
  url: ''
}

export default BackTo;