import { useState, useRef, useEffect } from "react"
import { Link } from 'react-router-dom'
import { Parallax, useParallax, ParallaxProvider } from 'react-scroll-parallax';

import { images } from './images.ts'
import footerCss from './css/footer.module.scss'
import mailIcon from './static/icons/envelope.svg'
import mediumIcon from './static/icons/medium.svg'
import githubIcon from './static/icons/github.svg'

export default function Footer(){
  
  return(
    <Parallax id={footerCss.footer} translateY={[50, -50]} speed={-10}>
      <div className={footerCss.upper_section_container}>
        <div className={footerCss.upper_left_container}>
          <span className={footerCss.upper_left_contents_prop}>After design</span>
          <span className={footerCss.upper_left_contents_prop}>All will be</span>
          <span className={footerCss.upper_left_contents_prop}>beautiful days</span>
        </div>
        <div className={footerCss.upper_right_container}>
          <div className={footerCss.upper_right_contents_prop}>About</div>
          <div className={footerCss.upper_right_contents_prop}>Special content-#hashtags of me</div>
          <div className={footerCss.upper_right_contents_prop}>Works</div>
          <div className={footerCss.upper_right_contents_prop}>Back to top</div>
        </div>
      </div>

      <div className={footerCss.underline_prop}></div>
      
      <div className={footerCss.bottom_section_container}>
        <div className={footerCss.copyright_prop}>©2022Tai, Tung-En</div>
        <div className={footerCss.bottom_right_container}>
          <div className={footerCss.author_container}>
            <div className={footerCss.responsibility_prop}>Presented by</div>
            <div className={footerCss.author_contents}>
              <span className={footerCss.author_emoji}>🤭</span>
              <span className={footerCss.author_name}>Tai, Tung-En (Direction/Design)</span>
              <img src={mailIcon} alt="" className={footerCss.author_img}></img>
              <img src={mediumIcon} alt="" className={footerCss.author_img}></img>
            </div>
          </div>
          <div className={footerCss.author_container}>
            <div className={footerCss.responsibility_prop}>Especially thanks</div>
            <div className={footerCss.author_contents}>
              <span className={footerCss.author_emoji}>🥸</span>
              <span className={footerCss.author_name}>Hsiao, Yi-Han (Engineering)</span>
              <img src={githubIcon} alt="" className={footerCss.author_img}></img>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  )
}