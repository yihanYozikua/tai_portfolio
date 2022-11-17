import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import PageLayout from '../components/PageLayout'
import ProjectKvLayout from '../components/ProjectKvLayout'
import WorksBackToAnchor from '../components/WorksBackToAnchor'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import anotheriesCss from '../css/works_anotheries.module.scss'
import { images } from '../images.ts'
import banner from '../static/img/works/covers/anotheries.png'
import anotheries_1 from '../static/img/works/anotheries/anotheries_01.png'
import anotheries_2 from '../static/img/works/anotheries/anotheries_top.png'
import anotheries_3 from '../static/img/works/anotheries/anotheries_contact_form.png'
import anotheries_photo_1 from '../static/img/works/anotheries/anotheries_02.png'
import anotheries_photo_2 from '../static/img/works/anotheries/anotheries_03.png'
import anotheries_photo_3 from '../static/img/works/anotheries/anotheries_04.png'

export default function Anotheries() {
    const FONT_EN = "'Outfit', sans-serif";
    const FONT_JP = "'BIZ UDGothic', sans-serif";

    window.addEventListener('load', AOS.refresh);
    return (
        <PageLayout>
            <section id={anotheriesCss.works_anotheries}>
                <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" marginTopSetting="2rem"/>
                <div className={anotheriesCss.kv_container}>
                    <ProjectKvLayout
                        kv_column_direction="column"
                        nameEN="Anotheries"
                        type="Media site (Side project)" roles={["Direction, Writing, Project Management,", "Art Direction, Design, Photography "]} date="2020.10-2020.12" 
                        tool="Adobe illustratior" 
                        url="https://store.line.me/stickershop/product/14468519" urlTitle="Website"
                        bannerImg={banner} />

                    <div className={anotheriesCss.paragraph_1_container}
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="100"
                        data-aos-offset="0"
                        data-aos-duration="300"
                        data-aos-once="false">
                        <div className={anotheriesCss.paragraph_1_title}>思い出からもう一つの旅へ</div>
                        <div className={anotheriesCss.paragraph_1_description_container}>
                            <div className={anotheriesCss.paragraph_1_description_prop}>
                                <span style={{fontFamily: FONT_EN}}>Anotheries</span> は <span style={{fontFamily: FONT_EN}}>Another</span> と <span style={{fontFamily: FONT_EN}}>memories</span> の 意味と合わせた造語です。一つ一つ旅の思い出を集め、「思い出からもう一つの旅へ」をコンセプトに。</div>
                            <div className={anotheriesCss.paragraph_1_description_prop}>写真を通して私たちが旅先で見たもの・感じたことを共有し、共感を持ってもらい、人々と繋ぎたいと思います。</div>
                        </div>
                    </div>


                    <div className={anotheriesCss.paragraph_1_container}
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-offset="0"
                        data-aos-duration="300"
                        data-aos-once="false">
                        <div className={anotheriesCss.paragraph_1_title}>
                            旅行サイトほど情報満載ではないけど、
                            <span style={{fontFamily: FONT_EN}}>SNS</span>
                            投稿より伝えたいことがある
                        </div>
                        <div className={anotheriesCss.paragraph_1_description_container}>
                            <div className={anotheriesCss.paragraph_1_description_prop}>綺麗な景色、美味しいご飯、友達との楽しいお時間、旅行に求めるもの、人それぞれ。</div>
                            <div className={anotheriesCss.paragraph_1_description_prop}>大事なのは、気持ちを共有すること。</div>
                            <div className={anotheriesCss.paragraph_1_description_prop}>なので、旅行サイトみたいにアクセスからモデルコースまで詳しく紹介するつもりはないです。でも、自分のSNSのようなただの感想シェアにもなりたくありません。インターネットで載せていない､実際に訪れた人だけ知っていること、試して良かったと思う遊び方など、旅をより一層楽しめるように、私たちの経験談でユーザーにとって有意義の情報も提供したいと思います。</div>
                        </div>
                    </div>

                    <div className={anotheriesCss.middleImg}
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-offset="0"
                        data-aos-duration="300"
                        data-aos-once="false">
                        <img src={anotheries_1} alt="dinasours" className={anotheriesCss.all_dinasours_prop}></img>
                    </div>


                    <div className={anotheriesCss.paragraph_1_container}
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-offset="0"
                        data-aos-duration="300"
                        data-aos-once="false">
                        <div className={anotheriesCss.paragraph_1_title}>目の前に広がる景色がそのまま</div>
                        <div className={anotheriesCss.paragraph_1_description_container}>
                            <div className={anotheriesCss.paragraph_1_description_prop}>サイトに掲載する写真は全て私たち自ら撮影したものになります。リアルさを伝えつつ、ちゃんとした綺麗な写真を撮ることを心掛けして、主体と周りのバランスを意識しながら、ストーリー性のある構図を考えたり、その場で感じた光や空気感をできるたげ残せるようにレタッチの力加減を調整したり、一枚一枚をしっかりこだわってきました。</div>
                        </div>
                    </div>

                    <div className={anotheriesCss.photo_container}
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-offset="0"
                        data-aos-duration="300"
                        data-aos-once="false">
                        <div className={anotheriesCss.photo_contents_container}>
                            <img src={anotheries_photo_1} className={anotheriesCss.photo_prop}></img>
                            <img src={anotheries_photo_2} className={anotheriesCss.photo_prop}></img>
                            <img src={anotheries_photo_3} className={anotheriesCss.photo_prop}></img>
                        </div>
                    </div>


                    <div className={anotheriesCss.paragraph_2_container}>
                        <div className={anotheriesCss.paragraph_2_contents_container}>

                            <div className={anotheriesCss.paragraph_2_each_container}
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-offset="0"
                                data-aos-duration="300"
                                data-aos-once="false">
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

                            <div className={anotheriesCss.paragraph_2_each_container}
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-offset="0"
                                data-aos-duration="300"
                                data-aos-once="false">
                                <div className={anotheriesCss.paragraph_2_text_container}>
                                    <div className={anotheriesCss.paragraph_2_title}>さりげない遊び心</div>
                                    <div className={anotheriesCss.paragraph_2_description} style={{marginBottom: '2.5rem'}}>
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
                    
                    <div className={anotheriesCss.postscript_container}
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-offset="0"
                        data-aos-duration="300"
                        data-aos-once="false">
                        <div className={anotheriesCss.postscript_contents_container}>
                            <div className={anotheriesCss.postscript_paragraph_container}>
                                <div className={anotheriesCss.postscript_paragraph_title_prop}>制作の振り返り</div>
                            </div>
                            <div className={anotheriesCss.postscript_paragraph_container}>
                                <div className={anotheriesCss.postscript_paragraph_prop}>どこに行っても、カメラを持っている私たちがいる。</div>
                                <div className={anotheriesCss.postscript_paragraph_prop}>せっかくたくさん調べて行ってきた旅だから、せっかくたくさんの写真を撮っていた旅だから。</div>
                                <div className={anotheriesCss.postscript_paragraph_prop}>
                                    なんか面白いことができないかなと。思わず手を動かしてみたら、今の <span style={{fontFamily: FONT_EN}}>Anotheries</span> が生まれた。
                                </div>
                                <div className={anotheriesCss.postscript_paragraph_prop}>ここで紹介したのは、人々が憧れる絶景ではない、でも、心を揺さぶる景色。</div>
                                <div className={anotheriesCss.postscript_paragraph_prop}>私たちの旅先との出会い、かけがえのない思い出はあなたの素敵な旅のきっかけになりますように。</div>
                            </div>
                        </div>
                    <div className={anotheriesCss.especially_thanks_container}
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-offset="0"
                        data-aos-duration="300"
                        data-aos-once="false">
                        <div className={anotheriesCss.especially_thanks_contents_container}>
                            <div className={anotheriesCss.especially_thanks_title_prop}>Especially thanks</div>
                            <div className={anotheriesCss.especially_thanks_description_prop}>Engineering</div>
                            <div className={anotheriesCss.especially_thanks_description_prop}>Hsiao, Yi-Han</div>
                        </div>
                    </div>
                    </div>

                    <WorksBackToAnchor 
                        prevUrl="/works/surface_apparel"
                        nextUrl="/works/q_dinasour"/>
                </div>
            </section>
        </PageLayout>
    )
}






