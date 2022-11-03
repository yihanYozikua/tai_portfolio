import { useState, useRef, useEffect } from "react"
import { Link } from 'react-router-dom'

import { images } from './images.ts'
import footerCss from './css/footer.module.scss'
import mailIcon from './static/icons/envelope.svg'
import mediumIcon from './static/icons/medium.svg'
import githubIcon from './static/icons/github.svg'

export default function Footer(){
  return(
    <section id={footerCss.footer}>
      <div>
        <div>
          <div>After design</div>
          <div>All will be</div>
          <div>beautiful days</div>
        </div>
        <div>
          <div>About</div>
          <div>Special content-#hashtags of me</div>
          <div>Works</div>
          <div>Back to top</div>
        </div>
      </div>
      <div>underline here</div>
      <div>
        <div>©2022Tai, Tung-En</div>
        <div>
          <div>
            <div>Presented by</div>
            <div>
              <span>🤭</span>
              <span>Tai, Tung-En (Direction/Design)</span>
              <img src={mailIcon} alt=""></img>
              <img src={mediumIcon} alt=""></img>
            </div>
          </div>
          <div>
          <div>Especially thanks</div>
            <div>
              <span>🥸</span>
              <span>Hsiao, Yi-Han (Engineering)</span>
              <img src={githubIcon} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}