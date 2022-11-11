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
import sleep_1 from '../static/img/works/sleep_1.png'
import sleep_2 from '../static/img/works/sleep_2.png'
import sleep_3 from '../static/img/works/sleep_3.png'
import sleep_4 from '../static/img/works/sleep_4.png'
import sleep_5 from '../static/img/works/sleep_5.png'
import sleep_6 from '../static/img/works/sleep_6.png'
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

          <div className={sleepCss.app_show_container}>
            <div className={sleepCss.show_container}>
              <div className={sleepCss.show_contents_container}>
                <div className={sleepCss.show_img_container}>
                  <img className={sleepCss.show_img_prop} src={sleep_1} alt="sleep_app_1"></img>
                  <img className={sleepCss.show_img_prop} src={sleep_2} alt="sleep_app_2"></img>
                </div>
                <div className={sleepCss.show_description_container}>
                  <div className={sleepCss.show_description_title_prop}>わかりやすいデータ分析</div>
                  <div className={sleepCss.show_description_contents_container}>
                    <div className={sleepCss.show_description_contents_prop}>就寝・睡眠時間、浅い眠りと深い眠りの割合を詳しく記録し、図で表現します。</div>
                    <div className={sleepCss.show_description_contents_prop}>睡眠時間のデータに基づき、睡眠効率を算出し、睡眠の質を可視化します。</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={sleepCss.show_container}>
              <div className={sleepCss.show_contents_container}>
                <div className={sleepCss.show_img_container}>
                  <img className={sleepCss.show_img_prop} src={sleep_3} alt="sleep_app_1"></img>
                  <img className={sleepCss.show_img_prop} src={sleep_4} alt="sleep_app_2"></img>
                </div>
                <div className={sleepCss.show_description_container}>
                  <div className={sleepCss.show_description_title_prop}>スマートアラーム</div>
                  <div className={sleepCss.show_description_contents_container}>
                    <div className={sleepCss.show_description_contents_prop}>音と振動で、睡眠段階を判断し、浅い眠りにアラームを起動させることで、ストレスフリーの起床を実現する。</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={sleepCss.show_container}>
              <div className={sleepCss.show_contents_container}>
                <div className={sleepCss.show_img_container}>
                  <img className={sleepCss.show_img_prop} src={sleep_1} alt="sleep_app_5"></img>
                  <img className={sleepCss.show_img_prop} src={sleep_2} alt="sleep_app_6"></img>
                </div>
                <div className={sleepCss.show_description_container}>
                  <div className={sleepCss.show_description_title_prop}>朝活任務で早寝早起きの生活に</div>
                  <div className={sleepCss.show_description_contents_container}>
                    <div className={sleepCss.show_description_contents_prop}>朝ご飯を作る、ランニングなど、朝活任務を設定し、達成したらポイントが貯まるシステムで、早寝早起きの意欲を高める効果を狙います。</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <iframe className={sleepCss.prototype_container} width="375" height="667" src="https://xd.adobe.com/embed/c82ed3f5-d277-4d05-8ee5-67f4a493fe9e-9d7d/" frameborder="0" allowfullscreen></iframe>

          <div className={sleepCss.postscript_container}>
            <div className={sleepCss.postscript_contents_container}>
              <div className={sleepCss.postscript_paragraph_container}>
                <div className={sleepCss.postscript_paragraph_title_prop}>制作の振り返り</div>
              </div>
              <div className={sleepCss.postscript_paragraph_container}>
                <div className={sleepCss.postscript_paragraph_prop}>「SLEEP WELL」は授業の課題で制作した作品ですが、Case study をはじめ、Functional map、UI flow、Flow chatで情報アーキテクチャを整理し、ワイヤーフレームとモックアップを通してデザインに落とし込み、最後はプロトタイプを使ってターゲットにテストを実施しました。</div>
                <div className={sleepCss.postscript_paragraph_prop}>こうして一連のデザインプロセスをしっかり行い、試行錯誤しながら制作することが私にとってとても貴重な経験であり、サービスデザインの深さと面白さを感じるきっかけになりました。</div>
                <div className={sleepCss.postscript_paragraph_prop}>健康と睡眠に意識を向けるつもりなのに、課題や趣味、つい他のことを優先して、睡眠の質が二の次になってしまいます。私たちが抱えた悩みをもとに、同年代の共通課題を洗い出し、それをテーマにして、「SLEEP WELL」が生まれた。もしいつかアプリが実際に構築されたら、ぜひ手にとってみてもらえば嬉しいです。</div>
              </div>
            </div>
            <div className={sleepCss.especially_thanks_container}>
              <div className={sleepCss.especially_thanks_contents_container}>
                <div className={sleepCss.especially_thanks_title_prop}>Especially thanks</div>
                <div className={sleepCss.especially_thanks_description_prop}>Group member</div>
                <div className={sleepCss.especially_thanks_description_prop}>徐晨星</div>
                <div className={sleepCss.especially_thanks_description_prop}>溫子儀</div>
              </div>
            </div>
          </div>

        </div>

        
        
      </section>
    </PageLayout>
  );
}




