import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import PageLayout from './components/PageLayout'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import worksCss from './css/works.module.scss'
import { images } from './images.ts'


const Projects = ({name, type, roles, img, imgWidth, imgHeight, descriptionPositonChoice}) => {
  const [descriptionPosition, setDescriptionPosition] = useState();

  var roleRender = roles.map(item => <div className={worksCss.description_contents_prop}>{item}</div>);
  return(
    <div className={worksCss.project_container}>
      <div className={worksCss.project_img_and_name_container}>
        <img className={worksCss.project_img_prop} src={img} style={{width: imgWidth, height: imgHeight}} alt={name}></img>
        <div className={worksCss.project_name}>{ name }</div>
      </div>
      <div className={worksCss.description_container}>
        <div className={worksCss.decription_contents_container}>
          <div className={worksCss.description_title_prop}>Type.</div>
          <div className={worksCss.description_contents_container}>
            <div className={worksCss.description_contents_prop}>{ type }</div>
          </div>
        </div>
        <div className={worksCss.decription_contents_container}>
          <div className={worksCss.description_title_prop}>Role.</div>
          <div className={worksCss.description_contents_container}>
            { roleRender }
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Works(){

  return(
    <PageLayout>
      <section id={worksCss.works}>
        <Navbar />

        {/* <div className={worksCss.works_container}> </div> */}
      </section>
    </PageLayout>
  )
}