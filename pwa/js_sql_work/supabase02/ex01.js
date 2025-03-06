import {ordersMInsert, usersMInsert, usersSelectByEmail} from "./db.js";

// usersMInsert();

const userid = await usersSelectByEmail('qqq@qqq.com');
ordersMInsert(userid);

