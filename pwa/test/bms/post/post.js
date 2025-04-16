async function post() {
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#title').value;
  const file = document.querySelector('#file').files[0];
  if(!title){
    alert('제목을 입력하세요');
    return;
  }
  if(!file){
    savePost(title, content);
  }else {
    const fileUrl = await uploadFile(file);
    await savePost(title, content, fileUrl);
  }
  fetchPosts();
}

async function savePost(title, content, fileUrl = '') {
  const user = sessionStorage.getItem('user');
  console.log(`user = ${user}`);
  if(user == null){
    alert('로그인이 필요합니다');
    location.href = 'login.html';
    return;
  }
  const user_id = JSON.parse(user).id;

  const res = await supabase.from('post').insert([{title, content, user_id, image_url: fileUrl}])
  if(res.status === 201){
    alert('저장 성공');
  }else{
    alert('저장 실패');
  }

}

async function uploadFile(file) {
  const filename = `${crypto.randomUUID()}.${file.name.split('.').pop()}`;
  await supabase.storage.from('ex02').upload(filename, file);
  const res = await supabase.storage.from('ex02').getPublicUrl(filename);
  return res.data.publicUrl;
}

async function fetchPosts() {
  const res = await supabase.from('post').select('*').order('created_at', {ascending: false});
  if(res.error){
    alert('에러발생');
    return;
  }
  const $postList = document.querySelector('#post-list');
  $postList.innerHTML = "";
  res.data.forEach(element => {
    const post = document.createElement('div');
    post.innerHTML = `
    <h3>${element.title}</h3>
    <p>${element.content}</p>
    <img src = '${element.image_url}' width = '250'/>
    <div>
      <button>수정</button>
      <button onclick = 'deletePost("${element.id}")'>삭제</button>
    </div> 
    `;
    $postList.appendChild(post);
  });
}

async function deletePost(id) {
  const res = await supabase.from('post').delete().eq('id', id);
  console.log(res);
  const{error, status} = res;
  if(error){
    alert('삭제실패');
  }else{
    alert('삭제 완료');
    fetchPosts();
  }
}

document.addEventListener('DOMContentLoaded', fetchPosts);