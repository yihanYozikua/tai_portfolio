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
import motenaSeaCss from '../css/motena_sea.module.scss'
import banner from '../static/img/works/covers/motena_sea.png'

export default function MotenaSea() {
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

  return(
    <>
      <Cursor cursorTypes='👀' />
      <Loading bg_style={loadingCss.loader_works} loadingTimeControl='1000'/>
      <PageLayout>
        <section>
          <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" marginTopSetting="2rem" />
          <div className={motenaSeaCss.kv_container}>
            <ProjectKvLayout 
              kv_column_direction="column"
              nameJP="にしかげクリニック　アネックス"
              type="Website (Client project with willstyle)" roles={["Design"]} date="2022.10" tool="Adobe XD, Lightroom, Photoshop" 
              url="https://nishikage-anex.jp/" 
              urlTitle="Website"
              bannerImg={banner}
              />

            <WorksBackToAnchor 
              prevUrl="/works/job_homes"
              nextUrl="/works/anotheries"
              containerWidth={width_worksBackToAnchor}/>
          </div>

        </section>
      </PageLayout>
    </>
  )
}