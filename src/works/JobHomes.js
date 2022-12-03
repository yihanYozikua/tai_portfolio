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
import jobHomesCss from '../css/works_job_homes.module.scss'
import banner from '../static/img/works/covers/job_homes.png'

export default function JobHomes() {
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
        <section id={jobHomesCss.works_job_homes}>
          <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" marginTopSetting="2rem" />
          <div className={jobHomesCss.kv_container}>
            <ProjectKvLayout 
              kv_column_direction="column"
              nameJP="にしかげクリニック　アネックス"
              type="Website (Client project with willstyle)" roles={["Design"]} date="2022.10" tool="Adobe XD, Lightroom, Photoshop" 
              url="https://nishikage-anex.jp/" 
              urlTitle="Website"
              bannerImg={banner}
              />

            <div className={jobHomesCss.postscript_container}>
              <div className={jobHomesCss.postscript_contents_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={jobHomesCss.postscript_paragraph_container}>
                  <div className={jobHomesCss.postscript_paragraph_title_prop}>制作の振り返り</div>
                </div>
                <div className={jobHomesCss.postscript_paragraph_container}>
                  <div className={jobHomesCss.postscript_paragraph_prop}>私自身、子供の頃からよく病院のお世話になっている人です。</div>
                  <div className={jobHomesCss.postscript_paragraph_prop}>行く前に口コミ調べたり、サイトを見たり、「ここに行って大丈夫かな」と不安になったり。大した病気ではなくても、体のことだから多少神経質になってしまうところもある。そういうシーンは日本に来てからも多く経験しました。</div>
                  <div className={jobHomesCss.postscript_paragraph_prop}>患者さんにとって、大事な判断材料になる<span style={{fontFamily: FONT_EN}}>Web</span>サイト。</div>
                  <div className={jobHomesCss.postscript_paragraph_prop}>不安することなく、知りたい情報を明確に掲載し、スムーズにたどり着けるように、</div>
                  <div className={jobHomesCss.postscript_paragraph_prop}>行く前に写真でスタッフさんとクリニックの雰囲気を掴めますように、</div>
                  <div className={jobHomesCss.postscript_paragraph_prop}>そういう思いを込めて、このサイトを制作いたしました。</div>
                  <div className={jobHomesCss.postscript_paragraph_prop}>サイト公開後、院長から「分かりやすかった」と満足している声をいただいた時、本当に心の底から嬉しいと思います。<span style={{fontFamily: FONT_EN}}>Web</span>サイトを通して、患者さんは安心してご来院いただけますよう、少しでも力添えできたら幸いです。</div>
                </div>
              </div>

              <div className={jobHomesCss.especially_thanks_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={jobHomesCss.especially_thanks_contents_container}>
                  <div className={jobHomesCss.especially_thanks_title_prop}>Project credits</div>
                  <div className={jobHomesCss.author_details_container}>
                    <div className={jobHomesCss.especially_thanks_description_prop}>Project organizer</div>
                    <div className={jobHomesCss.especially_thanks_description_prop} style={{textDecoration: 'underline'}}>ウィルスタイル株式会社</div>
                    <br></br>
                    <div className={jobHomesCss.especially_thanks_description_prop}>ウィルスタイル株式会社に勤める時のプロジェクトです。</div>
                    <div className={jobHomesCss.especially_thanks_description_prop}>デザイナーとして、トップと下層ページのデザイン、一部の写真撮影を担当させていただきました。</div>
                    <div className={jobHomesCss.especially_thanks_description_prop}>プロジェクトメンバーは下記に掲載しております。</div>
                    <div className={jobHomesCss.especially_thanks_description_prop}>Account Director : Kousuke Sakaguchi</div>
                    <div className={jobHomesCss.especially_thanks_description_prop}>Designer : Tai,tung-en</div>
                    <div className={jobHomesCss.especially_thanks_description_prop}>Engineer : Taku Matsumura / Chiho Rokukawa</div>
                    <div className={jobHomesCss.especially_thanks_description_prop}>Director : Yuki Ikezoe</div>
                  </div>
                  <br></br>
                  <div className={jobHomesCss.author_details_container}>
                    <div className={jobHomesCss.especially_thanks_description_prop}>Project organizer</div>
                    <div className={jobHomesCss.especially_thanks_description_prop} style={{textDecoration: 'underline'}}>株式会社<span style={{fontFamily: FONT_EN}}>KNOT</span>様</div>
                    <br></br>
                    <div className={jobHomesCss.especially_thanks_description_prop}>今回の撮影には株式会社KNOT様（以下、「KNOT様」）にご協力いただきました。</div>
                    <div className={jobHomesCss.especially_thanks_description_prop}>KNOT様は「一生の宝ものになる写真」をコンセプトに、姫路市のフォトスタジオを拠点としご活躍されております。</div>
                    <div className={jobHomesCss.especially_thanks_description_prop}>ウィルスタイル株式会社のパートナー様として撮影をご担当いただきました。</div>
                  </div>
                </div>
              </div>

              <div className={jobHomesCss.shared_gallery_conatiner}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={jobHomesCss.shared_gallery_contents_conatiner}>
                  <div className={jobHomesCss.shared_gallery_title_prop}>Be shared on the gallery site</div>
                  <div className={jobHomesCss.website_details_container}>
                    <a className={jobHomesCss.website_details_description_prop} href="https://webdesignclip.com/nishikage-anex/" target="_blank">Web Design Clip</a>
                  </div>
                </div>
              </div>
            </div>

            <WorksBackToAnchor 
              prevUrl="/works/nishikage"
              nextUrl="/works/motenaSea"
              containerWidth={width_worksBackToAnchor}/>
          </div>
        </section>
      </PageLayout>
    </>
  )
}