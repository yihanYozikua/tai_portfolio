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
            url="http://tuip2t5.weebly.com/" urlTitle="Project site"
            bannerImg={banner}/>
        </div>
        
        {/* <iframe width="375" height="667" src="https://xd.adobe.com/embed/c82ed3f5-d277-4d05-8ee5-67f4a493fe9e-9d7d/" frameborder="0" allowfullscreen></iframe> */}
      </section>
    </PageLayout>
  );
}