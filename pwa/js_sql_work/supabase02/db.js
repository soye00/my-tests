import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fnlkxffpqrffrlovnmys.supabase.co";
const supabasePassword = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZubGt4ZmZwcXJmZnJsb3ZubXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjQ5NzYsImV4cCI6MjA1NTAwMDk3Nn0.1Ova5eln8PKRQJaXi9kqUQdTzWzq5cpKRkxd9bykvsw";

const supabase = createClient(supabaseUrl, supabasePassword);

export async function usersMInsert(){
    const res = await supabase.from('users')
        .insert(
        [{name: 'qqq', email : 'qqq@qqq.com'},
                {name: 'www', email : 'www@qqq.com'},
                {name: 'ooo', email : 'ooo@qqq.com'}]
        ).select();
    console.log(res);
}

export async function usersSelectByEmail(email){
    const res = await supabase.from('users')
        .select()
        .eq('email', email);
    console.log(res.data[0].id);
    return res.data[0].id;
}

export async function ordersMInsert(userid){
    const res = await supabase.from('orders')
        .insert([
            {user_id:userid, product_name:'노트북',price:150000},
            {user_id:userid, product_name: '아이패드', price:1000000},
        ])
        .select();
    console.log(res);
}