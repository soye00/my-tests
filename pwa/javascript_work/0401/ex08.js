function getyl(cDate){
    const yl = { 0:'일요일', 1:'월요일', 2:'화요일', 3:'수요일', 4:'목요일', 5:'금요일', 6:'토요일'}
    return yl[cDate.getDay()];
}

const mydate = new Date();

console.log(mydate);


console.log(`${mydate.getFullYear()}년 ${mydate.getMonth()+1}월 ${mydate.getDate()}일 ${getyl(mydate)} ${mydate.getHours()}시 ${mydate.getMinutes()}분 ${mydate.getSeconds()}초`);