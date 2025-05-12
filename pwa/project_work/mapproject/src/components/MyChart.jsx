import React, {useState} from 'react';
import {Line, Pie} from "@ant-design/plots";
import {Button} from "antd";


function MyChart(props) {
    const [data, setData] = useState([
        {
            data: "2025-05-01",
            value: 10,
        },
        {
            data: "2025-05-02",
            value: 20,
        },
        {
            data: "2025-05-03",
            value: 30,
        },
        {
            data: "2025-05-04",
            value: 40,
        },
        {
            data: "2025-05-05",
            value: 50,
        },
    ]);
    const lineConfig = {
        data,
        xField : "data",
        yField : "value",
        height : 300,
    };

    const changeData = () =>{
        setData([
            {
                data: "2025-05-01",
                value: Math.floor(Math.random() * 100),
            },
            {
                data: "2025-05-02",
                value: Math.floor(Math.random() * 100),
            },
            {
                data: "2025-05-03",
                value: Math.floor(Math.random() * 100),
            },
            {
                data: "2025-05-04",
                value: Math.floor(Math.random() * 100),
            },
            {
                data: "2025-05-05",
                value: Math.floor(Math.random() * 100),
            },
        ])
    };

    const piedata = [
        { category: "A", percent:30 },
        { category: "B", percent:90 },
        { category: "C", percent:10 },
        { category: "D", percent:50 },
    ];

    const pieConfig = {
        data: piedata,
        angleField: "percent",
        colorField: "category",
        height: 300,
    };

    return (
        <div>
            <h1>MyChart</h1>
            <div style={{display:"flex", justifyContent:"space-between"}} >
                <div style={{width:"70%"}}>
                    <Line {...lineConfig}></Line>
                </div>
                <div style={{width:"30%"}}>
                    <Button onClick={changeData}>버튼</Button>
                </div>
                <div>
                    <Pie {...pieConfig}></Pie>
                </div>
            </div>
        </div>
    );
}

export default MyChart;