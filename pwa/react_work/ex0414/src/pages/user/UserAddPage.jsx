import React, {useState} from 'react';
import {Button, Card, Col, Form, Input, Layout, message, notification, Result, Row} from "antd";
import {supabase} from "../../database/SupabaseClient.js";
import bcrypt from 'bcryptjs';
import {useNavigate} from "react-router-dom";
import {FrownOutlined, SmileOutlined} from "@ant-design/icons";




const {Content} = Layout;

function UserAddPage(props) {
    const [noti, contextHolder] = notification.useNotification();
    const [loading, setLoading] = useState(false);
    const onFinish = async (values) => {
        const{name, email, age, phone, password} = values;
        //등록 못하게 막기
        setLoading(true);
        try{

            const hashedPassword = await bcrypt.hash(password, 12);
            const res = await supabase.from('members')
                        .insert([{name,email,age,phone,password:hashedPassword}]);
                                                  // 암호화된 암호 보내기 ↗
            if(res.error) {
                noti.error({
                    message: '실패',
                    description: res.error || '사용자 추가에 실패했습니다.',
                    duration: 3,
                    icon: <FrownOutlined style={{ color: '#ff4d4f' }} />,
                });
            }
            else {
                noti.success({
                    message: '성공',
                    description: '사용자 추가 성공!',
                    duration: 3,
                    icon: <SmileOutlined style={{ color: '#52c41a' }} />,
                });
            }

        }catch(err){
            message.error(err)
            console.log(err);

        }
        //등록할 수 있게 풀기
        setLoading(false);
    }
    return (
        <Content>

            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Card hoverable style={{ padding: '1rem', margin: '1rem' }}>
                        <h1 style={{fontSize:'2rem'}}>사용자추가</h1>
                        <Form layout="vertical" onFinish={onFinish}>
                            {contextHolder}
                            <Form.Item label="이름" name="name" rules={[{ required: true, message: '이름을 입력해주세요' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="이메일" name="email" rules={[{ required: true, type: 'email', message: '올바른 이메일을 입력해주세요' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="나이" name="age" rules={[{ required: true, message: '나이를 입력해주세요' }]}>
                                <Input type="number" />
                            </Form.Item>
                            <Form.Item label="전화번호" name="phone" rules={[{ required: true, message: '전화번호를 입력해주세요' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="비밀번호" name="password" rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}>
                                <Input.Password />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" loading={loading} block>
                                    등록
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Content>
    );
}

export default UserAddPage;