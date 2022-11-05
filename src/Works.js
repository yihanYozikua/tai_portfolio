import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import PageLayout from './components/PageLayout'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import worksCss from './css/works.module.scss'
import { images } from './images.ts'

export default function Works(){

  return(
    <PageLayout>
      <section id={worksCss.works}>
        <Navbar />

        {/* <div className={worksCss.works_container}> </div> */}
      </section>
    </PageLayout>
  )
}