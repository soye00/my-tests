import React from 'react';
import {Outlet} from "react-router-dom";
import {Card, Layout} from "antd";

const{Content} = Layout;

function ReviewPage(props) {
    return (
        <div>
            <Content>
                <Card>
                    <h1>Review</h1>
                    <Outlet></Outlet>
                </Card>
            </Content>

        </div>
    );
}

export default ReviewPage;