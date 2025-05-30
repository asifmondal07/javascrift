// console.log(typeof(s="10"+2+3));    //string

// what is windowll be output

let a={x:1,y:2}
let b={...a}

b.x=3;

console.log(a)   //x:1,Y:2
console.log(b)   //x:3,Y:2

let f="8"
let k=1

// console.log((+f)+k+1)   //output 10

var s="xyz"
var s="pqr"
// console.log(s)      //output "pqr"

// console.log(6>7>8)  //false

let g=5;
let h=g++;
// console.log(h);      5
// console.log(g);      6


//Write a function ascending order in array

let arr=[1,9,5,2,6,4,15,56,8,854,3,]

function ascendingOrder(arr){
    
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }

        }
    }
    
}
// ascendingOrder(arr);
// console.log(arr);

//Write a function dscending order in array

function dscendingOrder(arr){
    for(let i=0; i<arr.length;i++){
        for(let j=0; j<arr.length -i -1; j++){
            if(arr[j]<arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp
            }
        }
    }
}
// dscendingOrder(arr);
// console.log(arr);

//write a javascript program to find maximum number in array
let max=[];
for(let i=0; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i]
    }
}
// console.log(max);

//Write a function fund a second Largets number in array
let maximum=[]
let secondMaximum=[]
function secondLarget(arr){
    if(arr<2){return console.log("at least 3 number in array needed")}

    for(let i=0; i<arr.length;i++){
        if(arr[i]>maximum){

            secondMaximum=maximum;  //maximum ta secondmaximum a store korlam
            maximum=arr[i];         //maximum er jaiga te arr ta store korlam


            if(arr[i]>secondMaximum && arr[i]!==maximum){
                secondMaximum=arr[i]
            }
        }
    }
}
secondLarget(arr);
// console.log(secondMaximum);


//Write a function in javascript to marge two eliments without overwriting existing  propites

let obj1={a:1,b:2};
let obj2={b:3,c:4};             
let obj3={c:5,D:6};

function margeObject(...objects){
    let newObj={}
    for(let i=0; i<objects.length;i++){
        let obj=objects[i];
        for(let key in obj){
            if(newObj[key]){
                newObj[key]=[].concat(newObj[key],obj[key])
            }else{
                newObj[key]=obj[key];
            }
        }
    }
    return newObj
}
// console.log(margeObject(obj1,obj2,obj3))


//Write a function in javascript current date this format "YYYY-MM-DD"


function curentDate(){
    let date=new Date()
    let year=date.getFullYear();
    let month=(date.getMonth()+1);
    let dd=date.getDate();
    return `${year}-${month}-${dd}`
}
// console.log(curentDate());




let j=[1,2,3]
let p=[...j]
p[0]=4

console.log(j);
console.log(p);