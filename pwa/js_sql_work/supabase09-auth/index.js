const supabaseUrl = "https://ucrkaswtcsshsbrvgyqk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjcmthc3d0Y3NzaHNicnZneXFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNzU2MzksImV4cCI6MjA1Nzg1MTYzOX0.TFLZwZibNcNuzF_1TeKsi5tS_1k36Ru4L1zNwy6NBV0";

const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey);

document.getElementById('sign').addEventListener('click', async function (){
    const $email = document.getElementById('email').value;
    const $password = document.getElementById('password').value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const result = emailRegex.test($email);
    if(!result){
      alert('Email address is invalid');
      return;
    }

    this.innerHTML= "회원가입중";

    const res = await supabase.auth.signUp({email: $email,password:$password});
    if(res.error){
        alert('error')
    } else{
        alert('회원가입 완료, 이메일 인증 후 로그인하세요.')
        this.innerHTML= "회원가입";
    }
});

document.getElementById('login').addEventListener('click', async () => {
    const $email = document.getElementById('email').value;
    const $password = document.getElementById('password').value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const result = emailRegex.test($email);
    if(!result){
        alert('Email address is invalid');
        return;
    }

    const res = await supabase.auth.signInWithPassword({email: $email,password:$password});
    if(res.error){
        alert('email password is invalid');
    } else{
        alert('로그인 성공');
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
});
document.getElementById('logout').addEventListener('click', async () => {
    alert('logout');

});

document.getElementById('kakao-login').addEventListener('click', async () => {
    const res = await supabase.auth.signInWithOAuth({
        provider : 'kakao'
    })
    console.log(res);
});




document.addEventListener('DOMContentLoaded',async function (){
    const res = await supabase.auth.getUser();
    console.log(res);

    const $loginStatus = document.getElementById('login-status');
    $loginStatus.innerHTML = `로그인 ${res.data.user.email}`;
});

document.getElementById('logout').addEventListener('click', async () => {
    const res = await supabase.auth.signout();
    const $logoutStatus = document.getElementById('logout-status');
    $logoutStatus.innerHTML = '로그아웃';
});





/*
signUp : 이메일&패스워드 슈퍼베이스로 던짐
SignInWithPassword : 로그인
getUser : 상태값 확인 


 */
