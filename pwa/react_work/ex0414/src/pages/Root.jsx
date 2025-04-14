import React from 'react';
import {Card, Col, Layout, Row} from "antd";
import styles from './Root.module.css'


const {Content} = Layout;

function Root(props) {
    return (
        <>
            <Content className={styles.content}>
                <Row>
                    <Col className={styles.col}
                         xs={24} sm={12} md={8}>
                        Test
                    </Col>
                    <Col className={styles.col}
                         xs={24} sm={12} md={8}>
                        Test
                    </Col>
                    <Col className={styles.col}
                         xs={24} sm={12} md={8}>
                        Test
                    </Col>
                </Row>
            </Content>
        </>
    );
}

export default Root;