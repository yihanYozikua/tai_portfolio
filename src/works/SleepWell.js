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
          
          <div className={sleepCss.paragraph_1_container}>
            <div className={sleepCss.paragraph_1_title}>今日からぐっすり寝よう</div>
            <div className={sleepCss.paragraph_1_description_container}>
              <div className={sleepCss.paragraph_1_description_prop}>SLEEP WELLは名前の通り、より良い睡眠をとるためにお手伝いする睡眠管理アプリです。</div>
              <div className={sleepCss.paragraph_1_description_prop}>現行他社アプリにすでに提供されているアラーム、データ分析、睡眠サポート、カスタマイズ設定以外、朝活任務、睡眠日記、テーマ変更など、実用かる面白みのある機能も加えることで、アプリの使用意欲を高め、より良い睡眠を取れることに繋がります。</div>
            </div>
          </div>


          <div className={sleepCss.reason_container}>
            <div className={sleepCss.reason_contents_container}>

              <div className={sleepCss.reason_contents_each_container}>
                <div className={sleepCss.reason_title_prop}>Why</div>
                <div className={sleepCss.reason_description_container}>
                  <div className={sleepCss.reason_description_prop}>◆睡眠障害により生活習慣病</div>
                  <div className={sleepCss.reason_description_prop}>◆若者の徹夜問題</div>
                  <div className={sleepCss.reason_description_prop}>◆ストレスが睡眠の質に影響を与える</div>
                </div>
              </div>

              <div className={sleepCss.reason_contents_each_container}>
                <div className={sleepCss.reason_title_prop}>What</div>
                <div className={sleepCss.reason_description_container}>
                  <div className={sleepCss.reason_description_prop}>◆現行アプリの機能統合</div>
                  <div className={sleepCss.reason_description_prop}>◆データを通して睡眠の質を可視化</div>
                  <div className={sleepCss.reason_description_prop}>◆早寝早起きへの意識</div>
                </div>
              </div>
              
              <div className={sleepCss.reason_contents_each_container}>
                <div className={sleepCss.reason_title_prop}>Who</div>
                <div className={sleepCss.reason_description_container}>
                  <div className={sleepCss.reason_description_prop}>◆15~25歳学生</div>
                  <div className={sleepCss.reason_description_prop}>◆睡眠問題を抱える</div>
                  <div className={sleepCss.reason_description_prop}>◆健康・体調管理に努める</div>
                </div>
              </div>
            </div>
          </div>



        </div>

        
        
        {/* <iframe width="375" height="667" src="https://xd.adobe.com/embed/c82ed3f5-d277-4d05-8ee5-67f4a493fe9e-9d7d/" frameborder="0" allowfullscreen></iframe> */}
      </section>
    </PageLayout>
  );
}

