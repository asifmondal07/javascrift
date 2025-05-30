// 5 Rotate an Array k Times to the Right Given an array and a number k, rotate the array k times.

// let arr = [1,2,3,4,5,6];

// for(arry in arr){
//     console.log(arr[arry]);
// }
// console.log(arr.length);
// const arrlen=arr.length - 1;


// for(let i=0; i < arr.length; i++ ){
//     if(arr[i] % 2 ==0){
//         console.log(arr[i])
//     }
    
// }

// for(let i=0; i <arr.length; i++){
    
//     if(i== 2){
//         continue;
//     }
//     console.log(arr[i])

// }


// let arry=arr.length-1
// for(let i=arry; i>=0 ; i--){
//     console.log(arr[i])
//     if(i==3){
//         break;
//     }
// }
// let n=5
// for(let i=1;i<=n;i++){
//     let row=" ".repeat(5-i)+"*".repeat(2*i-1);
//     console.log(row);
// }
// for(let j=4; j>=1; j--){
//     let start=" ".repeat(5-j)+"*".repeat(2*j-1)
//     console.log(start);
// }




// for(let i=1;i<=6;i++){
//     let=star=" ".repeat(6-i)+"*".repeat(2*i-1)
//     console.log(star);
// }

// for(let i=5;i>=1;i--){
//     let star=" ".repeat(6-i)+"*".repeat(2*i-1);
//     console.log(star)
// }
// for(let i=1; i<=5;i++){
//     console.log(" ".repeat(6-i))
// }


// async function getuser(token){
//     const decorded=jwt.verify(token,secret);
//     const user=await User.findByID(decorded._id);
//     return user
// }

// async function requierd(req,res,next) {
//     const  token=headers.token;

//     const user=await getuser(token);
//     return req.user=user
//     next()
// }
// async function handelLogin(req,res) {
//     const {email ,password}=req.body;

//     const user=await User.findOnse({email});
//     const itsCheck=bcrypt.compare(password,user.password);
//     const token=setuser(user);


// }
// function setuser(user){
//     const token=jwt.sign({
//         _id:user.id,
//         email:user.email,
//         role:user.role,
//     },secret)
//     return token;
// }



// arr=[1,2,3,4,5,6,7,3,4,5]
// function removeDuplicate(arr){
//     unique=[];
//     for(let i=0;i<arr.length;i++){
//         if(unique.indexOf(arr[i])==-1){
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }
// console.log(removeDuplicate(arr));


// let arr1=[1,2,3,4,5,6,7,8,9]
// let arr2=[1,2,3,6,9];

// function twoArray(arr1,arr2){
//     set2=new Set(arr2);
//     return arr1.filter(value=>set2.has(value));
// }
// console.log(twoArray(arr1,arr2))



// let arr= [1,2,[3,4,[5,6]]];

// let newArry=[];

// function flattArry(arr){
    
//     for(let i=0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             flattArry(arr[i]);
//         }else{
//             newArry.push(arr[i]);
//         }
//     }

// }
// flattArry(arr)
// console.log(newArry);


// let arr1 = [1,3,5,7,10,80,2];
// let arr2 = [2,4,8,3,4,5];

// let newArr=[];


// function sortArray(arr1,arr2){
//     for(let i=0; i < arr1.length; i++){

//         for(let j=0; j< arr2.length; j++){
//             if( arr1[i]==arr2[j]){
//                 newArr.push(arr1[i]);
//             }
//         }
//     }
// }
// sortArray(arr1,arr2)
// console.log(newArr);

// arr=[1,2,3,4,5,6,7,3,4,5]   //remove duplicate using nested array
// let unique=[];

// function removeDuplicate(arr){
    
//     for(let i=0; i < arr.length; i++){

//         let itsTrue =false;

//         for( let j=0; j<unique.length; j++){
//             if(arr[i] == unique[j]){
//                itsTrue =true;
//                break;
//             }
//         }
//         if(!itsTrue){
//             unique.push(arr[i]);
//         }
//     }    
   
// }
// removeDuplicate(arr)
// console.log(unique);


// let newArr=[];

// for(let i=0; i<arr.length; i++){

//     if(!newArr.includes(arr[i])){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);

// arr=[1,2,[3,4,[5,6,[7]]]]

// let newArr=[];
// function flatternArry(arr){
//     for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//            flatternArry(arr[i])
//         }else{
//             newArr.push(arr[i])
//         }
//     }
// }
// flatternArry(arr)


// console.log(newArr);

let arr1=[1,2,3,4,5,6,7,8];
let arr2=[1,2,3,4,5]

let marge=[];
function margeArry(arr1,arr2){
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                marge.push(arr1[i]);
            }
        }
    }
}

// margeArry(arr1,arr2)
// // console.log(marge);

// function newArry(arr1,arr2){
//     let set1=new Set(arr1);
//     let margeArry=arr2.filter(value=>set1.has(value));
//     return margeArry
// }

// console.log(newArry(arr1,arr2))

let obj1={a:1,b:2};
let obj2={b:3,c:4};
let obj3={c:5,D:6};

function margeObj(...objets){
    let newObj={};
    for(let i=0; i <objets.length; i++){
        let obj=objets[i];
        for(let k in obj ){
            
            if(newObj[k]){
                
                newObj[k]=[].concat(newObj[k],obj[k]);
            }else{
                newObj[k]=obj[k]
            }
        }
        // console.log(obj);
       
    }
    return newObj
}

// console.log(margeObj(obj1,obj2,obj3));


let arr=[1,2,3,4,2,5,8,5,2,3,1,5];
let newArr=[];
function removeDuplicate(arr){
    for(let i=0; i<arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }
}
removeDuplicate(arr)
// console.log(newArr);

// flattenArry convert to singleArry without duplicate array
let newFlat=[];
let dupFlat=[];
function flattenArray(arr){
    
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            flattenArray(arr[i])
        }else if(!newFlat.includes(arr[i])){
            newFlat.push(arr[i])
        }else{
            dupFlat.push(arr[i])
        }
        
    }
    
}
flattenArray([1,2,[3,4,[4,6,[1,7,[5,9,[10,9]]]]]])
// console.log(newFlat);
// console.log(dupFlat);

let arr3=[,6,7,8,9,10]
let arr4=[1,2,3,4,5,6,7,8,9,10];

function margeArry(arr1,arr2){
    let set1=new Set(arr1);

    return arr2.filter(key=>set1.has(key));
}
// console.log(margeArry(arr3,arr4));


let arr6=[6,7,8,9,101,2,3,4,5,6,7,8,9,10]

// 


function smallArry(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j< arr.length -i -1; j++){
            if(arr[j]>arr[j +1]){
                let temp=arr[j];
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
        
    }
}
smallArry(arr6)
// console.log(arr6);


let obj4={a:1,b:2};
let obj5={b:3,c:4};
let obj6={c:5,D:6};

function singleObj(...objets){
    let newObj={}
    for(let i=0; i < objets.length; i++){
       let obj=objets[i]; 
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
// console.log(singleObj(obj4,obj5,obj6))



// [2,3,1,4,5]
// [2,1,3,4,5]
// [1,2,3,4,5]


