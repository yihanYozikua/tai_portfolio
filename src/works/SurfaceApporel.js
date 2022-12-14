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
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import banner from '../static/img/works/covers/surface.png'
import surfaceCss from '../css/works_surface.module.scss'
import loadingCss from '../css/loading.module.scss'
import surface_1 from '../static/img/works/surfAce_apparel/surface_01.png'
import surface_2 from '../static/img/works/surfAce_apparel/surface_02.png'
import surface_3 from '../static/img/works/surfAce_apparel/surface_03.png'
import surface_4 from '../static/img/works/surfAce_apparel/surface_04.png'
import surface_7 from '../static/img/works/surfAce_apparel/surface_05.png'
import surface_video_1 from '../static/img/videos/stage.mp4'
import surface_video_2 from '../static/img/videos/main_comp.mp4'
import { images } from '../images.ts'

export default function SurfaceApporel(){
  const FONT_EN = "'Outfit', sans-serif";
  const FONT_JP = "'BIZ UDGothic', sans-serif";
  
  useEffect(()=>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }, []);

    // detect device
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
  return(
    <>
      <Cursor cursorTypes='????' />
      <Loading bg_style={loadingCss.loader_works} loadingTimeControl='1000'/>
      <PageLayout>
        <section id={surfaceCss.works_surface}>
          <Sidebar sidebarTitle="Explore this page" emoji_1="??????" emoji_1_text="Scroll" emoji_2="????" emoji_2_text="View" marginTopSetting="2rem" />
          <div className={surfaceCss.kv_container}>
            <ProjectKvLayout 
              kv_column_direction="column"
              nameEN="SurfAce Apparel"
              type="Runway animation" roles={["Project Management, Design , Animation"]} date="2018.10-2018.12" tool="After Effects, Photoshop" url="https://store.line.me/stickershop/product/14468519" urlTitle="Watch the video"
              bannerImg={banner}
              urlNeed='false'/>

            <div className={surfaceCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={surfaceCss.paragraph_1_title}>????????????????????????????????????????????????????????????????????????</div>
              <div className={surfaceCss.paragraph_1_description_container}>
                <div className={surfaceCss.paragraph_1_description_prop}>??????????????????<span style={{fontFamily: FONT_EN}}>CAMPUS COLLECTION IN TAIWAN 2018</span>?????????????????????????????????????????????<span style={{fontFamily: FONT_EN}}>SurfAce Apparel</span>??????????????????????????????????????????????????????</div>
                <div className={surfaceCss.paragraph_1_description_prop}><span style={{fontFamily: FONT_EN}}>SurfAce Apparel</span>?????????????????????????????????????????????????????????????????????????????????<span style={{fontFamily: FONT_EN}}>Surf</span>?????????????????????<span style={{fontFamily: FONT_EN}}> + Ace</span>???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</div>
              </div>
            </div>


            <div className={surfaceCss.show_project_container}>
              <div className={surfaceCss.show_project_contents_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={surfaceCss.show_project_row}>
                  <img src={surface_1} className={surfaceCss.show_project_img_prop}></img>
                  <img src={surface_2} className={surfaceCss.show_project_img_prop}></img>
                </div>
              </div>
            </div>


            <div className={surfaceCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={surfaceCss.paragraph_1_title}>??????????????????????????????</div>

              <div className={surfaceCss.paragraph_1_description_container}>
                <div className={surfaceCss.paragraph_1_description_prop}>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<span style={{fontFamily: FONT_EN}}>SurfAce Apparel</span>?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</div>
                <div className={surfaceCss.paragraph_1_description_prop}>????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</div>
              </div>
            </div>

            <div className={surfaceCss.show_project_container}>
              <div className={surfaceCss.show_project_contents_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={surfaceCss.show_project_row}>
                  <img src={surface_3} className={surfaceCss.show_project_img_prop}></img>
                  <img src={surface_4} className={surfaceCss.show_project_img_prop}></img>
                </div>
              </div>
            </div>
          
            <div className={surfaceCss.animation_container}>
              <div className={surfaceCss.animation_contents_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={surfaceCss.video_container}>
                  <div className={surfaceCss.title_prop}>Full animation</div>
                  <video controls className={surfaceCss.animation_prop}>
                    <source src={surface_video_2} type="video/mp4"/>
                  </video>
                </div>
                <div className={surfaceCss.video_container}>
                  <div className={surfaceCss.title_prop}>SurfAce Apparel stage</div>
                  <video controls className={surfaceCss.animation_prop}>
                    <source src={surface_video_1} type="video/mp4"/>
                  </video>
                </div>
              </div>
            </div>

            <div className={surfaceCss.present_img_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <img src={surface_7} alt="SurfAce Present by" className={surfaceCss.pieces_prop}></img>
            </div>

            <div className={surfaceCss.present_by_text_container}>
              <div className={surfaceCss.present_by_text_contents_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={surfaceCss.present_by_text_prop}>
                  <span style={{fontFamily: FONT_EN}}>CAMPUS COLLECTION</span>???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<span style={{fontFamily: FONT_EN}}>15</span>??????????????????????????????????????????
                </div>
              </div>
            </div>

            <div className={surfaceCss.postscript_container}>
            <div className={surfaceCss.postscript_contents_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">

              <div className={surfaceCss.postscript_paragraph_container}>
                <div className={surfaceCss.postscript_paragraph_title_prop}>?????????????????????</div>
              </div>
              <div className={surfaceCss.postscript_paragraph_container}>
                <div className={surfaceCss.postscript_paragraph_prop}>
                  <span style={{fontFamily: FONT_EN}}>SurfAce Apparel</span>
                  ?????????????????????????????????????????????????????????
                  <span style={{fontFamily: FONT_EN}}>After Effects</span>
                  ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                </div>
                <br></br>
                <div className={surfaceCss.postscript_paragraph_prop}>???????????????????????????????????????????????????????????????????????????</div>
                <div className={surfaceCss.postscript_paragraph_prop}>???????????????????????????????????????????????????????????????????????????????????????????????????</div>
                <div className={surfaceCss.postscript_paragraph_prop}>???????????????????????????????????????????????????????????????????????????????????????</div>
              </div>
              <br></br>
              <div className={surfaceCss.postscript_paragraph_container}>
                <div className={surfaceCss.postscript_paragraph_prop}>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</div>
                <div className={surfaceCss.postscript_paragraph_prop}>????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</div>
              </div>
            </div>
          </div>

            <WorksBackToAnchor 
                prevUrl="/works/organ_voice"
                nextUrl="/works/nishikage"
                containerWidth={width_worksBackToAnchor}/>
          </div>
          
          
          
        </section>
        <Footer />
      </PageLayout>
    </>
  );
}










