import React from 'react';
import {Card, Col, Layout, Row} from "antd";
import styles from "./Todo.module.css";
const {Content} = Layout;



function Todo(props) {
    return (
        <div>
            <Content>
                <h1>todo</h1>
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
        </div>
    );
}

export default Todo;