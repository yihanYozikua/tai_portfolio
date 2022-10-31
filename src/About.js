import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom'

import PageLayout from './components/PageLayout'
import Navbar from './components/Navbar'

const BG_COLOR_1 = "#F6F6F6"
const BG_COLOR_2 = "#DBDEE0"

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return(
    <PageLayout>
      <section>
        <Navbar />
        TO DO: about page
      </section>
    </PageLayout>
  )

}