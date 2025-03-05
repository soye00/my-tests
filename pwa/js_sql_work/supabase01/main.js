import {user_delete, user_insert, user_select, user_update} from "./db.js";
import {createInterface} from "readline/promises";

const rl = createInterface({
    input : process.stdin,
    output : process.stdout
});

while (true) {
    const result = await rl.question('choose -> 1. select 2. insert 3.update 4. delete \n');

    if(result === '1')
        user_select();
    else if(result === '2'){
        const name = await rl.question('name?');
        const email = await rl.question('email?');
        user_insert(name, email);
    }
    else if(result === '3'){
        const name = await rl.question('새로운 name?');
        const email = await rl.question('바꿀 name의 email?');
        user_update(name, email);
    }
    else if(result === '4'){
        const email = await rl.question('email?');
        user_delete(email);
    }
    else {
        console.log('종료됩니다.')
    break;
    }
}

rl.close();
