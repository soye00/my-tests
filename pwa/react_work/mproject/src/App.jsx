import React, {useEffect, useState} from 'react';
import {Layout, Menu, Button, Grid, Row, Col, Card, Result} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    DashboardOutlined,
    SettingOutlined,
    InfoOutlined,
    FundViewOutlined,
} from '@ant-design/icons';
const {Header, Sider, Content, Footer} = Layout;
const {useBreakpoint} = Grid;
import { useLocation } from 'react-router-dom';
import {Link, Route, Routes} from "react-router-dom";
import RootPage from "./pages/RootPage.jsx";
import TodoPage from "./pages/todo/TodoPage.jsx";
import TodoListPage from "./pages/todo/TodoListPage.jsx";
import TodoAddPage from "./pages/todo/TodoAddPage.jsx";
import TodoModifyPage from "./pages/todo/TodoModifyPage.jsx";

import UserAddPage from "./pages/user/UserAddPage.jsx";
import UserListPage from "./pages/user/UserListPage.jsx";
import UserLoginPage from "./pages/user/UserLoginPage.jsx";
import Logout from "./components/Logout.jsx";

import ReviewPage from "./pages/review/ReviewPage.jsx";
import ReviewAddpage from "./pages/review/ReviewAddpage.jsx";
import ReviewListPage from "./pages/review/ReviewListPage.jsx";

// 메뉴 항목 구성
const items = [
    {
        key: 'dashboard',
        icon: <DashboardOutlined/>,
        label: <Link to={`/`}>대시보드</Link>,
    },
    {
        key: 'todo',
        icon: <InfoOutlined />,
        label: <Link to={`/todo`}>할일</Link>,
        children: [
            {key: '/todo/list', label: <Link to={`/todo/list`}>TodoLIst</Link>},
            {key: '/todo/add', label: <Link to={`/todo/add`}>TodoAdd</Link>},
        ],
    },
    {
        key: 'review',
        icon: <FundViewOutlined />,
        label: 'review',
        children: [
            {key: '/review/list', label:<Link to={`/review/list`}>리뷰리스트</Link>},
            {key: '/review/add', label:<Link to={`/review/add`}>리뷰추가</Link>}
        ]
    },
    {
        key: 'users',
        icon: <UserOutlined/>,
        label: '사용자 관리',
        children: [
            {key: '/user/list', label: <Link to={`/user/list`}>사용자목록</Link>},
            {key: '/user/add', label: <Link to={`/user/add`}>사용자추가</Link>},
        ],
    },
    {
        key: 'settings',
        icon: <SettingOutlined/>,
        label: '설정',
    },
];

const AppLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const screens = useBreakpoint();
    const location = useLocation();
    const selectedKey = location.pathname;
    const [name, setName] = useState('');

    useEffect(() => {
        const sessionName = sessionStorage.getItem('name');
        if(sessionName) {
            console.log('여기오나');
            setName(sessionName);
        }else{
            setName('');
        }
    },[location.pathname]);

    return (
        <Layout style={{minHeight: '100vh'}}>
            {/* Sider (사이드 메뉴) */}
            <Sider
                trigger={null}
                collapsed={collapsed}
                breakpoint="md" // 7680px
                collapsedWidth="0"
                onBreakpoint={(broken) => setCollapsed(broken)}
            >
                <div
                    style={{height: 45, margin: 16, background: 'rgba(255,255,255,0.2)'}}
                    onClick={() => {
                        if(!screens.md){
                            setCollapsed(true);
                        }
                    }}
                >
                    <Link to={`/`}>
                        <h1 style={{
                        color:'white',
                        fontSize:'1.6rem',
                        textAlign:'center',
                        lineHeight:'3rem'
                    }}>관리자
                        </h1>
                    </Link>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['dashboard']}
                    selectedKeys={[selectedKey]}
                    items={items}
                    onClick={() => {

                        // screens.md -> 화면사이즈가 미디엄 이상일때 true 값 출력
                        // sx 사이즈 일때는 false
                        // console.log('누름'+screens.md);
                        if(!screens.md) {
                            setCollapsed(true); // 메뉴 창 닫기
                        }
                    }}
                />
            </Sider>

            <Layout>
                {/* 상단 헤더 */}
                <Header
                    style={{
                        background: '#fff',
                        padding: '0 16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    {!screens.md && (
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{fontSize: 20}}
                        />
                    )}
                    <div style={{fontSize: '1.1rem', fontWeight: 'bold'}}>
                        {/*세션스토리지에 값이 있으면 로그아웃, 없으면 로그인 출력*/}
                        <span style={{marginRight:'1.5rem'}}>{ name && `${name} 님, 안녕하세요 😎`}</span>
                        <Button color={"primary"} variant={"solid"}>
                        {
                            sessionStorage.getItem('name')?
                                (<Logout></Logout>):
                                (<Link to={'/user/login'}>로그인</Link>)
                        }
                        </Button>
                    </div>
                </Header>

                {/* 본문 콘텐츠 */}
                <Routes>
                    <Route path="/" element={<RootPage/>}></Route>
                    <Route path="/review" element={<ReviewPage/>}></Route>
                    <Route path="/user/add" element={<UserAddPage/>}></Route>
                    <Route path="/user/list" element={<UserListPage/>}></Route>
                    <Route path="/user/login" element={<UserLoginPage/>}></Route>
                    <Route path="/todo" element={<TodoPage/>}>
                        <Route path="list" element={<TodoListPage/>}></Route>
                        <Route path="add" element={<TodoAddPage/>}></Route>
                        <Route path="modify/:id" element={<TodoModifyPage/>}></Route>
                    </Route>
                    <Route path="/review" element={<ReviewPage/>}>
                        <Route path="list" element={<ReviewListPage/>}></Route>
                        <Route path="add" element={<ReviewAddpage/>}></Route>
                    </Route>

                </Routes>

                {/* 하단 푸터 */}
                <Footer style={{textAlign: 'center'}}>
                    2025.04.14 made by so
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
