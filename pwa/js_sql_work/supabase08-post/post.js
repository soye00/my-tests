async function post() {
    const title = document.getElementById('title').value;
    const content = document.querySelector('#content').value;
    const file = document.querySelector('#file').files[0];

    if(!title){
        alert('제목을 입력하세요')
        return;
    }else if(!content){
        alert('내용을 입력하세요')
        return;
    }
    if(!file){
        savePost(title, content);
    }else {
        const fileUrl = await uploadFile(file);
        savePost(title, content, fileUrl);
    }
    fetchPosts();
}

async function savePost(title, content, fileUrl = ''){
    const user = sessionStorage.getItem('user');
    if(user == null){
        alert('로그인 필요');
        location.href = 'login.html';
        return;
    }

    const user_id = JSON.parse(user).id;

    const res = await supabase.from('post').insert([{title, content, user_id, image_url: fileUrl }]).select();
    if(res.status === 201){
            Swal.fire({
                title: "저장성공!",
                icon: "success",
                confirmButtonText: '확인'
            });
    }else{
        Swal.fire({
            icon: "저장실패",
            title: "Oops...",
            text: "Something went wrong!",
        });
    }
}

async function uploadFile(file){
    const filename = `${crypto.randomUUID()}.${file.name.split('.').pop()}`
    await supabase.storage.from('ex01').upload(filename,file);

    const res = await supabase.storage.from('ex01').getPublicUrl(filename);
    return res.data.publicUrl;
}


async function fetchPosts() {
    const res = await supabase.from('post').select('*').order('created_at',{ascending : false});
    if(res.error){
        alert('에러발생');
        return;
    }
    const $PostList = document.getElementById('post-list');
    $PostList.style.display = 'grid';
    $PostList.style.gridTemplateColumns = '1fr 1fr 1rf';
    // 삭제하고 추가하는
    $PostList.innerHTML = '';

    res.data.forEach(data => {
        const post = document.createElement('div');

        post.innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.content}</p>
                <img src="${data.image_url}" width="250"/>
        `;
        $PostList.appendChild(post);
    })
}
document.addEventListener('DOMContentLoaded',fetchPosts);
