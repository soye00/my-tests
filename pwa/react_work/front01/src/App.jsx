import './App.css'
import axios from "axios";
import {useState} from "react";
import dbusers from "./dbusers.json";



function App() {

  // const [users,setUsers] = useState([{'id': '홍길동', 'password':'1234'}]);
  const [users, setUsers] = useState(dbusers);


  const getUsers = async (e) => {
    const result = await axios.get("https://port-0-back01-manaowvf213a09cd.sel4.cloudtype.app/");
    const {data, status} = result;

    setUsers(data);

    // console.log(data);
    // console.log(data[0]);
    // console.log(status);

  }


  return (
    <>
      <div>
        <h1 className={'text-3xl'}>안녕</h1>
        {/*{JSON.stringify(users[0])}*/}
        {
          users.map((user) =>{
            return <div key={user.id}>
              <div>{user.id}</div>
              <div>{user.password}</div>
            </div>
          })
        }
        <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 cursor-pointer"
            onClick={(e)=>{getUsers(e)}}>불러오기</button>
      </div>




    </>
  )
}

export default App
