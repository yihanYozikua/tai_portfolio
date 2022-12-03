import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import PageLayout from '../components/PageLayout'
import Cursor from '../Cursor';
import Footer from '../Footer'
import Loading from '../components/Loading';
import ProjectKvLayout from '../components/ProjectKvLayout'
import WorksBackToAnchor from '../components/WorksBackToAnchor'
import Sidebar from '../components/Sidebar'
import loadingCss from '../css/loading.module.scss'
import nishikageCss from '../css/works_nishikage.module.scss'
import banner from '../static/img/works/covers/nishikage.png'
import nishikage_1 from '../static/img/works/nishikage/nishikage_01.png'

export default function Nishikage() {
  const FONT_EN = "'Outfit', sans-serif";
  const FONT_JP = "'BIZ UDGothic', sans-serif";

  useEffect(()=>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }, []);

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
  const isPad = (width > 768) && (width <= 992);
  let width_worksBackToAnchor = '70%';
  if(isMobile){
    width_worksBackToAnchor = '80%'
  } else if(isPad){
    width_worksBackToAnchor = '75%'
  } else{
    width_worksBackToAnchor = '70%'
  }

  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
      if(user){
      console.log("user log in: " + user.uid);
      }
      else{
      navigate("/login");
      }
  })

  window.addEventListener('load', AOS.refresh);
  return(
    <>
      <Cursor cursorTypes='👀' />
      <Loading bg_style={loadingCss.loader_works} loadingTimeControl='1000'/>
      <PageLayout>
        <section id={nishikageCss.works_nishikage}>
          <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" marginTopSetting="2rem" />
          <div className={nishikageCss.kv_container}>
            <ProjectKvLayout 
              kv_column_direction="column"
              nameJP="にしかげクリニック　アネックス"
              type="Website (Client project with willstyle)" roles={["Design"]} date="2022.10" tool="Adobe XD, Lightroom, Photoshop" 
              url="https://nishikage-anex.jp/" 
              urlTitle="Website"
              bannerImg={banner}
              />

            <div className={nishikageCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={nishikageCss.paragraph_1_title}>地域のかかりつけ医として</div>
              <div className={nishikageCss.paragraph_1_description_container}>
                <div className={nishikageCss.paragraph_1_description_prop}>にしかげ内科クリニックは神戸市垂水区の内科、糖尿病、腎臓病の専門医で、「患者さんに納得していただける医療」をモットーに、地域に根ざした医療に取り組まれています。今回は分院として新しく開院した「にしかげクリニック アネックス」のWebサイトを作成させていただきました。</div>
                <br></br>
                <div className={nishikageCss.paragraph_1_description_prop}>看板に「糖尿病、腎透析」を書かれており、一見専門クリニックと思われますが、実際にヒアリングさせていただいたところ、診療設備の導入や個室の用意など、人工透析に力を入れるのはもちろんですが、もう一つの想いは、地域のかかりつけ医でありたいこと。</div>
                <div className={nishikageCss.paragraph_1_description_prop}>「体に気になるところがあったらまずご相談を。」「電話やネットで予約しなくてもいいからまず来院してもらいたい。」</div>
                <div className={nishikageCss.paragraph_1_description_prop}>理事長がお打ち合わせで何度もおっしゃっていた言葉。地域に貢献したい想いはとても伝わってきました。</div>
              </div>
            </div>

            <div className={nishikageCss.middleImg}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <img src={nishikage_1} alt="dinasours" className={nishikageCss.all_dinasours_prop}></img>
            </div>

            <div className={nishikageCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={nishikageCss.paragraph_1_title}>患者さんに寄り添うデザイン</div>
              <div className={nishikageCss.paragraph_1_description_container}>
                <div className={nishikageCss.paragraph_1_description_prop}>クリニックのWebサイトをデザインする上で大切にしているのは、不安と疑問を感じさせてないこと。</div>
                <div className={nishikageCss.paragraph_1_description_prop}>コンテンツの配置はできるだけ分かりやすくし、全体的に柔らかい雰囲気が伝わるように、写真選びや色使い、サイトのあしらいに工夫しております。</div>
                <br></br>
                <div className={nishikageCss.paragraph_1_description_prop}>まず、今回は新しく開院されたこともあり、スタッフさんとクリニックの雰囲気を掴んでいただけるような写真をキービジュアルで使用することで、安心感、信頼感を演出。そして色は本院のにしかげ内科のテイストを踏まえ、ベースカラーが明るめの水色に。メインターゲットである近隣地域の患者さんはお年寄りの方が多くいらっしゃることで、アイコンを加えたり、フォントサイズも大きめに調整しました。また、より親和性を感じていただくため、ボタンのデザインは錠剤シートから薬を押し出すイメージをしており、ニューモーフィズムのデザインにしております。</div>
              </div>
            </div>


            <div className={nishikageCss.postscript_container}>
              <div className={nishikageCss.postscript_contents_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={nishikageCss.postscript_paragraph_container}>
                  <div className={nishikageCss.postscript_paragraph_title_prop}>制作の振り返り</div>
                </div>
                <div className={nishikageCss.postscript_paragraph_container}>
                  <div className={nishikageCss.postscript_paragraph_prop}><span style={{fontFamily: FONT_EN}}>2020</span>年<span style={{fontFamily: FONT_EN}}>3</span>月、新型コロナウイルスで私の世界が大きく変わりました。当時、私は京都に留学していて、一人で心細くおうち生活を過ごしていました。そんな時に、大学の友人から「聞いてほしい曲がある」と、この曲が送られてきました。</div>
                  <div className={nishikageCss.postscript_paragraph_prop}>「世界はあなたが思うほど悪くない」「ここに悲しみがない」、歌詞に心に刺さる言葉ばかり。より多くの人に聞いてほしいと思い、この曲に合う動画を作って、<span style={{fontFamily: FONT_EN}}>SNS</span>でシェアしようと、友達に提案した。</div>
                  <div className={nishikageCss.postscript_paragraph_prop}>中国語では「新年新希望」（新年に新しい希望が与える）という言葉があり、この曲を聞いてくれる人にこれからの日々に希望と期待を感じてもらいたくて、公開は大晦日に合わせました。</div>
                </div>
                <br></br>
                <div className={nishikageCss.postscript_paragraph_container}>
                  <div className={nishikageCss.postscript_paragraph_prop}><span style={{fontFamily: FONT_EN}}>2</span>年後の今でも私はよくこの曲を聞いています。しかし、動画を見返してみると、一つ反省点がありました。ループ動画とはいえ、<span style={{fontFamily: FONT_EN}}>4</span>分ほどの尺で全く同じ画面が続いて、少し単調だと感じます。「あなたを支える人がずっとそばにいます」のコンセプトに合わせて、時間の流れを感じられる背景や色味の変化を加えたらいいと思います。</div>
                </div>
              </div>


              <div className={nishikageCss.especially_thanks_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={nishikageCss.especially_thanks_contents_container}>
                  <div className={nishikageCss.especially_thanks_title_prop}>Project credits</div>
                  <div className={nishikageCss.author_details_container}>
                    <div className={nishikageCss.especially_thanks_description_prop}>Project organizer</div>
                    <div className={nishikageCss.especially_thanks_description_prop} style={{textDecoration: 'underline'}}>ウィルスタイル株式会社</div>
                    <br></br>
                    <div className={nishikageCss.especially_thanks_description_prop}>ウィルスタイル株式会社に勤める時のプロジェクトです。</div>
                    <div className={nishikageCss.especially_thanks_description_prop}>デザイナーとして、トップと下層ページのデザイン、一部の写真撮影を担当させていただきました。</div>
                    <div className={nishikageCss.especially_thanks_description_prop}>プロジェクトメンバーは下記に掲載しております。</div>
                    <div className={nishikageCss.especially_thanks_description_prop}>Account Director : Kousuke Sakaguchi</div>
                    <div className={nishikageCss.especially_thanks_description_prop}>Designer : Tai,tung-en</div>
                    <div className={nishikageCss.especially_thanks_description_prop}>Engineer : Taku Matsumura / Chiho Rokukawa</div>
                    <div className={nishikageCss.especially_thanks_description_prop}>Director : Yuki Ikezoe</div>
                  </div>
                  <br></br>
                  <div className={nishikageCss.author_details_container}>
                    <div className={nishikageCss.especially_thanks_description_prop}>Project organizer</div>
                    <div className={nishikageCss.especially_thanks_description_prop} style={{textDecoration: 'underline'}}>株式会社<span style={{fontFamily: FONT_EN}}>KNOT</span>様</div>
                    <br></br>
                    <div className={nishikageCss.especially_thanks_description_prop}>今回の撮影には株式会社KNOT様（以下、「KNOT様」）にご協力いただきました。</div>
                    <div className={nishikageCss.especially_thanks_description_prop}>KNOT様は「一生の宝ものになる写真」をコンセプトに、姫路市のフォトスタジオを拠点としご活躍されております。</div>
                    <div className={nishikageCss.especially_thanks_description_prop}>ウィルスタイル株式会社のパートナー様として撮影をご担当いただきました。</div>
                  </div>
                </div>
              </div>
            </div>

            
            <WorksBackToAnchor 
              prevUrl="/works/surface_apparel"
              nextUrl="/works/job_homes"
              containerWidth={width_worksBackToAnchor}/>
          </div>
        </section>
      </PageLayout>
    </>
  )
}