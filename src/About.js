import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom'
import AOS from 'aos'

import PageLayout from './components/PageLayout'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import aboutCss from './css/about.module.scss'
import { images } from './images.ts'

const BG_COLOR_1 = "#F6F6F6"
const BG_COLOR_2 = "#DBDEE0"

const Exp = ({year, exp_contents}) => {
  var expRender = exp_contents.map(item => <div>{item}</div>);
  return(
    <div className={aboutCss.about_experience_contents}>
      <div className={aboutCss.about_experience_contents_prop}>{ year }</div>
      <div className={aboutCss.about_experience_contents_prop}>{ expRender }</div>
    </div>
  )
}

export default function About() {
  const kv_ref = useRef(null);
  const kv_ref_1 = useRef(null);
  const kv_ref_2 = useRef(null);
  const paragraph_ref = useRef(null);
  const paragraph_ref_1 = useRef(null);
  const paragraph_ref_2 = useRef(null);
  const paragraph_ref_3 = useRef(null);
  const paragraph_ref_4 = useRef(null);


  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  // if scroll down
  useEffect(() => {
    const kv = kv_ref.current;
    const kv_list = [ kv_ref_1.current, kv_ref_2.current ];
    const paragraph = paragraph_ref.current.getBoundingClientRect().top + window.scrollY;
    const paragraph_list = [ paragraph_ref_1.current, paragraph_ref_2.current, paragraph_ref_3.current, paragraph_ref_4.current ]
    let prev_oldScroll;

    window.onscroll = function(e) {
      prev_oldScroll = this.oldScroll;
      console.log(prev_oldScroll);

      // if scroll for the first time
      if( prev_oldScroll == undefined ){
        console.log('scroll for the first time');
        // paragraph.scrollIntoView(
        //   {
        //     behavior: 'smooth',
        //     block: 'start',
        //   }
        // );
        window.scroll({
          top: paragraph,
          behavior: "smooth"
        })
      }

      else{
        if(this.oldScroll < this.scrollY){ 
          console.log('down');
        }
        else if(this.oldScroll > this.scrollY){
          console.log('up');
        }
      }
      this.oldScroll = this.scrollY;
    }
  }, [])

  return(
    <PageLayout>
      <section id={aboutCss.about}>
        <Navbar />
        <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" />

        <div className={aboutCss.about_kv_container} ref={kv_ref}>
          <div className={aboutCss.about_kv_contents}>
            <span className={aboutCss.about_kv_contents_prop} ref={kv_ref_1}>All in design</span>
            <span className={aboutCss.about_kv_contents_prop} ref={kv_ref_2}>All for our beautiful days</span>
          </div>
        </div>

        <div className={aboutCss.about_paragragh_container} ref={paragraph_ref}>
          <div className={aboutCss.about_paragraph_contents}>
            <div className={aboutCss.about_paragragh_contents_sec} ref={paragraph_ref_1}>
              <span>見慣れていたあのポスターも、</span>
              <span>無性に開いて閉じ、閉じて開くあのアプリも。</span>
              <span>ビジュアルなもの、そうではないもの、</span>
              <span>私たちの行動や体験、あたりまえに繰り返している日常、</span>
              <span>実は全てがデザインされています。</span>
            </div>
            <div className={aboutCss.about_paragragh_contents_sec} ref={paragraph_ref_2}>
              <span>だから私は信じている。</span>
              <span>物事をデザインするのによって私たちの生活をよくすること。</span>
            </div>
            <div className={aboutCss.about_paragragh_contents_sec} ref={paragraph_ref_3}>
              <span>だから私は考えている。</span>
              <span>何かブラッシュアップできることがないか。</span>
              <span>何か新しいアイデアを生み出せるではないか。</span>
            </div>
            <div className={aboutCss.about_paragragh_contents_sec} ref={paragraph_ref_4}>
              <span>今までも、これからも、もっとよくなる明日のために、</span>
              <span>精度と質の高いデザインを追求し続けます。</span>
            </div>
          </div>
          
        </div>

        <div className={aboutCss.about_self_intro_container}>
          <div className={aboutCss.about_self_intro_contents}>
            <img src={images[0]} alt="tai_avatar" className={aboutCss.about_self_intro_img}></img>
            <div className={aboutCss.about_self_intro_right_section_container}>
              <div className={aboutCss.about_self_intro_circle_container}>
                <div className={aboutCss.about_self_intro_circle_prop}>日本語</div>
                <div className={aboutCss.about_self_intro_circle_prop}>ものづくり</div>
              </div>
              <div className={aboutCss.about_self_intro_paragraph_container}>
                <div className={aboutCss.about_self_intro_paragraph_name}>Tai, Tung-En</div>
                <div className={aboutCss.about_self_intro_paragraph_description_container}>
                  <span>1997年台湾生まれ。日本語への熱意で来日。</span>
                  <span>留学を経て、語学力を活かせながら、大好きなものづくりに携わる職に就きたいと思い、Webデザイナーとして制作会社へ入社。</span>
                  <span>全てのデザインに理由があることを信じ、見た目もロジックも納得してもらえるようなデザインに励んでおります。</span>
                  <span>今までは飲食・工務店・クリニック・スポーツジムから化学材料・金属めっきメーカーまで、幅広い分野でWebデザインをしております。デザイン以外、ディレクションとマーケティング、写真撮影も携わっております。</span>
                </div>
              </div>
              <div className={aboutCss.about_underline_div}></div>
              <div className={aboutCss.about_experience_container}>
                <Exp year="2021年" exp_contents={["ウィルスタイル株式会社","Webデザイナー新卒入社"]}/>
                <Exp year="2020年" exp_contents={["台湾国立政治大学卒業","広告学科､デジタルコンテンツ学位取得"]}/>
                <Exp year="2019年" exp_contents={["京都同志社大学留学"]}/>
                <Exp year="2018年" exp_contents={["出版社 ハースト・コーポレーション", "コスモポリタン編集部インターンシップ", <br></br>, "メディア代理店 dentsu X","企画部インターンシップ"]}/>
                <Exp year="2015年" exp_contents={["台湾国立政治大学入学"]}/>
              </div>
            </div>
          </div>
        </div>

        <div className={aboutCss.about_special_contents_container}>
          <div className={aboutCss.about_special_contents_title}>Special content</div>
          <div className={aboutCss.about_special_contents_white_box_sec_container}></div>
        </div>

        <div className={aboutCss.about_view_my_works_button_container}>
          <div className={aboutCss.about_view_my_works_contents}>
            <div className={aboutCss.about_view_my_works_contents_prop}>Hover to</div>
            <div className={aboutCss.about_view_my_works_contents_prop}>View my Works</div>
          </div>
        </div>

      </section>
    </PageLayout>
  )
}