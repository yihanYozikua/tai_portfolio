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
      <div className={projectKvCss.kv_container}>
        <div className={projectKvCss.info_container}>
          <div className={projectKvCss.project_name_prop}>{ name }</div>
          <div className={projectKvCss.detailed_info_container}>
            <div className={projectKvCss.detailed_info_each_container}>
              <div className={projectKvCss.detailed_info_prop_title}>Type.</div>
              <div className={projectKvCss.detailed_info_prop_contents}>{ type }</div>
            </div>
            <div className={projectKvCss.detailed_info_each_container}>
              <div className={projectKvCss.detailed_info_prop_title}>Role.</div>
              <div className={projectKvCss.detailed_info_prop_contents}>{ role }</div>
            </div>
            <div className={projectKvCss.detailed_info_each_container}>
              <div className={projectKvCss.detailed_info_prop_title}>Date.</div>
              <div className={projectKvCss.detailed_info_prop_contents}>{ date }</div>
            </div>
            <div className={projectKvCss.detailed_info_each_container}>
              <div className={projectKvCss.detailed_info_prop_title}>Tool.</div>
              <div className={projectKvCss.detailed_info_prop_contents}>{ tool }</div>
            </div>
          </div>
          {/* <div>{ urlRender }</div> */}
        </div>
        
        <div className={projectKvCss.banner_container}>
          <img src={ bannerImg } alt={ name }></img>
        </div>
      </div>
    </div>
  )
}