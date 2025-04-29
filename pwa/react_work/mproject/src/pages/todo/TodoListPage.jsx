import React, {useEffect, useState} from 'react';
import {Button, message, Table, Tag} from "antd";
import {useNavigate} from "react-router-dom";

function TodoListPage(props) {
    const [todos,setTodos] = useState([
        {"id":1,"todo":"Do something nice for someone you care about","completed":false,"userId":152},
        {"id":2,"todo":"Do something bad for someone ","completed":true,"userId":153}
    ]);
    const navigate = useNavigate();

    
    const loadData = async () => {
        fetch('https://6809e0811f1a52874cde2bd6.mockapi.io/todos')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const sortD = data.sort((a, b) => b.id - a.id);
                setTodos(sortD);
            })
    }

    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
            width: 80,
        },
        {
            title: "Todo",
            dataIndex: "todo",
            key: "todo",
        },
        {
            title: "완료",
            key:"completed",
            dataIndex: "completed",
            render: (completed, record) => (
                // <select>
                //     {completed ? (<option>완료</option>) : (<option>미완료</option>)}
                // </select>
                <Tag color={String(completed) === "true" ? "green" : "volcano"}>
                    {String(completed) === "true" ? "완료" : "미완료"}
                </Tag>
            )
        },
        {
            title: "사용자",
            dataIndex: "userId",
            key: "userId",
        },
    ]

    const [selectedRowkeys, setSelectedRowskeys] = useState([])

    const rowSelection = {
        selectedRowKeys : selectedRowkeys,
        onChange: (newselectedRowKeys) => {
            setSelectedRowskeys(newselectedRowKeys);
        }
    }

    return (
        <div>
            <h1>todo list </h1>
            <div style={{display:"flex", gap:"1rem", marginTop:"1rem", marginBottom:"1rem"}}>
                <Button type={"primary"} style={{margin:'1rem 0'}} onClick={loadData}>조회</Button>
                <Button type={"default"} style={{margin:'1rem 0'}} onClick={() => {
                    if(selectedRowkeys.length !== 1) {
                        message.warning('하나만 선택하세요');
                        return;
                    }
                    navigate(`/todo/modify/${selectedRowkeys[0]}`)
                }}>수정</Button>
                <Button type={"default"} style={{margin:'1rem 0'}} onClick={() => {}}>삭제</Button>

            </div>
            

            <Table rowSelection={rowSelection} dataSource={todos} rowKey="id" columns={columns}>
                {
                    todos.map(todo => {
                        return (<h1 key={todo.id}>{todo.todo}</h1>)
                    })
                }
            </Table>
        </div>
    );
}


export default TodoListPage;