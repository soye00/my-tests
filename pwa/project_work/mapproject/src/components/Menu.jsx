import React, {useState} from 'react';
import {Button, Drawer} from "antd";
import {useNavigate} from "react-router-dom";

function Menu(props) {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');
    const navigate = useNavigate();

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const onChange = e => {
        setPlacement(e.target.value);
    };


    return (
        <div>
            <div style={{position: "absolute", top:'1rem', left:'1rem', zIndex:100}}>
                <Button type={"primary"} onClick={showDrawer}>menu</Button>
            </div>

            <Drawer
                title="Basic Drawer"
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
            >
                <ul>
                    <li><Button onClick={() => {
                        navigate('/');
                        setOpen(false);
                    }}>root</Button></li>
                    <li><Button onClick={() => {
                        navigate('/user');
                        setOpen(false);
                    }}>user</Button></li>

                </ul>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    );
}

export default Menu;