function AA(x){
    this.x = x;
}

AA.prototype.bb = function(){
    console.log('나는 bb 함수야');
}

const aa = new AA(20);
console.log(aa);
console.log(aa.x);


aa.bb();

//변경

AA.prototype = {
    cc(){
        console.log('i am cc');
    }
}

// aa.cc();  // > aa.cc is not a function
aa.bb();

const newaa = new AA(20);

newaa.cc();
// newaa.bb();