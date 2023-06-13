import { Link } from "@inertiajs/react";
import { Col, Row } from "antd";
import "../../css/Header/header.css";
import { MailOutlined } from "@ant-design/icons";

export default function Layout({ children }) {
    return (
        <main>
            <header>
                <Row
                    className="info hotline"
                    justify="center"
                    align="middle"
                    gutter={[0, { md: 24, lg: 32 }]}
                >
                    <Col span={20}>
                        <Row>
                            <Col span={12}>
                                <Row>
                                    <Col
                                        className="infoHeader hasborder"
                                        span={6}
                                    >
                                        Welcome to Iris
                                    </Col>
                                    <Col
                                        className="infoHeader noborder"
                                        span={7}
                                    >
                                        <MailOutlined /> Hotline: 0339991526
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row justify="end">
                                    <Col
                                        className="infoHeader hasborder"
                                        span={3}
                                    >
                                        LOG IN
                                    </Col>
                                    <Col
                                        className="infoHeader hasborder noborder"
                                        span={3}
                                    >
                                        SIGN UP
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </header>
            <article>{children}</article>
        </main>
    );
}
