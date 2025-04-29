import React, {useState} from 'react';
import {Button, Card, Form, Input, Layout, Select} from "antd";
import {useNavigate} from "react-router-dom";


const {Content} = Layout;

function TodoAddPage(props) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const onFinish = (values) => {
        setLoading(true);
        fetch('https://6809e0811f1a52874cde2bd6.mockapi.io/todos',{
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json()).then(data => {
            console.log(data);
        })
        setLoading(false);
    }
    return (
        <div>
            <Layout.Content>
                <h1>ADD PAGE</h1>
                <Card hoverable>
                    <Form layout="vertical" onFinish={onFinish} initialValues={{
                        createdAt: "2025-04-25T00:56:48.566Z",
                        todo: " 추가하기 ",
                        completed: "완료",
                        userId: "userId",
                        id: "22"
                    }}>
                        <Form.Item label="Todo" name="todo" rules={[{required:true, message:"할일 입력하세요"}]}>
                            <Input></Input>
                        </Form.Item>

                        <Form.Item label="completed" name="completed" rules={[{required:true, message:"완료여부 선택하세요"}]}>
                            <Select>
                                <Select.Option value="false">미완료</Select.Option>
                                <Select.Option value="false">완료</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="userId" name="userId" rules={[{required:true, message:"사용자ID 입력하세요"}]}>
                            <Input></Input>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={loading} block>저장</Button>
                        </Form.Item>
                    </Form>

                </Card>
            </Layout.Content>

        </div>
    );
}

export default TodoAddPage;