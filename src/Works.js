import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import PageLayout from './components/PageLayout'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import worksCss from './css/works.module.scss'
import { images } from './images.ts'

const Projects = ({name, type, roles, img, imgWidth, imgHeight, descriptionContainerHeight, descriptionPositonChoice, url, positionFinTuning}) => {
  var roleRender = roles.map(item => <div className={worksCss.description_contents_prop}>{item}</div>);
  const description_ref = useRef(null);
  const description_anchor = description_ref.current;

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
    const len = document.getElementsByClassName(`${worksCss.project_img_prop}`).length;
    for(let i = 0; i < len; i++){
      document.getElementsByClassName(`${worksCss.project_img_container_prop}`)[i].addEventListener('mouseover', ()=>{
        document.getElementsByClassName(`${worksCss.description_container}`)[i].style.opacity = '1';
        document.getElementsByClassName(`${worksCss.description_container}`)[i].style.transition = 'all .3s ease-in-out';
      })
      document.getElementsByClassName(`${worksCss.project_img_container_prop}`)[i].addEventListener('mouseleave', ()=>{
        document.getElementsByClassName(`${worksCss.description_container}`)[i].style.opacity = '0';
        document.getElementsByClassName(`${worksCss.description_container}`)[i].style.transition = 'all .3s ease-in-out';
      })
    }
  }, []);

  if(isMobile){
    positionFinTuning = 0;
  }

  return(
    <div className={descriptionPositonChoice} style={{marginLeft: positionFinTuning}}>
      <div className={worksCss.project_img_and_name_container}>
        <Link className={worksCss.project_img_container_prop} style={{width: imgWidth, height: imgHeight}} to={url}>
          <img src={img} className={worksCss.project_img_prop} style={{width: imgWidth, height: imgHeight}} alt={name}></img>
          <div className={worksCss.bg_white} style={{width: imgWidth, height: imgHeight}}></div>
        </Link>
        <div className={worksCss.project_name} style={{width: imgWidth}}>{ name }</div>
      </div>
      <div className={worksCss.description_container} style={{height: descriptionContainerHeight}} ref={description_ref}>
        <div className={worksCss.decription_contents_container}>
          <div className={worksCss.description_title_prop}>Type.</div>
          <div className={worksCss.description_contents_container}>
            <div className={worksCss.description_contents_prop}>{ type }</div>
          </div>
        </div>
        <div className={worksCss.decription_contents_container}>
          <div className={worksCss.description_title_prop}>Role.</div>
          <div className={worksCss.description_contents_container}>
            { roleRender }
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Works(){
  useEffect(()=>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }, []);



  return(
    <PageLayout>
      <section id={worksCss.works}>
        <Navbar />
        <Sidebar sidebarTitle="Enjoy this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👋" emoji_2_text="Hover" style={{top: '0'}} />

        <div className={worksCss.works_container}>
          <div className={worksCss.works_contents_container}>
            <Projects name="Anotheries" type="Website (Side project)" 
                      roles={["Direction, Writing, Project Management,", "Design, Photography"]} 
                      img={images[2]} imgWidth="29.27rem" imgHeight="18.29rem" 
                      descriptionContainerHeight="18.29rem" descriptionPositonChoice={`${worksCss.project_container_right}`}
                      url="/works/anotheries"/>

            <Projects name="Q dinosaur" type="Line sticker (Side project)" 
                      roles={["Design (illustration)"]} 
                      img={images[3]} imgWidth="23.41rem" imgHeight="14.63rem" 
                      descriptionContainerHeight="14.63rem" descriptionPositonChoice={`${worksCss.project_container_left}`}
                      url="/works/q_dinasour"/>

            <Projects name="Everything’s Gonna Be Alright" type="Music video" 
                      roles={["Design (illustration), Animation"]} 
                      img={images[4]} imgWidth="29.27rem" imgHeight="18.29rem" 
                      descriptionContainerHeight="18.29rem" descriptionPositonChoice={`${worksCss.project_container_right}`}
                      url="/works/everything_is_gonna_be_alright"
                      positionFinTuning="10rem"/>

            <Projects name="SurfAce Apparel" type="Runway animation" 
                      roles={["Project Management, Animation"]} 
                      img={images[5]} imgWidth="23.41rem" imgHeight="14.63rem" 
                      descriptionContainerHeight="14.63rem" descriptionPositonChoice={`${worksCss.project_container_right}`}
                      url="/works/surface_apparel"/>

            <Projects name="臓器の夜間問診" type="Exhibition (School project)" 
                      roles={["Direction, Project Management,","Design, Photography "]} 
                      img={images[6]} imgWidth="29.27rem" imgHeight="18.29rem" 
                      descriptionContainerHeight="18.29rem" descriptionPositonChoice={`${worksCss.project_container_left}`}
                      url="/works/organ_voice"
                      />

            <Projects name="SLEEP WELL" type="Application design (School project)" 
                      roles={["Direction, Project Management, Design"]} 
                      img={images[7]} imgWidth="29.27rem" imgHeight="18.29rem" 
                      descriptionContainerHeight="unset" descriptionPositonChoice={`${worksCss.project_container_right}`}
                      url="/works/sleep_well"/>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}