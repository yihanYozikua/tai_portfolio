import React, { useEffect, useRef, useState }  from 'react'
import PropTypes from 'prop-types'
import { Parallax, useParallax, ParallaxProvider } from 'react-scroll-parallax';
import { Link } from 'react-router-dom'

import Cursor from '../Cursor'
import Footer from '../Footer'
import BackTo from './BackTo';
import projectKvCss from '../css/project_kv_layout.module.scss'
import arrow from '../static/icons/arrow_up_right.svg'

export default function ProjectKvLayout ({ kv_column_direction, name, type, roles, date, tool, bannerImg, url, urlTitle}){
  console.log(kv_column_direction);
  var roleRender = roles.map(item => <div className={projectKvCss.detailed_info_prop_contents}>{item}</div>);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);


  return(
    <div className={projectKvCss.project_kv}>
      <BackTo buttonName="Back to list" url="/works"/>
      <div className={projectKvCss.kv_container} style={{flexDirection: kv_column_direction}}>
        <div className={projectKvCss.info_container}>
          <div className={projectKvCss.project_name_prop}>{ name }</div>
          <div className={projectKvCss.detailed_info_container}>
            <div className={projectKvCss.detailed_info_left_container}>
              <div className={projectKvCss.detailed_info_each_container}>
                <div className={projectKvCss.detailed_info_prop_title}>Type.</div>
                <div className={projectKvCss.detailed_info_prop_contents}>{ type }</div>
              </div>
              <div className={projectKvCss.detailed_info_each_container}>
                <div className={projectKvCss.detailed_info_prop_title}>Role.</div>
                { roleRender }
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
            <div className={projectKvCss.detailed_info_right_container}>
              <a href={ url } className={projectKvCss.url_prop} target="_blank">{ urlTitle }</a>
              <img src={ arrow } className={projectKvCss.arrow_prop}></img>
            </div>
          </div>
          
          
        </div>
        
        <div className={projectKvCss.banner_container}>
          <img src={ bannerImg } alt={ name } className={projectKvCss.banner_img_prop}></img>
        </div>
      </div>
    </div>
  )
}