import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import PageLayout from '../components/PageLayout'
import ProjectKvLayout from '../components/ProjectKvLayout'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import banner from '../static/img/works/cover_everything.png'
import surfaceCss from '../css/works_surface.module.scss'
import { images } from '../images.ts'

export default function SurfaceApporel(){
  return(
    <PageLayout>
      <section id={surfaceCss.works_surface}>
        <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" />
        <div className={surfaceCss.kv_container}>
        這一頁是 Surface!!!!!
          <ProjectKvLayout 
            kv_column_direction="column"
            name="Everything’s Gonna Be Alright"
            type="Music video" roles={["Design (illustration), Animation"]} date="2020.03-2020.12" tool="After Effects, Illustrator, Photoshop" url="https://store.line.me/stickershop/product/14468519" urlTitle="Watch the video"
            bannerImg={banner}/>
        </div>
        
      </section>
    </PageLayout>
  );
}