import React from 'react';
import {Card, Col, Layout, Row} from "antd";
import styles from "./TodoPage.module.css";
import {Outlet} from "react-router-dom";

const {Content} = Layout;


function TodoPage(props) {
    return (
        <>
            <Content className={styles.content}>
                <Card>
                    <h1>hello todo</h1>
                    <Outlet></Outlet>
                </Card>
            </Content>
        </>

    );
}

export default TodoPage;