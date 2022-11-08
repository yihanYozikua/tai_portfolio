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
  const [descriptionPosition, setDescriptionPosition] = useState();

  // if(descriptionPositonChoice == 'right'){
  //   setDescriptionPosition(worksCss.project_container_right);
  // }else if(descriptionPositonChoice == 'left'){
  //   setDescriptionPosition(worksCss.project_container_left);
  // }else if(descriptionPositonChoice == 'bottom'){
  //   setDescriptionPosition(worksCss.project_container_bottom);
  // }

  var roleRender = roles.map(item => <div className={worksCss.description_contents_prop}>{item}</div>);
  return(
    <div className={worksCss.project_container_right}>
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
            <Projects name="Anotheries" type="Website (Side project)" roles={["Direction, Writing, Project Management,", "Design, Photography"]} img={images[2]} imgWidth="29.27rem" imgHeight="18.29rem" descriptionContainerHeight="18.29rem" descriptionPositonChoice="right"/>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}