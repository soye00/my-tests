const $lookupDiv = document.querySelector('#look-up');
async function look() {
    const res = await supabase.from('post').select()
    let rows = '';
    for (let i = 0; i < res.data.length; i++) {
        rows = rows + `
                <tr>
                    <td>${res.data[i].id}</td>
                    <td>${res.data[i].user_id}</td>
                    <td>${res.data[i].post}</td>
                    <td>${res.data[i].created_at}</td>
                </tr>
            `;
    }
    let lookup = `
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>user_id</th>
                    <th>post</th>
                    <th>create_at</th>
                </tr>
                ${rows}
            </table>
        </div>
        `;
    $lookupDiv.innerHTML = lookup;
    // $usersDiv.classList.add('show');
}