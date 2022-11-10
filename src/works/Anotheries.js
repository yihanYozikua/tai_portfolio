import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import PageLayout from '../components/PageLayout'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import anotheriesCss from '../css/works_anotheries.module.scss'
import { images } from '../images.ts'

export default function Anotheries() {
    return (
        <PageLayout>
            <section>
                This is Anotheries Page.
            </section>
        </PageLayout>
    )
}