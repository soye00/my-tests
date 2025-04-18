import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {loginUser} from "../../database/userManager.js";
import {Button, Flex, Form, Input, Layout, message} from "antd";
import bcrypt from "bcryptjs";



function UserLoginPage(props) {
    const navigate = useNavigate();
    const  [loading, setLoading] = useState(false);
    const finish = async (values) =>{
        const {email, password} = values;
        setLoading(true);// 로그인 못하게 막기
        // userManger 안에 loginUser 호출
        const ret = await loginUser(email, password);
        if(ret.message === 'email'){
            message.error('이메일을 확인하세요');
        }else{
            const isMatch = await bcrypt.compare(password, ret.data.password);
            if(isMatch){
                message.success('로그인 성공');

                sessionStorage.setItem('name', ret.data.name);
                sessionStorage.setItem('email', ret.data.email);
                sessionStorage.setItem('age', ret.data.age);
                navigate('/');
            }else{
                message.success('패스워드를 확인하세요')
            }
        }
        setLoading(false);
    }

    return (
        <Layout.Content>
            <Flex style={{justifyContent: 'center',alignItems: 'center',height:'100%'}} vertical>
                <h1 style={{fontSize:'2rem', marginBottom:'2rem'}}>로그인</h1>

                <Form  layout="horizontal"
                       onFinish={finish}
                       labelCol={{ span: 6 }}
                       wrapperCol={{ span: 18 }}
                       initialValues={{email: "test@example.com", password:"1234"}}>
                    <Form.Item
                        label="이메일"
                        name="email"
                        rules={[{ required: true, type: 'email', message: '이메일을 입력해주세요' }]}>
                        <Input placeholder={"email"}/>
                    </Form.Item>
                    <Form.Item
                        label="비밀번호"
                        name="password"
                        rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}>
                        <Input.Password placeholder={"password"}/>
                    </Form.Item>
                    <Form.Item style={{justifyContent:'center',display:'flex'}}>
                        <Button type={"primary"} htmlType={"submit"} loading={loading} block>로그인</Button>
                    </Form.Item>
                </Form>
            </Flex>
        </Layout.Content>
    );
}

export default UserLoginPage;