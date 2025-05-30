let obj1={a:1,b:2};
let obj2={b:3,c:4};             //marge into one object and remove only duplicate key and value intier to  array
let obj3={c:5,D:6};


function convertOneObject(...objects){
    let newObj={};
    for (let i=0; i<objects.length; i++){
        let obj=objects[i];
        for(let key in obj){
            if(newObj[key]){
                newObj[key]=[].concat(newObj[key],obj[key])
            }else{
                newObj[key]=obj[key];
            }
        }
    }
    return newObj;
}

// console.log(convertOneObject(obj1,obj2,obj3));


let obj={a:1,b:{c:2,d:{e:3,f:{g:4}}}};

function deepClone(obj){
    let newobj={}
    for(let key in obj){
        if(typeof obj[key]==="object" && obj[key]!==null){
            newobj[key]=deepClone(obj[key]);
        }else{
            newobj[key]=obj[key];
        }
    }
    return newobj;
}
// console.log(deepClone(obj));


// find total charector count  in string

const str="hi my nmae is asif    mondal";
let count={};

for(let x in str){
    if(count[x]){
        count[x] += 1
    }else{
        count[x] = 1;
    }
    
}
console.log(count);


