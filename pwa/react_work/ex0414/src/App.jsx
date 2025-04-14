import React, { useState } from 'react';
import { Layout, Menu, Button, Grid, Row, Col, Card } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
  HeartOutlined,
  FundOutlined
} from '@ant-design/icons';
import {Link, Route, Routes} from "react-router-dom";
import Root from "./pages/Root.jsx";
import Review from "./pages/Review.jsx";
import Todo from "./pages/Todo.jsx";





const { Header, Sider, Content, Footer } = Layout;
const { useBreakpoint } = Grid;

// 메뉴 항목 구성
const items = [
  {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    label:<Link to ={`/`}>Dashboard</Link>,
  },
  {
        key: 'todo',
        icon: <HeartOutlined />,
        label: <Link to ={`/todo`}>TODO</Link>,
  },
  {
        key: 'review',
        icon: <FundOutlined />,
        label: <Link to ={`/review`}>리뷰</Link>,
  },
  {
    key: 'users',
    icon: <UserOutlined />,
    label: '사용자 관리',
    children: [
      { key: 'users-list', label: '사용자 목록' },
      { key: 'users-add', label: '사용자 추가' },
      { key: 'users-delete', label: '사용자 삭제' },
    ],
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
    label: '설정',
  },
];

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const screens = useBreakpoint();

  return (
      <Layout style={{ minHeight: '100vh' }}>
        {/* Sider (사이드 메뉴) */}
        <Sider
            trigger={null}
            collapsed={collapsed}
            breakpoint="md"
            collapsedWidth="0"
            onBreakpoint={(broken) => setCollapsed(broken)}
        >
          <div style={{ height: 32, margin: 16, background: 'rgba(255,255,255,0.2)' }} />
          <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['dashboard']}
              items={items}
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
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{ fontSize: 20 }}
                />
            )}
            <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
              로고 또는 상단 헤더
            </div>
          </Header>

          {/* 본문 콘텐츠 */}
          <Routes>
              <Route path="/" element={<Root/>}></Route>
              <Route path="/todo" element={<Todo/>}></Route>
              <Route path="/review" element={<Review/>}></Route>
          </Routes>


          {/* 하단 푸터 */}
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2025 Created by so
          </Footer>
        </Layout>
      </Layout>
  );
};

export default AppLayout;
