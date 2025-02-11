function solution(num_list) {
    for( i=0; i<parseInt(num_list.length/2);i++){
        var temp = num_list[i];
        num_list[i] = num_list[num_list.length - (i + 1)];
        num_list[num_list.length - (i + 1)] = temp;
    }
    console.log(num_list);
    return num_list;
}
solution([1,2,3,4,5]);