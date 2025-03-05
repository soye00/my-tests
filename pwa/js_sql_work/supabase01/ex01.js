// require() => package,jason 에서 type  : common js
// import from => module.js


import {createClient}  from "@supabase/supabase-js";
import {createInterface} from "readline/promises";

const supabaseUrl= 'https://fnlkxffpqrffrlovnmys.supabase.co'
const supabasePassworld = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZubGt4ZmZwcXJmZnJsb3ZubXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjQ5NzYsImV4cCI6MjA1NTAwMDk3Nn0.1Ova5eln8PKRQJaXi9kqUQdTzWzq5cpKRkxd9bykvsw'

const supabase = createClient(supabaseUrl, supabasePassworld)

const res = await supabase.from('users').select();
console.log(res);

// const res = await supabase
//     .from('users')
//     .insert([{name: 'aaa', email: 'aaa@naver.com'}]);
//
// console.log(res);
//
// const {status, statusText} = res;
// console.log(status);
// console.log(statusText);

// const rl = createInterface({
//     input : process.stdin,
//     output : process.stdout
// });
//
// const name = await rl.question('이름 뭐야?');
// console.log(`name ${name}`);
//
// rl.close();
