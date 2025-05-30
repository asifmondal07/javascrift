// 2 Find the Intersection of Two Arrays Given two arrays, return a new array containing only the common elements

arr1=[1,2,3,4,5,6,7,8,9];
arr2=[1,2,3,4,8,9]

    function CommonElements(arr1,arr2){
        return arr1.filter(arr1=>arr2.includes(arr1));  
    }

    console.log(CommonElements(arr1,arr2));