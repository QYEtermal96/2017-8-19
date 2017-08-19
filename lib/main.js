function main(array){
    var arr = [];
    console.log(array);
    array.forEach((e) =>{
        if(!arr.includes(e)){
            arr.push(e);
        }
    })
    console.log(arr);
    return arr.toString();
}

module.exports = main;
