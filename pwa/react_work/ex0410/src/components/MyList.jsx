import React from 'react';
import {Avatar, Divider, List} from "antd";


function MyList(props) {

    const data = [
        {
            title: 'Racing car sprays burning fuel into crowd.',
            description: '나는 일길동'
        },
        {
            title: 'Japanese princess to wed commoner.',
            description: '나는 이길동'
        },
        {
            title: 'Australian walks 100km after outback crash.',
            description: '나는 삼길동'
        },
        {
            title: 'Man charged over missing wedding girl.',
            description: '나는 사길동'
        },
        {
            title: 'Los Angeles battles huge wildfires.',
            description: '나는 오길동'
        },




    ];

    return (
        <div className={`p-5`}>
            <h1 className={`text-4xl underline p-3 bg-sky-200 font-bold text-white`}>MYLIST</h1>
            <Divider>Ant design 실습</Divider>
            <div className={`p-5`}>
                <List header={<><h1 className={`text-3xl p-3`}>리뷰리스트 시작</h1></>}
                      footer={<><h1 className={`text-3xl p-3`}>리뷰리스트 끝</h1></>}
                      bordered
                      dataSource = {data}
                      renderItem={(item,index) => (
                          <List.Item>
                              <List.Item.Meta
                                  avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                                  title={item.title}
                                  description={item.description} />
                          </List.Item>
                      )}
                ></List>

            </div>
        </div>


    );
}

export default MyList;