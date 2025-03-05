import {createClient}  from "@supabase/supabase-js";

const supabaseUrl= 'https://fnlkxffpqrffrlovnmys.supabase.co'
const supabasePassworld = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZubGt4ZmZwcXJmZnJsb3ZubXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjQ5NzYsImV4cCI6MjA1NTAwMDk3Nn0.1Ova5eln8PKRQJaXi9kqUQdTzWzq5cpKRkxd9bykvsw'

const supabase = createClient(supabaseUrl, supabasePassworld)


export async function user_select(){
    const res = await supabase.from('users').select();
    console.log(res);
}

export async function user_insert(name, email){
    const res = await supabase
        .from('users')
        .insert([{name, email}]);
    console.log(res);
}

export async function user_update(name,email){
    const res = await supabase
        .from('users')
        .update({name})
        .eq('email', email);
    console.log(res);
}
export async function user_delete(email){
    const res = await supabase
        .from('users')
        .delete()
        .eq('email', email);
    console.log(res);
}


