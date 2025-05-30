// 3 Flatten a Nested Array Convert a multi-dimensional array into a single-level array

arr=[1,2,[3,[4,5,[7,8,[9]]]]]

function FlattenArray(arr){
  return arr.flat(Infinity);
}

// console.log(FlattenArray(arr));

function arrayflatten(arr){
    return arr.toString().split(",").map(Number);
    
}
// console.log(arrayflatten(arr));


let arra=[5,2,3,1,0];

function seconLargest(){
    let temp;
        for(i=0;i<arra.length; i++){
            for(let j=0; j <arra.length -i-1; j++){
                if(arra[j] > arra[j+1]){
                  temp=arra[j]  
                  arra[j]=arra[j+1]
                    arra[j+1]=temp
                }
            }
        }

    }

   seconLargest();
  //  console.log(arra);

   let demo = [1,5,'k','l',8,'y',11,'ww'];
    let number=[]
    let string=[];

    for(let i=0; i<demo.length; i++){
      if(typeof(demo[i])=="number"){
          number.push(demo[i]);

      }else if(typeof(demo[i]=="string")){
          string.push(demo[i]);
      }
    }

    console.log(string)