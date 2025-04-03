import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { signUp, supabase } from '../jslib/supa';
import Swal from 'sweetalert2';






function User() {
    const {userId} = useParams();
    console.log(userId);

    useEffect(()=>{
        supabase.auth.getUser();
    },[])

    const sign = async () => {
        const {data,error} = await signUp('','');
        console.log(error);
        Swal.fire({
            title: `${data}`,
            text: "You clicked the button!",
            icon: "success",
            confirmButtonText: "Cool"
          });
    };

  return (
    <>
        <div>User</div>
        <button onClick={sign}>회원가입</button>
    </>    
  )
}

export default User