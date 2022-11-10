import React from 'react'
import PropTypes from 'prop-types'
import { Parallax, useParallax, ParallaxProvider } from 'react-scroll-parallax';
import { Link } from 'react-router-dom'

import Cursor from '../Cursor'
import Footer from '../Footer'
import projectKvCss from '../css/project_kv_layout.module.scss'

export default function ProjectKvLayout ({name, type, role, date, tool, bannerImg, url}){

  // let urlRender;
  // if(url){
  //   urlRender = url.map((item) => {
  //     <a href={url}>
  //       <div>Project site</div>
  //     </a>
  //   });
  // }
  // else{
  //   urlRender = '';
  // }

  return(
    <div className={projectKvCss.project_kv}>
      <div className={projectKvCss.info_container}>
        <div className={projectKvCss.project_name_prop}>{ name }</div>
        <div className={projectKvCss.detailed_info_container}>
          <div>
            <div>Type.</div>
            <div>{ type }</div>
          </div>
          <div>
            <div>Role.</div>
            <div>{ role }</div>
          </div>
          <div>
            <div>Date.</div>
            <div>{ date }</div>
          </div>
          <div>
            <div>Tool.</div>
            <div>{ tool }</div>
          </div>
        </div>
        {/* <div>{ urlRender }</div> */}
      </div>
      
      <div className={projectKvCss.banner_container}>
        <img src={ bannerImg } alt={ name }></img>
      </div>
    </div>
  )
}