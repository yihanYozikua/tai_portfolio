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
        <ProjectKvLayout 
          name="Q dinosaur 恐恐龍"
          type="Line sticker (Side project)" role="Design (illustration)" date="2020.10-2020.12" tool="Adobe illustratior" url="https://store.line.me/stickershop/product/14468519" urlTitle="sticker page"
          bannerImg={banner}/>
      </section>
    </PageLayout>
  );
}