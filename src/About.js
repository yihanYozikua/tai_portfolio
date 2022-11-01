import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom'

import PageLayout from './components/PageLayout'
import Navbar from './components/Navbar'
import aboutCss from './css/about.module.scss'
import { images } from './images.ts'

const BG_COLOR_1 = "#F6F6F6"
const BG_COLOR_2 = "#DBDEE0"

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return(
    <PageLayout>
      <section id={aboutCss.about}>
        <Navbar />

        <div className={aboutCss.about_kv_container}>
          <div className={aboutCss.about_kv_contents}>
            <span className={aboutCss.about_kv_contents_prop}>All in design</span>
            <span className={aboutCss.about_kv_contents_prop}>All for our beautiful days</span>
          </div>
        </div>

        <div>
          <div>
            <span>見慣れていたあのポスターも、</span>
            <span>無性に開いて閉じ、閉じて開くあのアプリも。</span>
            <span>ビジュアルなもの、そうではないもの、</span>
            <span>私たちの行動や体験、あたりまえに繰り返している日常、</span>
            <span>実は全てがデザインされています。</span>
          </div>
          <div>
            <span>だから私は信じている。</span>
            <span>物事をデザインするのによって私たちの生活をよくすること。</span>
          </div>
          <div>
            <span>だから私は考えている。</span>
            <span>何かブラッシュアップできることがないか。</span>
            <span>何か新しいアイデアを生み出せるではないか。</span>
          </div>
          <div>
            <span>今までも、これからも、もっとよくなる明日のために、</span>
            <span>精度と質の高いデザインを追求し続けます。</span>
          </div>
        </div>

      <div>
        <img src={images[0]} alt="tai_avatar"></img>
      </div>

      </section>
    </PageLayout>
  )

}