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
import dinasour_1 from '../static/img/works/dinasour_1.png'
import dinasour_2 from '../static/img/works/dinasour_2.png'
import dinasour_3 from '../static/img/works/dinasour_3.png'
import dinasour_4 from '../static/img/works/dinasour_4.png'

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
        
          <div className={dinasourCss.paragraph_1_container}>
            <div className={dinasourCss.paragraph_1_title}>Q dinosaur makes chat room a cozy place</div>
            <div className={dinasourCss.paragraph_1_description_container}>
              <div className={dinasourCss.paragraph_1_description_prop}>「恐恐」は台湾語でちょっと天然バカで愛おしいと思われる人です。</div>
              <div className={dinasourCss.paragraph_1_description_prop}>「できない子ほど可愛い」という言葉のように､「恐恐」は豊かな表情と天然さが溢れるポーズで癒しの存在になり、メッセージのやりとりにスパイスを加える役割を果たします。</div>
            </div>
          </div>

          <img src={dinasour_2} alt="dinasours" className={dinasourCss}></img>
        </div>
        
      </section>
    </PageLayout>
  );
}