const test = [{
    "id": "290c8db6-01a0-473c-ad98-012e7e42d78d",
    "name": "Alice",
    "email": "alice@example.com",
    "created_at": "2025-03-05T06:01:57.354087",
    "active": true
}, {
    "id": "06b7e4df-e656-4498-8b1b-da839cd73753",
    "name": "newname",
    "email": "aaa@naver.com",
    "created_at": "2025-03-05T06:08:43.849626",
    "active": true
}, {
    "id": "bc70599d-31c6-460c-b9d8-1d70fc0cdfc1",
    "name": "kim",
    "email": "bob@naver.com",
    "created_at": "2025-03-05T06:06:01.655298",
    "active": true
}, {
    "id": "7374718a-8ce8-4f27-8d4d-6dce5d7a4219",
    "name": "홍길동",
    "email": "hong@example.com",
    "created_at": "2025-03-06T05:34:06.119847",
    "active": true
}, {
    "id": "5803d4ad-c3e6-49f2-95ab-9b8572965da1",
    "name": "김철수",
    "email": "kim@example.com",
    "created_at": "2025-03-06T05:34:06.119847",
    "active": true
}, {
    "id": "71e02125-d7c4-42ce-90d8-c182e6806d4d",
    "name": "이영희",
    "email": "lee@example.com",
    "created_at": "2025-03-06T05:34:06.119847",
    "active": true
}, {
    "id": "f1d9bbab-a0c0-4038-adec-46977a61d10b",
    "name": "qqq",
    "email": "qqq@qqq.com",
    "created_at": "2025-03-06T06:03:27.222383",
    "active": true
}, {
    "id": "792e1397-c6b4-4126-b5a0-144963c411d3",
    "name": "www",
    "email": "www@qqq.com",
    "created_at": "2025-03-06T06:03:27.222383",
    "active": true
}, {
    "id": "bfe19498-d929-4c9f-859d-f1d6b1e6e24f",
    "name": "ooo",
    "email": "ooo@qqq.com",
    "created_at": "2025-03-06T06:03:27.222383",
    "active": true
}]


let rows = '' ;
for(let i =0; i<test.length; i++){
    rows = rows + `<tr>
                      <td>${test[i].id}</td>
                      <td>${test[i].name}</td>
                      <td>${test[i].email}</td>
                      <td>${test[i].created_at}</td>
                      <td>${test[i].active}</td>
                    </tr>`;
}
console.log(rows);

let users = `
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
`;