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
import surface_1 from '../static/img/works/surface_1.png'
import surface_2 from '../static/img/works/surface_2.png'
import surface_3 from '../static/img/works/surface_3.png'
import surface_4 from '../static/img/works/surface_4.png'
import surface_5 from '../static/img/works/surface_5.png'
import surface_6 from '../static/img/works/surface_6.png'
import surface_7 from '../static/img/works/surface_7.png'
import { images } from '../images.ts'

export default function SurfaceApporel(){
  return(
    <PageLayout>
      <section id={surfaceCss.works_surface}>
        <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" marginTopSetting="2rem" />
        <div className={surfaceCss.kv_container}>
          <ProjectKvLayout 
            kv_column_direction="column"
            name="SurfAce Apparel"
            type="Runway animation" roles={["Project Management, Design , Animation"]} date="2018.10-2018.12" tool="After Effects, Photoshop" url="https://store.line.me/stickershop/product/14468519" urlTitle="Watch the video"
            bannerImg={banner}/>

          <div className={surfaceCss.paragraph_1_container}>
            <div className={surfaceCss.paragraph_1_title}>サーフィンをはじめ､マリンスポーツのための水着</div>
            <div className={surfaceCss.paragraph_1_description_container}>
              <div className={surfaceCss.paragraph_1_description_prop}>この作品は、CAMPUS COLLECTION IN TAIWAN 2018で登場したスポーツ水着ブランドSurfAce Apparelのために作られたランウェイ動画です。</div>
              <div className={surfaceCss.paragraph_1_description_prop}>SurfAce Apparelは台湾とスイスのハーフの女の子が立ち上げたブランドで、Surf（サーフィン） + Ace（エース）という意味しています。全ての女の子がきれいな水着を着て、自信満々でサーフィンボードに立てるようにという願いを込めて、機能と安全性を重視しつつ、シンプルのシルエットに鮮やかでカラフルな色みと相まって、海で写真映えする水着が作っておられています。</div>
            </div>
          </div>

          <div className={surfaceCss.show_project_container}>
            <div className={surfaceCss.show_project_contents_container}>
              <div className={surfaceCss.show_project_row}>
                <img src={surface_3} className={surfaceCss.show_project_img_prop}></img>
                <img src={surface_4} className={surfaceCss.show_project_img_prop}></img>
              </div>
            </div>
          </div>


          <div className={surfaceCss.paragraph_1_container}>
            <div className={surfaceCss.paragraph_1_title}>夏の風情が漂う動画に</div>
            <div className={surfaceCss.paragraph_1_description_container}>
              <div className={surfaceCss.paragraph_1_description_prop}>動画ではカラフルな水着を引き立てるために､爽やかな白と水色をメインカラーとして使用しました。海、青い空、砂浜の要素を入れることで夏を連想させ、そこでSurfAce Apparelの水着を着用しているモデルさんが登場し、背景の動画合わせたら、まるで夏の海辺が目の前に広がっているようなステージになりました。</div>
              <div className={surfaceCss.paragraph_1_description_prop}>動きにはロゴのデザインに合わせて、手書きのエフェクトと流動性のある波のあしらいを加えました。後半では海で開催される夏の音楽祭をイメージし、オーディオウェブとネオンカラーを使用し、夏ならではの賑やかさを表現しています。</div>
            </div>
          </div>

          <div className={surfaceCss.show_project_container}>
            <div className={surfaceCss.show_project_contents_container} style={{width:'55%'}}>
              <div className={surfaceCss.show_project_row}>
                <img src={surface_1} className={surfaceCss.show_project_img_prop}></img>
                <img src={surface_2} className={surfaceCss.show_project_img_prop}></img>
              </div>
            </div>
          </div>
        
          <div className={surfaceCss.animation_container}>
            <div className={surfaceCss.animation_contents_container}>
              <img src={surface_5} className={surfaceCss.animation_prop}></img>
              <img src={surface_6} className={surfaceCss.animation_prop}></img>
            </div>
          </div>

          <div className={surfaceCss.present_img_container}>
            <img src={surface_7} alt="SurfAce Present by" className={surfaceCss.pieces_prop}></img>
          </div>

          <div className={surfaceCss.present_by_text_container}>
            <div className={surfaceCss.present_by_text_contents_container}>
              <div className={surfaceCss.present_by_text_prop}>
                CAMPUS COLLECTIONは大阪が発祥で、ランウェイ、ダンスと音楽のパフォーマンス、コスメ展示などを含めたファションイベントです。出演者から運営スタッフまで全部学生が携わるのが特徴で、大阪をはじめ、海外合わせて15都市での開催実績があります。
              </div>
            </div>
          </div>

          <div className={surfaceCss.postscript_container}>
          <div className={surfaceCss.postscript_contents_container}>
            <div className={surfaceCss.postscript_paragraph_container}>
              <div className={surfaceCss.postscript_paragraph_title_prop}>制作の振り返り</div>
            </div>
            <div className={surfaceCss.postscript_paragraph_container}>
              <div className={surfaceCss.postscript_paragraph_prop}>2020年3月、新型コロナウイルスで私の世界が大きく変わりました。当時、私は京都に留学していて、一人で心細い気持ちでおうち生活を過ごしました。そんな時に、大学の友人に「聞いてほしい曲があるだけど」と、この曲が送られました。</div>
              <div className={surfaceCss.postscript_paragraph_prop}>「世界はあなたが思うほど悪くない」「あなたは一人じゃない」、どの歌詞も心に刺さる言葉ばかり。この曲に合う愛おしくて、暖かい雰囲気が伝わる動画を作ろうと、友達に提案した。</div>
              <div className={surfaceCss.postscript_paragraph_prop}>中国語では「新年新希望」（新年に新しい希望が与える）という言葉があり、この曲を聞いてくれる人にこれからの日々に希望と期待を感じてもらいたくて公開は新年に合わせました。</div>
            </div>
            <br></br>
            <div className={surfaceCss.postscript_paragraph_container}>
              <div className={surfaceCss.postscript_paragraph_prop}>本当は年が替わっても、生活が大した変わらないと知っていたんげど、</div>
              <div className={surfaceCss.postscript_paragraph_prop}>君がそばにいるから、少しだけでも良くなると信じたい。</div>
              <div className={surfaceCss.postscript_paragraph_prop}>これからの日々は、もっと素敵なのもでありますように。</div>
              <div className={surfaceCss.postscript_paragraph_prop}>Everything’s gonna be alright.</div>
            </div>
          </div>
        </div>
        </div>
        
        
        
      </section>
    </PageLayout>
  );
}



