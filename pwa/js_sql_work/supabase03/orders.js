document.querySelector('#input-button-order').addEventListener('click', async function(){
    const product_name = document.querySelector('#product_name').value;
    const price = document.querySelector('#price').value;

    if(price.length === 0){
        await Swal.fire({
            icon: "error",
            title: "입력실패",
            text: "가격을 입력하세요!",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        document.querySelector('#price').focus();
        return;
    } else if(!Number.isNaN(price)){
        await Swal.fire({
            icon: "error",
            title: "입력실패",
            text: "가격을 숫자로 입력하세요!",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        document.querySelector('#price').focus();
        return;
    }

    const res = await supabase
        .from('orders').insert([
        {product_name,price},
    ]).select();
    console.log(res);
})
const $ordersDiv = document.querySelector('#orders-div');
async function ordersSelect(){
    const res = await supabase.from('orders').select();
    let rows = '';
    for (let i = 0; i < res.data.length; i++) {
        rows = rows + `
                <tr>
                    <td>${res.data[i].id}</td>
                    <td>${res.data[i].user_id}</td>
                    <td>${res.data[i].product_name}</td>
                    <td>${res.data[i].price}</td>
                    <td>${res.data[i].create_at}</td>
                </tr>
            `;
    }
    let orders = `
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
    $ordersDiv.innerHTML = orders;
    $ordersDiv.classList.add('show');
}