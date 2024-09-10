"use client"
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import c from "@/app/Styles/ListCard.module.css"

const MenuSection = () => {
    const Items = [
        { src: "menu/1.png", alt: "おいしいラーメン", title: "おいしいラーメン", catagories: "Rolls" },
        { src: "menu/2.png", alt: "チャーシューラーメン", title: "チャーシューラーメン", catagories: "Rolls" },
        { src: "menu/3.png", alt: "野菜いっぱいラーメン", title: "野菜いっぱいラーメン", catagories: "Rolls" },
        { src: "menu/4.png", alt: "小チャーシュー煮玉子ラーメン", title: "小チャーシュー煮玉子ラーメン", catagories: "Rolls" },
        { src: "menu/7.png", alt: "ネギキムチラーメン", title: "ネギキムチラーメン", catagories: "Rolls" },
        { src: "menu/5.png", alt: "煮玉子ラーメン", title: "煮玉子ラーメン", catagories: "Rolls" },
        { src: "menu/6.png", alt: "煮玉子ネギラーメン", title: "煮玉子ネギラーメン", catagories: "Rolls" },
        { src: "menu/8.png", alt: "煮玉子もやしラーメン", title: "煮玉子もやしラーメン", catagories: "Noodles" },
        { src: "menu/9.png", alt: "こんにゃくラーメン", title: "こんにゃくラーメン", catagories: "Noodles" },
        { src: "menu/10.png", alt: "おいしいラーメン", title: "おいしいラーメン", catagories: "Noodles" },
        { src: "menu/11.png", alt: "チャーシューラーメン", title: "チャーシューラーメン", catagories: "Noodles" },
        { src: "menu/12.png", alt: "野菜いっぱいラーメン", title: "野菜いっぱいラーメン", catagories: "Noodles" },
        { src: "menu/13.png", alt: "小チャーシュー煮玉子ラーメン", title: "小チャーシュー煮玉子ラーメン", catagories: "Noodles" },
        { src: "menu/14.png", alt: "煮玉子ラーメン", title: "煮玉子ラーメン", catagories: "combo" },
        { src: "menu/15.png", alt: "煮玉子ネギラーメン", title: "煮玉子ネギラーメン", catagories: "combo" },
        { src: "menu/16.png", alt: "ネギキムチラーメン", title: "ネギキムチラーメン", catagories: "combo" },
        { src: "menu/17.png", alt: "煮玉子もやしラーメン", title: "煮玉子もやしラーメン", catagories: "combo" },
        { src: "menu/18.png", alt: "こんにゃくラーメン", title: "こんにゃくラーメン", catagories: "combo" },
        { src: "menu/19.png", alt: "こんにゃくラーメン", title: "こんにゃくラーメン", catagories: "combo" },
        { src: "menu/20.png", alt: "こんにゃくラーメン", title: "こんにゃくラーメン", catagories: "topping" },
        { alt: "瓶ビール", title: "瓶ビール", catagories: "drink" },
        { alt: "生ビール", title: "生ビール", catagories: "drink" },
        { alt: "ハイボール", title: "ハイボール", catagories: "drink" },
        { alt: "レモンチューハイ", title: "レモンチューハイ", catagories: "beer" },
        { alt: "ノンアルコールビール", title: "ノンアルコールビール", catagories: "beer" },
        { alt: "コーラ", title: "コーラ", catagories: "Soft" },
        { alt: "オレンジジュース", title: "オレンジジュース", catagories: "Soft" },
        { alt: "ウーロン茶", title: "ウーロン茶", catagories: "Soft" },
    ];

    const RollsItems = Items.filter(item => item.catagories === "Rolls");
    const NoodlesItems = Items.filter(item => item.catagories === "Noodles");
    const comboItems = Items.filter(item => item.catagories === "combo");
    const toppingItems = Items.filter(item => item.catagories === "topping");
    const drinkItems = Items.filter(item => item.catagories === "drink");
    const beerItems = Items.filter(item => item.catagories === "beer");
    const SoftItems = Items.filter(item => item.catagories === "Soft");

    const columnSize1 = RollsItems.length > 4 ? 4 : 6;
    const columnSize3 = comboItems.length > 4 ? 4 : 6;
    const columnSize5 = NoodlesItems.length > 4 ? 4 : 6;
    return (
        <>
            <Container className={c.Sections_List}>
                <h4 className={c.heading}>Món cuốn</h4>
                <Row className={`${c.container} d-flex justify-content-start mt-5`}>
                    {RollsItems.map((item, index) => (
                        <Col
                            key={index}
                            xs={12}
                            sm={6}
                            md={columnSize1}
                            className={"mb-3"}
                        >
                            <Card className={c.Card}>
                                <Card.Img className={`${c.cardImage} w-50`} variant="top" src={item.src} alt={item.alt} />
                                <Card.Body>
                                    <Card.Title className={c.cardTitle}>{item.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Container className={c.Sections_List}>
                <h4 className={c.heading}>Combo</h4>
                <Row className={`${c.container} d-flex justify-content-center mt-5`}>
                    {comboItems.map((item, index) => (
                        <Col
                            key={index} xs={12} sm={6}
                            md={6}
                            className={` ${c.Card}`}
                        >
                            <Card className={`${c.card}`}>
                                <Card.Img className={`${c.cardImagePho}`} variant="top" src={item.src} alt={item.alt} />
                                <Card.Body>
                                    <Card.Title className={c.cardTitle}>{item.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container className={c.Sections_List}>
                <h4 className={c.heading}>Phở - Bún</h4>
                <Row className={`${c.container} d-flex justify-content-center mt-5`}>
                    {NoodlesItems.map((item, index) => (
                        <Col key={index} xs={12} sm={6} md={4} className={` ${c.Card} mb-2`}>
                            <Card className={c.card}>
                                <Card.Img className={`${c.cardImagePho}`} variant="top" src={item.src} alt={item.alt} />
                                <Card.Body>
                                    <Card.Title className={c.cardTitle}>{item.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Container className={c.Sections_List}>
                <h4 className={c.heading}>Topping</h4>
                <Row className={`${c.container} d-flex justify-content-center mt-5`}>
                    {toppingItems.map((item, index) => (
                        <Col key={index} xs={12} sm={6} md={4} className={` ${c.Card} mb-2`}>
                            <Card className={c.card}>
                                <Card.Img className={`${c.cardImagePho}`} variant="top" src={item.src} alt={item.alt} />
                                <Card.Body>
                                    <Card.Title className={c.cardTitle}>{item.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container>
                <h4 className={c.heading}>DRINK MENU</h4>

                <Row className={`${c.container} d-flex justify-content-start mt-5`}>
                    {drinkItems.map((item, index) => (
                        <Col key={index} xs={12} sm={6} md={4} className={` ${c.Card} mb-2`}>
                            <Card className={`${c.cardDrink} ${c.card}`}>
                                <Card.Body >
                                    <Card.Title className={c.cardTitle}>{item.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row className={`${c.container} d-flex justify-content-start mt-5`}>
                    {beerItems.map((item, index) => (
                        <Col key={index} xs={12} sm={6} md={4} className={` ${c.Card} mb-2`}>
                            <Card className={`${c.cardDrink} ${c.card}`}>
                                <Card.Body >
                                    <Card.Title className={c.cardTitle}>{item.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row className={`${c.container} d-flex justify-content-start mt-5`}>
                    {SoftItems.map((item, index) => (
                        <Col key={index} xs={12} sm={6} md={4} className={` ${c.Card} mb-2`}>
                            <Card className={`${c.cardDrink} ${c.card}`}>
                                <Card.Body >
                                    <Card.Title className={c.cardTitle}>{item.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <p className='text-center mt-5' >※店舗により、一部取り扱いのない商品もございます。</p>
            </Container >
        </>
    );
};

export default MenuSection;
