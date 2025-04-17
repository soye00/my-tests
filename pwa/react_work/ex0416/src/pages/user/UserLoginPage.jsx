import React, {useRef, useState} from 'react';
import {Button, Flex, Form, Input, Layout} from "antd";

function UserLoginPage(props) {
    const inputRef = useRef(null);
    const [emailValidation, setEmailValidation] = useState(false);

    const login = () =>{
        if(inputRef.current.value === ''){
            // console.log('인풋창 밑ㅌ에 이메일을 입력하세요')
            setEmailValidation(true);
        }else{
            setEmailValidation(false);
        }
    }

    const finish = () =>{
        console.log('finish');
    }

    return (
        <Layout.Content>
            <Flex style={{justifyContent: 'center',alignItems: 'center',height:'100%', flexDirection:"column"}}>
                <h1 style={{fontSize:'2rem', marginBottom:'2rem'}}>로그인</h1>
                {/*<form>*/}
                {/*    <input type="email" name={'email'} placeholder={'email@example.com'} ref={inputRef}/>*/}
                {/*    {*/}
                {/*        emailValidation && <div>이메일을 입력하세요</div>*/}
                {/*    }*/}
                {/*    <button type={"button"} onClick={login}>로그인</button>*/}
                {/*</form>*/}
                <Form  layout="horizontal"
                       onFinish={finish}
                       labelCol={{ span: 6 }}
                       wrapperCol={{ span: 18 }}>
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
                        <Button type={"primary"}>로그인</Button>
                    </Form.Item>
                </Form>
            </Flex>
        </Layout.Content>
    );
}

export default UserLoginPage;