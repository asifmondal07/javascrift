let arr1=[1,2,3,4,5,6,7,8];     //get common data in one array
let arr2=[1,2,3,4,5,10,8,,9,10,11]


function getCommonArry(arr1,arr2){
    let commonArray=[];
    for(let i=0; i<arr1.length;i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i]==arr2[j]){
                if(!commonArray.includes(arr1[i])){
                    commonArray.push(arr1[i])
                }
                
            }
        }
    }
    return commonArray
}
// console.log(getCommonArry(arr1,arr2));



function flatternArry(arr1,arr2){
    let set=new Set(arr1);
    return arr2.filter(value=>set.has(value));
}

console.log(flatternArry(arr1,arr2))


arr=[1,2,[3,[4,5,[7,8,[9]]]]]

let newArr=[]
function singleArry(arr){
   
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            singleArry(arr[i])
        }else{
            newArr.push(arr[i]);
        }
    }
    
}

singleArry(arr)

// console.log(newArr)

