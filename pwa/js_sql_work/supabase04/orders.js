document.querySelector('#input-button-order').addEventListener('click', async function () {
    const product_name = document.querySelector('#product_name').value;
    const price = document.querySelector('#price').value;

    if (price.length == 0) {
        await Swal.fire({
            icon: "error",
            title: "입력 실패",
            text: "가격을 입력하셔야 합니다.",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
    }
    else if (!(/^[0-9]+(\.[0-9]+)?$/.test(price))) {
        await Swal.fire({
            icon: "error",
            title: "입력 실패",
            text: "가격은 숫자를 입력하셔야 합니다.",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
    }

    const res = await supabase
        .from('orders')
        .insert([
            { product_name, price }
        ]).select();
    console.log(res)
})

const $orderDiv = document.querySelector('#orders-div');
async function ordersSelect() {
    const res = await supabase.from('orders').select();
    let rows = '';
    for (let i = 0; i < res.data.length; i++) {
        rows = rows + `
            <tr onclick="orderRowClick(this)">
                <td>${res.data[i].id}</td>
                <td>${res.data[i].user_id}</td>
                <td>${res.data[i].product_name}</td>
                <td>${res.data[i].price}</td>
                <td>${res.data[i].created_at}</td>
            </tr>
        `;
    }
    let orders = `
    <div>
        <table>
            <tr>
                <th>id</th>
                <th>userid</th>
                <th>상품명</th>
                <th>가격</th>
                <th>주문날짜</th>
            </tr>
            ${rows}
        </table>
    </div>
    `;

    $orderDiv.innerHTML = orders;
    $orderDiv.classList.add('show');
}

function orderRowClick(trTag){
    const $updateOrderId = document.querySelector('#update-order-id');
    const $updateProductName = document.querySelector('#update-product_name');
    const $updatePrice = document.querySelector('#update-price');

    const updateUserId = trTag.children[0].innerText
    const ProductName = trTag.children[1].innerText;
    const Price = trTag.children[2].innerText;

    $updateOrderId.innerHTML = updateUserId;
    $updateProductName.innerHTML = ProductName;
    $updatePrice.innerHTML = Price;

    const $Ordermodal = document.querySelector('#order-modal');
    $Ordermodal.classList.remove('hidden');
}

document.querySelector('#update-button-order').addEventListener('click', async function () {
    const $updateOrderId = document.querySelector('#update-order-id');
    const $updateProductName = document.querySelector('#update-product_name');
    const $updatePrice = document.querySelector('#update-price');

    const res = await supabase.from('orders').update({
        product_name: $updateProductName.value,
        price: $updatePrice.value
    }).eq('id', $updateOrderId.innerHTML)
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