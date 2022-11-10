import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import PageLayout from '../components/PageLayout'
import ProjectKvLayout from '../components/ProjectKvLayout'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import banner from '../static/img/works/cover_organ.png'
import organCss from '../css/works_organ.module.scss'
import { images } from '../images.ts'

export default function OrganVoice(){
  return(
    <PageLayout>
      <section id={organCss.works_organ}>
        <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" />
        <div className={organCss.kv_container}>
          <ProjectKvLayout 
            kv_column_direction="column"
            name="臓器の夜間問診"
            type="Exhibition (School project)" roles={["Direction, Project Management,", "Design, Photography "]} date="2018.10-2018.12" tool="Illustrator, Photoshop, Lightroom" 
            url="" urlTitle=""
            bannerImg={banner}/>
        </div>
        
      </section>
    </PageLayout>
  );
}