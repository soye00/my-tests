document.querySelector('#input-button-user').addEventListener('click', async function () {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    // console.log(`name = ${name}`);
    // console.log(`email = ${email}`);

    if (email.length == 0) {
        Swal.fire({
            icon: "error",
            title: "입력 실패",
            text: "email이 빈값입니다.",
            // footer: '<a href="#">Why do I have this issue?</a>'
        })
        return;
    }

    const res = await supabase
        .from('users')
        .insert([
            { name, email }
        ])
        .select();
    console.log(res);
    if (res.status === 409) {
        await Swal.fire({
            icon: "error",
            title: "입력 실패",
            text: "user입력에 실패하였습니다. email을 중복입니다.",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        // await Swal.fire({
        //     title: "<strong>HTML <u>새로운예제</u></strong>",
        //     icon: "info",
        //     html: `
        //       Yㅁ니아러ㅜ미나어뤼나어루<b>bold text</b>,
        //       <a href="#" autofocus>links</a>,
        //       and other HTML tags
        //     `,
        //     showCloseButton: true,
        //     showCancelButton: true,
        //     focusConfirm: false,
        //     confirmButtonText: `
        //       <i class="fa fa-thumbs-up"></i> Great!
        //     `,
        //     confirmButtonAriaLabel: "Thumbs up, great!",
        //     cancelButtonText: `
        //       <i class="fa fa-thumbs-down"></i>
        //     `,
        //     cancelButtonAriaLabel: "Thumbs down"
        // });
    }
    else if (res.status === 201) {
        await Swal.fire({
            title: "저장성공",
            icon: "success",
            draggable: true
        });
        usersSelect();
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
            <tr onclick="userRowClick(this)" style="cursor: pointer" >
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
function userRowClick(trTag) {
    const $updateUserId = document.querySelector('#update-user-id');
    const $updateName = document.querySelector('#update-name');
    const $updateEmial = document.querySelector('#update-email');

    const userId = trTag.children[0].innerText;
    const userName = trTag.children[1].innerText;
    const userEmail = trTag.children[2].innerText;

    $updateUserId.innerHTML = userId;
    $updateName.value = userName;
    $updateEmial.value = userEmail;


    // const userId = trTag.children[0].innerHTML;
    // console.log(userId);
    // //innerHTML  html 코드가 적용
    // //innerText  html 코드 적용X -> <img> 문자 그대로 출력
    //
    // const userName = trTag.children[1].innerHTML;
    // console.log(userName);
    //
    // const userEmail = trTag.children[2].innerHTML;
    // console.log(userEmail);

    const $modal = document.querySelector('#modal');
    $modal.classList.remove('hidden');
}

document.querySelector('#update-button-user').addEventListener('click',async function () {
    const $updateUserId = document.querySelector('#update-user-id');
    const $updateName = document.querySelector('#update-name');
    const $updateEmial = document.querySelector('#update-email');

    const res = await supabase.from('users').update({
        name: $updateName.value,
        email: $updateEmial.value,
    }).eq('id', $updateUserId.innerHTML)
        .select();

    if(res.status === 200) {
        const $modal = document.querySelector('#modal');
        $modal.classList.add('hidden');
        await Swal.fire({
            title: "수정성공",
            icon: "success",
            draggable: true
        });
        // await usersSelect();

    }
})

