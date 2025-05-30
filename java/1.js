// 1 Remove duplicate value from array

arr=[1,2,5,4,3,9,7,8,6,1,2,3,4,5,6,7,8,9]
function removeDuplicate(arr){
    unique=[];
    for(let i=0; i < arr.length;i++){
        if(unique.indexOf(arr[i])===-1){   
            unique.push(arr[i]);
        }
    }
    return unique;
}
removeDuplicate(arr);
// console.log(removeDuplicate(arr));




function removeArry(arr){
    return [...new Set(arr)];
}
// console.log(removeArry(arr));


// console.log([...new Set(arr)]);




//example promise and async/await in node.js
function fetchData() {
    return new Promise(resolve => setTimeout(() => resolve('Data received'), 1000));
}
  async function getData() {
    const data = await fetchData();
    console.log(data);
    console.log("this is node.js")
}

console.log("this outer node.js")
  getData();
  