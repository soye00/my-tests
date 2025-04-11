import './App.css'
import {Col, Image, Layout, Menu, Row} from "antd";
import Sider from "antd/es/layout/Sider.js";
import {Content, Footer, Header} from "antd/es/layout/layout.js";
import {AppstoreOutlined, MailOutlined, SettingOutlined} from "@ant-design/icons";
import {useState} from "react";



function App() {
  const [currentMenu, setCurrentMenu] = useState("menu1");
  const items = [
      {label:'Menu-1', icon:<MailOutlined />, key:"menu1"},
      {label:'직원관리', icon:<SettingOutlined />, key:"menu2"},
      {label:'할일관리', icon:<AppstoreOutlined />, key:"menu3" },
      {label:'예약관리',
      icon:<SettingOutlined/>,
      children:[
        {
          type:'group',
          label:'item1',
          children:[
            {label:'예약등록', key:'menu4'},{label: '예약삭제', key:'menu5'}
          ]
        },
        {
          type:'group',
          label:'item2',
          children:[
            {label:'예약리스트', key:'menu6'},{label: '예약수정',key:'menu7'}
          ]
        }
      ]}
  ];

  const handleMenu = (e) => {
    console.log(e);
    setCurrentMenu(e.key);
  };

  return (
    <Layout className='w-full h-screen'>
      <Sider style={{ backgroundColor: 'pink' }}>
        <div className={'text-white'}>
          <h1 className='text-center text-3xl py-3'>관리자</h1>
          <Menu onClick={handleMenu} selectedKeys={currentMenu} items={items}></Menu>
        </div>
      </Sider>
      <Layout>
        <Header className='!bg-sky-200 !p-0'>
          <Menu onClick={handleMenu} selectedKeys={currentMenu} items={items} mode='horizontal'></Menu>
        </Header>
        <Content>
          <h1 className='text-3xl'>Content</h1>
          <Row>
            <Col xs={24} lg={4}>
              <h1>제목</h1>
              <p>klsdjflskdjljsdj</p>
            </Col>
            <Col xs={12} lg={4}>
              <h1>제목</h1>
                <p>klsdjflskdjljsdj</p>
            </Col>
            <Col xs={12} lg={4}>
              <h1>제목</h1>
                <p>klsdjflskdjljsdj</p>
            </Col>
          </Row>
          <Image width={300} src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"/>
        </Content>
        <Footer>FOOTER</Footer>
      </Layout>
    </Layout>
  )
}

export default App
