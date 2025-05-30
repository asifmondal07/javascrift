// 4 Find the Second Largest Number in an Array Given an unsorted array, find the second-largest number

arr=[1,2,3,4,50,100,90,55,60,200];

// newArr=arr.sort((a,b)=>b-a);    //sort method
// console.log(newArr[1]);

function secondLargest(arr){
    let largest=[]
    let second_largest=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){         
            second_largest=largest;
            largest=arr[i];
        } else if(arr[i]<second_largest && arr[i]==!largest){ //eta mane 
            second_largest=arr[i];
        }
    }
    return second_largest
}
console.log(secondLargest(arr));