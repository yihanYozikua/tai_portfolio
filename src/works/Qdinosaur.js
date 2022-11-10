import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import PageLayout from '../components/PageLayout'
import ProjectKvLayout from '../components/ProjectKvLayout'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import dinasourCss from '../css/works_dinasour.module.scss'
import { images } from '../images.ts'
import banner from '../static/img/works/cover_dinasour.png'

export default function Qdinosaur(){
  return(
    <PageLayout>
      <section id={dinasourCss.works_dinasour}>
        <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" />
        <div className={dinasourCss.kv_container}>
          <ProjectKvLayout 
            kv_column_direction="column-reverse"
            name="Q dinosaur 恐恐龍"
            type="Line sticker (Side project)" roles={["Design (illustration)"]} date="2020.10-2020.12" tool="Adobe illustratior" url="https://store.line.me/stickershop/product/14468519" urlTitle="sticker page"
            bannerImg={banner}/>
        </div>
        
      </section>
    </PageLayout>
  );
}