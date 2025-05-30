let arr6=[6,7,8,9,101,2,3,4,5,6,7,8,9,10,2];

function accendingOrder(arr){
    let newArr=[];
    for(let i=0; i<arr.length; i++){
        for(let j=0; j < arr.length -i -1; j++){
            if(arr[j]>arr[j + 1]){
                newArr=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=newArr;
            }
        }

    }
}
accendingOrder(arr6)


// function dcendingOrder(arr){
//     let newArr=[];
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length -i -1; j++){
//             if(arr[j] < arr[j + 1]){
//                 newArr=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=newArr;
//             }
//         }

//     }
// }
// dcendingOrder(arr6)

console.log(arr6)