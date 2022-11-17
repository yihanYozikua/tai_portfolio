import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {Route, Link, Routes, useLocation} from 'react-router-dom';

import { images } from '../images.ts'
import arrow_left from '../static/img/works/arrow_left.svg'
import arrow_right from '../static/img/works/arrow_right.svg'
import backAnchorCss from '../css/back_to_anchor.module.scss'
import PageLayout from './PageLayout';

export default function WorksBackToAnchor ({prevUrl, nextUrl, containerWidth}){
  return(
    <div id={backAnchorCss.works_back_to_anchor_container}>
      <div className={backAnchorCss.works_back_to_anchor_contents_container}
        style={{width: containerWidth}}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
        data-aos-duration="300"
        data-aos-once="false">
        <Link to={prevUrl} className={backAnchorCss.prev_next_container}>
          <img src={arrow_left} className={backAnchorCss.img_prop}></img>
          <div className={backAnchorCss.text_prop}>Prev</div>
        </Link>
        <Link className={backAnchorCss.back_to_list_prop} to="/works">Back to list</Link>
        <Link to={nextUrl} className={backAnchorCss.prev_next_container}>
          <div className={backAnchorCss.text_prop}>Next</div>
          <img src={arrow_right} className={backAnchorCss.img_prop}></img>
        </Link>
      </div>
    </div>
  );
}