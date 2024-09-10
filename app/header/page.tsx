"use client";
import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import c from "../Styles/Nav.module.css";

import Copyright from '../component/copyrigth/page';

const Header: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <Container fluid>
                <Row className={`${c.headerInner} d-flex justify-content-between align-items-center`}>
                    <Col className="headlogo d-flex justify-content-between align-items-center">
                        <Nav.Link href="#!">
                            <img
                                src="/logoHorizontal.png"
                                width="190"
                                alt="どうとんぼり神座"
                            />
                        </Nav.Link>
                        <div className={`${c.navInner} d-flex align-items-center`}>
                            <a
                                className={`${c.menutrigger} ${isActive ? c.active : ''}`}
                                onClick={handleClick}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                            <p className={c.menutxt}>MENU</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid className={` ${c.nav} d-flex flex-column align-items-center`}
                style={{
                    position: isActive ? 'relative' : 'absolute',
                    visibility: isActive ? 'visible' : 'hidden',
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'scale(1)' : 'scale(0.95)',
                    transition: 'opacity 1s ease, transform 1s ease, visibility 1s 0.4s',
                    height: isActive ? '100vh' : 0, // Ensure the height is set to 0 when inactive
                    overflow: 'hidden',
                }}>

                <Row className={c.menuInner}>
                    <Col md={6}>
                        <ul className={c.menu_Nav}>
                            <li>
                                <Nav.Link href="#!">
                                    <p className={c.menuNavTitle}>NEWS</p>
                                    <p className={c.menuNavSubTitle}>お知らせ</p>
                                </Nav.Link>
                            </li>
                            <li>
                                <Nav.Link href="#!">
                                    <p className={c.menuNavTitle}>MENU</p>
                                    <p className={c.menuNavSubTitle}>お品書き</p>
                                </Nav.Link>
                            </li>
                            <li>
                                <Nav.Link href="#!">
                                    <p className={c.menuNavTitle}>STORE</p>
                                    <p className={c.menuNavSubTitle}>店舗検索</p>
                                </Nav.Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <ul className={c.menu_Nav}>
                            <li>
                                <Nav.Link href="#!">
                                    <p className={c.menuNavTitle}>ABOUT US</p>
                                    <p className={c.menuNavSubTitle}>神座について</p>
                                </Nav.Link>
                            </li>
                            <li>
                                <Nav.Link href="#!">
                                    <p className={c.menuNavTitle}>RECRUIT</p>
                                    <p className={c.menuNavSubTitle}>採用情報</p>
                                </Nav.Link>
                            </li>
                            <li>
                                <Nav.Link href="#!">
                                    <p className={c.menuNavTitle}>COMPANY</p>
                                    <p className={c.menuNavSubTitle}>会社概要</p>
                                </Nav.Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className={c.menuInner}>
                    <Col md={12} className={`${c.menu_right} d-flex justify-content-start align-items-center`}>
                        <ul className={`${c.menu_exlink} d-flex justify-content-start align-items-center`}>
                            <li>
                                <Nav.Link href="#!" target="_blank" rel="noopener noreferrer">
                                    お問い合わせ
                                </Nav.Link>
                            </li>
                            <li>
                                <Nav.Link href="#!" target="_blank" rel="noopener noreferrer">
                                    運営会社
                                </Nav.Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className={`${c.menuInner} ${c.menuSocial}  d-flex justify-content-start align-items-center`}>
                    <Col xs="auto">
                        <Nav.Link href="#">
                            <img src="/Facebook.svg" alt="Facebook" />
                        </Nav.Link>
                    </Col>
                    <Col xs="auto">
                        <Nav.Link href="#">
                            <img src="/X.png" alt="Twitter" />
                        </Nav.Link>
                    </Col>
                    <Col xs="auto">
                        <Nav.Link href="#">
                            <img src="/Instagram.svg" alt="Instagram" />
                        </Nav.Link>
                    </Col>
                    <Col xs="auto">
                        <Nav.Link href="#">
                            <img src="/LinkedIn.svg" alt="LinkedIn" />
                        </Nav.Link>
                    </Col>
                    <Col xs="auto">
                        <Nav.Link href="#">
                            <img src="/Tiktok.svg" alt="Tiktok" />
                        </Nav.Link>
                    </Col>
                </Row>

                <Copyright />
            </Container>
        </>
    );
};

export default Header;
