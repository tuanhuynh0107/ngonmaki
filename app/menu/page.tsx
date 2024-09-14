"use client";
import React, { useState } from 'react';

import c from '../Styles/Menu.module.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import MenuSection from '../component/SecctionMenu/page';

const Menu: React.FC = () => {

    return (

        <>
            <Container className={c.Section__Menu}>
                <h2 className={`${c.heading}  text-center `} >MENU</h2>

                <section className={c.menuHero}>
                    <Row className={`${c.hero} d-flex align-items-center justify-content-between`}>
                        <Col className="" data-aos="fade-up" xs={12} md={6}>
                            <Image className={c.Imagehero}
                                src="/menu/4.png"
                                width={610}
                                height={400}
                                alt="OISHI RAMEN"
                                style={{ width: '100%', height: 'auto', objectFit: "cover" }}
                            />
                        </Col>
                        <Col className="" data-aos="fade" xs={12} md={6}>
                            <div className={c.heroContent}>
                                <h4 className={c.heroTitle}>
                                    おいしいラーメン
                                </h4>
                                <p className={c.heroDesc}>
                                    当店では、ハノイのブンチャーと蟹の揚げ春巻き（ネムクアベー）が、看板メニューとして多くのお客様に愛されています。オーナー兼シェフはハノイで生まれ育ったため、ハノイ料理の伝統的な本来の味を引き出すことができます。ブンチャーとネムクアベーの組み合わせは、北部ベトナムの有名な料理の一つであり、地元の人々だけでなく、多くの外国人観光客、特に日本人にも愛されています。
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
            <MenuSection />

        </>

    );
};

export default Menu;
