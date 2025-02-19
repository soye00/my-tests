//콜백 함수

function repeat (n,func){
    for (var i = 0; i<n; i++){
        if(i%2)
        func(i);

    }
}
repeat (5,function (aa){console.log(`test=${aa}`)})

// => var log = function (){console.log('test')};
// => var log = () => {console.log('test');};
// repeat(5,log);

