import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import PageLayout from '../components/PageLayout'
import ProjectKvLayout from '../components/ProjectKvLayout'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import anotheriesCss from '../css/works_anotheries.module.scss'
import { images } from '../images.ts'
import banner from '../static/img/works/cover_anotheries.png'

export default function Anotheries() {
    return (
        <PageLayout>
            <section id={anotheriesCss.works_anotheries}>
                <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" />
                <div className={anotheriesCss.kv_container}>
                    <ProjectKvLayout
                        kv_column_direction="column"
                        name="Anotheries"
                        type="Media site (Side project)" roles={["Direction, Writing, Project Management,", "Art Direction, Design, Photography "]} date="2020.10-2020.12" 
                        tool="Adobe illustratior" 
                        url="https://store.line.me/stickershop/product/14468519" urlTitle="Website"
                        bannerImg={banner} />
                </div>

            </section>
        </PageLayout>
    )
}