import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";

const API_URL = import.meta.env.VITE_API_NODE_URL;


function App() {
  const hello = "Hello World";
  const [data, setData] = useState()



  const getRoot = async () =>{
    // const result = await axios.get("http://localhost:8080");
    // console.log(result);
    // console.log(result.data);

    const {data,error} = await axios.get(`${API_URL}`);
    // console.log(data);
    // console.log(error);

    setData(data)

  }

    //  푸시 알람 받을
    useEffect(() => {
        console.log("service worker");
        if ("serviceWorker" in navigator && "PushManager" in window) {
            navigator.serviceWorker.ready.then((registration) => {
                console.log("service worker ready");
                registration.pushManager
                    .subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: "BMmKoGrWCQP7pnUGgYREvgZt4wHVChew725lZWgIURqqPk5TS52xx3O22bgtEPOH1tCWGuOzSyI-VTppVG-RbhY",
                    })
                    .then((subscription) => {
                        return fetch(`${API_URL}/subscribe`, {
                            method: "POST",
                            body: JSON.stringify(subscription),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });
                    })
                    .catch((error) => {
                        console.error("푸시 구독 실패:", error);
                    });
            });
        }
    }, []);

  return (
    <>
      <h1>{hello}</h1>
      <p>{data}</p>

      <button onClick={getRoot}>백엔드요청</button>
    </>
  )
}

export default App
