import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import PageLayout from '../components/PageLayout'
import ProjectKvLayout from '../components/ProjectKvLayout'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import banner from '../static/img/works/cover_sleep.png'
import sleepCss from '../css/works_sleep.module.scss'
import { images } from '../images.ts'

export default function SleepWell(){
  return(
    <PageLayout>
      <section id={sleepCss.works_sleep}>
        <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" />
        <div className={sleepCss.kv_container}>
          <ProjectKvLayout 
            kv_column_direction="column"
            name="Sleep well"
            type="Application design (School project)" roles={["Direction, Project Management,", "Design"]} 
            date="2018.10-2018.12" tool="Adobe XD" 
            url="" urlTitle="Project site"
            bannerImg={banner}/>
        </div>
        
      </section>
    </PageLayout>
  );
}