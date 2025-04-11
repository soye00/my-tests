function parseURL(url = ""){
    console.log(`url=${url}`);
    // return url;

    const ma = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
    console.log(ma);
    const [,protocol,host,path] = ma;
    return {protocol,host,path};
}

const result = parseURL("http://www.naver.com/aa");
console.log(result);


