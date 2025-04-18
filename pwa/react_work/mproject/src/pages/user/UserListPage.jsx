import React, {useEffect, useState} from 'react';
import {Card, Layout, Table} from "antd";
import {getUsers} from "../../database/userManager.js";

const {Content} = Layout



function UserListPage(props) {
    const colums = [
        {title:'Name', dataIndex:'name'},
        {title:'Email', dataIndex:'email'},
        {title:'Age', dataIndex:'age'},
        {title:'Phone', dataIndex:'phone'},
    ];
    // const dataSource = [
    //     {name:'홍길동', email:"aaa@example.com", age:100, phone:'010-1234-4567'},
    //
    // ];

    const[dataSource,setDataSource] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectedRowChange = (newSelectedRowkeys) => {
        console.log('선택된행 키'+newSelectedRowkeys);
        setSelectedRowKeys(newSelectedRowkeys);
    }



    const rowSelection = {
        selectedRowKey:selectedRowKeys,
        onchange:onSelectedRowChange,

    };


    useEffect(()=>{
        async function loadData(){
            const{data} = await getUsers();
            setDataSource(data);
        }
        loadData()
    },[]);


        return (

        <>
            <Content>
                <Card hoverable style={{margin: '1rem'}}>
                    <h1>안녕하세요</h1>
                    <Table
                        columns={colums}
                        dataSource={dataSource}
                        rowKey="id"
                        rowSelection={rowSelection}>
                        scroll={{x:'max-content'}}
                        style={{width:'100%'}}

                    </Table>
                </Card>
            </Content>
        </>
    );
}

export default UserListPage;