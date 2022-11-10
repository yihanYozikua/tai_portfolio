import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import PageLayout from '../components/PageLayout'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import surfaceCss from '../css/works_surface.module.scss'
import { images } from '../images.ts'

export default function SurfaceApporel(){
  return(
    <PageLayout>
      <section>
        This is SurfaceApporel page.
      </section>
    </PageLayout>
  );
}