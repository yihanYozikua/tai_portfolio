import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import PageLayout from './components/PageLayout'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import worksCss from './css/works.module.scss'
import { images } from './images.ts'

const Projects = ({name, type, roles, img, imgWidth, imgHeight, descriptionContainerHeight, descriptionPositonChoice}) => {
  var roleRender = roles.map(item => <div className={worksCss.description_contents_prop}>{item}</div>);
  return(
    <div className={descriptionPositonChoice}>
      <div className={worksCss.project_img_and_name_container}>
        <img className={worksCss.project_img_prop} src={img} style={{width: imgWidth, height: imgHeight}} alt={name}></img>
        <div className={worksCss.project_name} style={{width: imgWidth}}>{ name }</div>
      </div>
      <div className={worksCss.description_container} style={{height: descriptionContainerHeight}}>
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
        <Sidebar sidebarTitle="Enjoy this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👋" emoji_2_text="Hover" />

        <div className={worksCss.works_container}>
          <div className={worksCss.works_contents_container}>
            <Projects name="Anotheries" type="Website (Side project)" 
                      roles={["Direction, Writing, Project Management,", "Design, Photography"]} 
                      img={images[2]} imgWidth="29.27rem" imgHeight="18.29rem" 
                      descriptionContainerHeight="18.29rem" descriptionPositonChoice={`${worksCss.project_container_right}`}/>

            <Projects name="Q dinosaur" type="Line sticker (Side project)" 
                      roles={["Design (illustration)"]} 
                      img={images[3]} imgWidth="23.41rem" imgHeight="14.63rem" 
                      descriptionContainerHeight="18.29rem" descriptionPositonChoice={`${worksCss.project_container_right}`}/>

            <Projects name="Everything’s Gonna Be Alright" type="Music video" 
                      roles={["Design (illustration), Animation"]} 
                      img={images[4]} imgWidth="29.27rem" imgHeight="18.29rem" 
                      descriptionContainerHeight="18.29rem" descriptionPositonChoice={`${worksCss.project_container_right}`}/>

            <Projects name="SurfAce Apparel" type="Runway animation" 
                      roles={["Project Management, Animation"]} 
                      img={images[5]} imgWidth="23.41rem" imgHeight="14.63rem" 
                      descriptionContainerHeight="18.29rem" descriptionPositonChoice={`${worksCss.project_container_right}`}/>

            <Projects name="臓器たちの本音" type="Exhibition (School project)" 
                      roles={["Direction, Project Management,","Design, Photography "]} 
                      img={images[6]} imgWidth="29.27rem" imgHeight="18.29rem" 
                      descriptionContainerHeight="18.29rem" descriptionPositonChoice={`${worksCss.project_container_right}`}/>

            <Projects name="Sleep well" type="Application design (School project)" 
                      roles={["Direction, Project Management, Design"]} 
                      img={images[7]} imgWidth="29.27rem" imgHeight="18.29rem" 
                      descriptionContainerHeight="18.29rem" descriptionPositonChoice={`${worksCss.project_container_right}`}/>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}