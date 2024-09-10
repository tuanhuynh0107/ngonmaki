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
                                    目指したのは、毎日みんなが食べられるやさしいスープ。<br />
                                    フレンチレストランのオーナーシェフだった創業者が一年半かけて完成させたのは、子供からお年寄りまで、男性から女性まで、誰もが毎日食べたくなる完全オリジナルな味。<br />
                                    あっさりしているのに素材の旨みとコクが凝縮した味をどうぞお召し上がりください。
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
