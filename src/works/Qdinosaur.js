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
import dinasour_5 from '../static/img/works/dinasour_5.png'

export default function Qdinosaur(){
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  const isMobile = width <= 768;

  useEffect(() => {
    if(!isMobile){
      document.getElementById('design_show_to_reverse').style.flexDirection = 'row-reverse';
    }
  }, []);

  const FONT_EN = "'Outfit', sans-serif";
  const FONT_JP = "'BIZ UDGothic', sans-serif";
  return(
    <PageLayout>
      <section id={dinasourCss.works_dinasour}>
        <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" marginTopSetting="2rem" />
        <div className={dinasourCss.kv_container}>
          <ProjectKvLayout 
            kv_column_direction="column-reverse"
            name="Q dinosaur 恐恐龍"
            type="Line sticker (Side project)" roles={["Design (illustration)"]} date="2020.10-2020.12" tool="Adobe illustratior" 
            url="https://store.line.me/stickershop/product/14468519" 
            urlTitle="Sticker page"
            bannerImg={banner}/>
        
          <div className={dinasourCss.paragraph_1_container}>
            <div className={dinasourCss.paragraph_1_title} style={{fontFamily: FONT_EN}}>Q dinosaur makes chat room a cozy place</div>
            <div className={dinasourCss.paragraph_1_description_container}>
              <div className={dinasourCss.paragraph_1_description_prop}>「恐恐」は台湾語でちょっと天然バカで愛おしいと思われる人です。</div>
              <div className={dinasourCss.paragraph_1_description_prop}>「できない子ほど可愛い」という言葉のように､「恐恐」は豊かな表情と天然さが溢れるポーズで癒しの存在になり、メッセージのやりとりにスパイスを加える役割を果たします。</div>
            </div>
          </div>

          <div className={dinasourCss.all_dinasours_container}>
            <img src={dinasour_1} alt="dinasours" className={dinasourCss.all_dinasours_prop}></img>
          </div>

          <div className={dinasourCss.design_intro_container}>
            <div id='design_show_to_reverse' className={dinasourCss.design_intro_contents_container}>
              <div className={dinasourCss.design_intro_description_container}>
                <div className={dinasourCss.design_intro_description_prop}>恐竜で決めた理由は？</div>
                <div className={dinasourCss.design_intro_description_prop}>猫や犬など､可愛いらしい動物のスタンプ既にたくさんあります。</div>
                <div className={dinasourCss.design_intro_description_prop}>印象に残るスタンプを作りたいと思って､あえてマイナーの恐竜を選びました。</div>
              </div>
              <div className={dinasourCss.design_intro_img_container}>
                <div className={dinasourCss.design_intro_img_content_container}>
                  <img src={dinasour_2} className={dinasourCss.design_intro_img_prop}></img>
                </div>
                <div className={dinasourCss.design_intro_img_content_container}>
                  <img src={dinasour_3} className={dinasourCss.design_intro_img_prop}></img>
                </div>
              </div>
              
            </div>
          </div>

          <div className={dinasourCss.design_intro_container}>
            <div className={dinasourCss.design_intro_contents_container}>
              <div className={dinasourCss.design_intro_description_container}>
                <div className={dinasourCss.design_intro_description_prop}>おすすめポイントは？</div>
                <div className={dinasourCss.design_intro_description_prop}>可愛いだけではなく実用性も高いところもポイント。</div>
                <div className={dinasourCss.design_intro_description_prop}>日常会話はもちろん､今ときの流行りを乗りたいや雰囲気を和ませたい時にも使えるスタンプも用意したので､どんな場面でも大活躍できて、長く使えるスタンプになります。</div>
              </div>
              <div className={dinasourCss.design_intro_img_container}>
                <div className={dinasourCss.design_intro_img_content_container}>
                  <img src={dinasour_4} className={dinasourCss.design_intro_img_prop}></img>
                </div>
                <div className={dinasourCss.design_intro_img_content_container}>
                  <img src={dinasour_5} className={dinasourCss.design_intro_img_prop}></img>
                </div>
              </div>
            </div>
          </div>
          
          <div className={dinasourCss.postscript_container}>
            <div className={dinasourCss.postscript_contents_container}>
              <div className={dinasourCss.postscript_paragraph_container}>
                <div className={dinasourCss.postscript_paragraph_title_prop}>制作の振り返り</div>
              </div>
              <div className={dinasourCss.postscript_paragraph_container}>
                <div className={dinasourCss.postscript_paragraph_prop}>実は、留学に行く前の私は普段全然メッセージをしない人でした。</div>
                <div className={dinasourCss.postscript_paragraph_prop}>直接会って話す方が自分の素性と合うと思っていました。しかし、留学の時に家族や友達と直接会えることができないため、コミュニケーションを取るには、ほぼメッセージ一択でした。</div>
                <div className={dinasourCss.postscript_paragraph_prop}>元々口下手の私は、表情が見えない文字のやりとりがとても苦手で、「ちゃんと伝えているのかな」と、メッセージ送る度心配していました。その時、私に助けてくれてのはスタンプでした。表情豊かなスタンプをつけることで、より私の口調や表情が伝わるような気がします。</div>
              </div>
              <br></br>
              <div className={dinasourCss.postscript_paragraph_container}>
                <div className={dinasourCss.postscript_paragraph_prop}>「こういう時、この表情のスタンプを使いたい！」</div>
                <div className={dinasourCss.postscript_paragraph_prop}>「32個スタンプの中にどうしても使わないのが入っている」</div>
                <div className={dinasourCss.postscript_paragraph_prop}>もっと日常的でかつ無駄のないスタンプを作りたくて、自分的に使いやすそうなものをはじめ、</div>
                <div className={dinasourCss.postscript_paragraph_prop}>周りの人にスタンプをつけたい会話やタイミングを聞きまくり、「恐恐」を描きました。</div>
                <div className={dinasourCss.postscript_paragraph_prop}>外国人の友達も使いやすいように、あえて文字をつけずに、表情と身振りだけで気持ちが伝わることも心がけていました。</div>
              </div>
            </div>
            
          </div>
        </div>

      </section>
    </PageLayout>
  );
}