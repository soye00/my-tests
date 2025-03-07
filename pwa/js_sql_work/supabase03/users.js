
document.querySelector('#input-button-user').addEventListener('click',async function (){
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

    if(email.length === 0){
        await Swal.fire({
            icon: "error",
            title: "입력실패",
            text: "email 빈값입니다!",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        document.querySelector('#email').focus();
        return;
    }

    const res = await supabase
        .from('users')
        .insert([
            {name, email}
        ])
        .select();
    if(res.status === 409){
        Swal.fire({
            icon: "error",
            title: "입력실패",
            text: "email 중복입니다!",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
    } else if(res.status === 201){
        await Swal.fire({
            title: "저장성공!",
            icon: "success",
            draggable: true
        })
        await usersSelect();
    }

})


const $usersDiv = document.querySelector('#users-div');
// $usersDiv.innerHTML = 'asdfasdf';
// $usersDiv.style.backgroundColor = 'rgb(200,100,200)';
// 유저테이블 내용 가져와서 출력하는 함수
async function usersSelect() {
    const res = await supabase.from('users').select()
    let rows = '';
    for (let i = 0; i < res.data.length; i++) {
        rows = rows + `
                <tr>
                    <td>${res.data[i].id}</td>
                    <td>${res.data[i].name}</td>
                    <td>${res.data[i].email}</td>
                    <td>${res.data[i].created_at}</td>
                    <td>${res.data[i].active}</td>
                </tr>
            `;
    }
    let users = `
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>가입날짜</th>
                    <th>활성화</th>
                </tr>
                ${rows}
            </table>
        </div>
        `;
    $usersDiv.innerHTML = users;
    $usersDiv.classList.add('show');
}