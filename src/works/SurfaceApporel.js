import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import PageLayout from '../components/PageLayout'
import ProjectKvLayout from '../components/ProjectKvLayout'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import banner from '../static/img/works/cover_surface.png'
import surfaceCss from '../css/works_surface.module.scss'
import suface_1 from '../static/img/works/surface_1.png'
import { images } from '../images.ts'

export default function SurfaceApporel(){
  return(
    <PageLayout>
      <section id={surfaceCss.works_surface}>
        <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" />
        <div className={surfaceCss.kv_container}>
          <ProjectKvLayout 
            kv_column_direction="column"
            name="SurfAce Apparel"
            type="Runway animation" roles={["Project Management, Design , Animation"]} date="2018.10-2018.12" tool="After Effects, Photoshop" url="https://store.line.me/stickershop/product/14468519" urlTitle="Watch the video"
            bannerImg={banner}/>


            <div className={surfaceCss.present_img_container}>
              <img src={suface_1} alt="SurfAce Present by" className={surfaceCss.pieces_prop}></img>
            </div>


            <div className={surfaceCss.present_description_container}>
              <div className={surfaceCss.present_description_prop}>
              CAMPUS COLLECTIONは大阪が発祥で、ランウェイ、ダンスと音楽のパフォーマンス、
              コスメ展示などを含めたファションイベントです。出演者から運営スタッフまで全部学生が携わるのが特徴で、
              大阪をはじめ、海外合わせて15都市での開催実績があります。
              </div>
            </div>


        </div>
        
      </section>
    </PageLayout>
  );
}