import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import PageLayout from './components/PageLayout'
import hashtagCss from './css/hashtags.module.scss'
import { images } from './images.ts'


export default function Hashtags(){
  return(
    <PageLayout>
      Hashtag page
    </PageLayout>
  )
}