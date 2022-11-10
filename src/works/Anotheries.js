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
import anotheries_1 from '../static/img/works/anotheries_1.png'
import anotheries_2 from '../static/img/works/anotheries_2.png'
import anotheries_3 from '../static/img/works/anotheries_3.png'

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

                    <div className={anotheriesCss.paragraph_1_container}>
                        <div className={anotheriesCss.paragraph_1_title}>思い出からもう一つの旅へ</div>
                        <div className={anotheriesCss.paragraph_1_description_container}>
                            <div className={anotheriesCss.paragraph_1_description_prop}>AnotheriesはAnotherとmemoriesの意味と合わせた造語です。一つ一つ旅の思い出を集め、「思い出からもう一つの旅へ」をコンセプトに。</div>
                            <div className={anotheriesCss.paragraph_1_description_prop}>写真を通して私たちが旅先で見たもの・感じたことを共有し、共感を持ってもらい、人々と繋ぎたいと思います。</div>
                        </div>
                    </div>


                    <div className={anotheriesCss.paragraph_1_container}>
                        <div className={anotheriesCss.paragraph_1_title}>旅行サイトほど情報満載ではないけど、SNS投稿より伝えたいことがある</div>
                        <div className={anotheriesCss.paragraph_1_description_container}>
                            <div className={anotheriesCss.paragraph_1_description_prop}>綺麗な景色、美味しいご飯、友達との楽しいお時間、旅行に求めるもの、人それぞれ。</div>
                            <div className={anotheriesCss.paragraph_1_description_prop}>大事なのは、気持ちを共有すること。</div>
                            <div className={anotheriesCss.paragraph_1_description_prop}>なので、旅行サイトみたいにアクセスからモデルコースまで詳しく紹介するつもりはないです。でも、自分のSNSのようなただの感想シェアにもなりたくありません。インターネットで載せていない､実際に訪れた人だけ知っていること、試して良かったと思う遊び方など、旅をより一層楽しめるように、私たちの経験談でユーザーにとって有意義の情報も提供したいと思います。</div>
                        </div>
                    </div>

                    <div className={anotheriesCss.middleImg}>
                        <img src={anotheries_1} alt="dinasours" className={anotheriesCss.all_dinasours_prop}></img>
                    </div>


                    <div className={anotheriesCss.paragraph_2_container}>
                        <div className={anotheriesCss.paragraph_2_contents_container}>

                            <div className={anotheriesCss.paragraph_2_each_container}>
                                <div className={anotheriesCss.paragraph_2_text_container}>
                                    <div className={anotheriesCss.paragraph_2_title}>写真を際立たせる余白感</div>
                                    <div className={anotheriesCss.paragraph_2_description}>
                                        写真がメインになるサイトをカラフルで見せる一方、
                                        ごちゃつきにならないように、サイズ感、
                                        余白の調整に気をつけなければなりません。
                                        彩りの写真を際立たせながら、旅の余裕感を感じていただきたいと思い、
                                        背景色は薄くして、余白も多めに取っております。
                                    </div>
                                </div>
                                <div className={anotheriesCss.paragraph_2_img_container}>
                                    <img src={ anotheries_2 } className={anotheriesCss.paragraph_2_img_prop}></img>
                                </div>
                            </div>

                            <div className={anotheriesCss.paragraph_2_each_container}>
                                <div className={anotheriesCss.paragraph_2_text_container}>
                                    <div className={anotheriesCss.paragraph_2_title}>さりげない遊び心</div>
                                    <div className={anotheriesCss.paragraph_2_description}>
                                        旅の楽しさ・ワクワク感を伝わるために、
                                        写真の動きにこだわってデザインする他、
                                        お問い合わせフォームの写真をサイトに未公開のものにして、
                                        ユーザーにプレゼントするのは私たちささやかな遊び心です。
                                    </div>
                                </div>
                                <div className={anotheriesCss.paragraph_2_img_container}>
                                    <img src={ anotheries_3 } className={anotheriesCss.paragraph_2_img_prop}></img>
                                </div>
                            </div>

                        </div>
                    </div>
                    

                </div>

            </section>
        </PageLayout>
    )
}