import React, {useEffect, useState} from 'react';
import {Button, Card, Form, Input, Layout, message, Modal, notification, Popconfirm, Table} from "antd";
import {deleteUserByIds, getUsers} from "../../database/userManager.js";

const {Content} = Layout



function UserListPage(props) {

    // useEffect(() => {
    //     deleteUserByIds()
    // },[])
    async function loadData(){
        const{data} = await getUsers();
        setDataSource(data);
    }

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
    const [showModal, setShowModal] = useState(false);
    const [findUser, setFindUser] = useState(false);



    const [form] = Form.useForm();

    const onSelectedRowChange = (newSelectedRowkeys) => {
        console.log('선택된행 키'+newSelectedRowkeys);
        setSelectedRowKeys(newSelectedRowkeys);
    }



    const rowSelection = {
        selectedRowKey:selectedRowKeys,
        onchange:onSelectedRowChange,

    };


    function handleEdit() {
        if(selectedRowKeys.length !== 1){
            message.warning('하나만 선택')
            return;
        }
        const target = dataSource.find(user => user.id === selectedRowKeys[0]);
        setShowModal(target);
        form.setFieldsValue(target);
        setShowModal(true);
    }



    async function handleDelete() {
        const {error} = await deleteUserByIds(selectedRowKeys);
        //에러에 값이 있으면 실패
        if(error){
            message.error(error);
        }else{
            message.success('삭제 완료');
            notification.success({
                message:"삭제하였습니다 "
            })
            setSelectedRowKeys([]);
            await loadData()
        }
    }

    async function handleModalOk() {
        setShowModal(false);
    }
    
    useEffect(()=>{
        loadData()
    },[]);
    

    return (

        <>
            <Content>
                <Card hoverable style={{margin: '1rem'}}>
                    <h1>안녕하세요</h1>
                    <div style={{margin: '1rem 0'}}>
                        <Popconfirm title="삭제하겠습니까?" onConfirm={handleDelete}>
                            <Button danger disabled={selectedRowKeys.length === 0}>삭제</Button>
                        </Popconfirm>
                        <span style={{marginRight:'1rem'}}></span>
                        <Button type={"primary"} onClick={handleEdit}>수정</Button>
                    </div>
                    <Modal open={showModal}
                           title={'사용자수정'}
                           onCancel={() => setShowModal(false)}
                           onOk={handleModalOk}
                    >
                        <Form layout={'vertical'} form={form}>
                            <Form.Item label="이름" name="name" rules={[{required:true}]}>
                                <Input></Input>
                            </Form.Item>
                            <Form.Item label="이메일" name="email" rules={[{required:true}]}>
                                <Input></Input>
                            </Form.Item>
                            <Form.Item label="age" name="age" rules={[{required:true}]}>
                                <Input></Input>
                            </Form.Item>
                            <Form.Item label="연락처" name="phone" rules={[{required:true}]}>
                                <Input></Input>
                            </Form.Item>
                        </Form>
                    </Modal>
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