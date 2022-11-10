import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {Route, Link, Routes, useLocation} from 'react-router-dom';

import { images } from '../images.ts'
import backCss from '../css/back.module.scss'
import PageLayout from './PageLayout';
import arrow from '../static/icons/arrow_left.svg'

export default function BackTo({buttonName, url}){
  return(
    <div className={backCss.back_btn_container}>
      <Link className={backCss.back_btn_contents_container} to={url}>
        <img className={backCss.arrow_prop} src={arrow}></img>
        <div className={backCss.btn_prop}>{ buttonName }</div>
      </Link>
    </div>
    
  )
}