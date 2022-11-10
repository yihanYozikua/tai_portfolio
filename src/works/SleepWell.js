import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import PageLayout from '../components/PageLayout'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import sleepCss from '../css/works_sleep.module.scss'
import { images } from '../images.ts'

export default function SleepWell(){
  return(
    <PageLayout>
      <section>
        This is SleepWell page.
      </section>
    </PageLayout>
  );
}