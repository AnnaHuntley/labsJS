/*
Create a preset array of numbers. Create a piece of code that chooses the largest number from that array
Return the mean and sum of an array of numbers

*/
let arr=[];
for(i=0;i<9;i++){
    arr[i]=Math.floor(Math.random() * 10) + 1;
}
document.getElementById("arr").innerHTML=arr;

    let large=0;
    for(i=0;i<arr.length;i++){
        if(large<arr[i]){
            large=arr[i]
        }
    }
    document.getElementById("largest").innerHTML=large;

let sumArr=0;
for(i=0;i<arr.length;i++){
    sumArr+=arr[i]
}
document.getElementById("sum").innerHTML=sumArr;

let meanNum=sumArr/arr.length;
document.getElementById("mean").innerHTML=meanNum;
