
"use client"
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import c from "@/app/Styles/footer.module.css"

import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className={c.footer}>
            <Container id="footer_sns" className={c.listSocial}>
                <Row className="d-flex align-items-center g-5">
                    <Col md={3}>
                        <Link href="https://www.instagram.com/ngonmaki?igsh=MW16dWtzMjE5M3Q5bQ==" target="_blank" rel="noopener noreferrer" className="d-flex flex-column align-items-center">
                            <img className={c.ImageSocial} src="/instagram.svg" width="45" alt="Instagram" />
                            <p className={c.title}>@NGONMAKI_DOUTONBORI</p>
                        </Link>
                    </Col>
                    <Col md={3}>
                        <Link href="https://www.facebook.com/ngonmaki" target="_blank" rel="noopener noreferrer" className="d-flex flex-column align-items-center">
                            <img className={c.ImageSocial} src="/Facebook.svg" width="45" alt="Facebook" />
                            <p className={c.title}>@NGONMAKI_PR</p>
                        </Link>
                    </Col>
                    <Col md={3}>
                        <Link href="#!" target="_blank" rel="noopener noreferrer" className="d-flex flex-column align-items-center">
                            <img className={c.ImageSocial} src="/LinkedIn.svg" width="45" alt="LinkedIn" />
                            <p className={c.title}>@どうとんぼり神座【公式】</p>
                        </Link>
                    </Col>
                    <Col md={3}>
                        <Link href="#!" target="_blank" rel="noopener noreferrer" className="d-flex flex-column align-items-center">
                            <img className={c.ImageSocial} src="/Tiktok.svg" width="45" alt="TikTok" />
                            <p className={c.title}>@NGONMAKI_DOUTONBORI</p>
                        </Link>
                    </Col>

                </Row>

            </Container>

            <Container id="footerContainer" className={`mt-5  align-items-center`}>
                <Row className={`${c.footterContent} justify-content-between align-items-center g-3`}>
                    <Col className="d-flex align-items-center mx-auto" md={6}>
                        <a href="https://kamukura.co.jp/" target="_blank" rel="noopener noreferrer">
                            <img src="logoAmban.png" width="280" alt="NgonMaki logo" />
                        </a>
                    </Col>
                    <Col className="d-flex flex-column " md={6}>
                        <Nav className="flex-rown text-start align-items-center">
                            <Nav.Item>
                                <Nav.Link className={c.title} href="/category/info/">お知らせ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className={c.title} href="/menu/">お品書き</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className={c.title} href="/store/">店舗検索</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className={c.title} href="/about/">神座について</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className={c.title} href="/#ind_Recruit">採用情報</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav className="flex-rown mt-3">
                            <Nav.Item>
                                <Nav.Link className={c.title} href="/company">会社概要</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className={c.title} href="https://rsj.co.jp/contact/" target="_blank">お問い合わせ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className={c.title} href="https://rsj.co.jp/" target="_blank">運営会社</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                </Row>
                <Row className="justify-content-center">
                    <Col className="text-center mt-3">
                        <p className="text-muted">©NGONMAKI</p>
                    </Col>
                </Row>
            </Container>
        </footer >
    );
};

export default Footer;
