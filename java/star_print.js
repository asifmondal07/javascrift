//*****
//*****
//*****
//*****


let n=4;
let m=5

for(let i=0; i<n; i++){
    let row="";
    for(let j=0; j<m; j++){
        row+="*";
    }
    // console.log(row);
}

//*****
//*   *
//*   *
//*****

for(let i=0; i<n; i++){
    let row=""
    for(let j=0; j<m; j++){
        if(i===0 || j===0 || i===n-1 || j===m-1){
          row+="*"
        }else{
            row+=" "
        }
    }
    // console.log(row)
}

//*
//** 
//***
//****

let v=4;
for(let i=1; i<=v;i++){
    let row="";
    for(let j=1; j<=i; j++){
        row+="*";
    }
    for(let j=1;j<=n-i;j++){
        row+=" "
    }
    console.log(row);
}

// 1 
// 23 
// 456
// 78910

let number =1;
for(let i=1; i<=n;i++){
    let row="";
    for(let j=1; j<=i; j++){
        row+=number;
        number++
    }
    row+=" "
    // console.log(row);
}

// 1
// 01
// 101
// 0101


for(let i=1; i<=n; i++){
    let row="";
    for(let j=1; j<=i; j++){
        sum=i+j;
        if(sum % 2== 0){
            row+="1"
        }else{
            row+="0"
        }
    }
    // console.log(row);
}
//     *
//    ***  
//   *****  
//  *******
//   *****
//    ***
//     *

for(let i=1; i <= v; i++){
    let row="";

    for(let j=1; j<=v-i; j++){
        row+=" ";
    }
    for(let j=1; j <= (2 * i) -1; j++){
        row+="*"
    }
    
    console.log(row);
}
// Lower Inverted Pyramid
for (let i = v - 1; i >= 1; i--) {
    let row = "";

    
    for (let j = 1; j <= v - i; j++) {
        row += " ";
    }

    
    for (let j = 1; j <= (2 * i) - 1; j++) {
        row += "*";
    }

    console.log(row);
}