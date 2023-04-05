/*
Create an application that generates an array of 5 random numbers 1-10. The user should then guess a number and the app will tell them how many time that number exists within the array.
*/
let arr=[];
for(i=0;i<4;i++){
    arr[i]=Math.floor(Math.random() * 10) + 1;
}
console.log(arr)

let count=0;
userChoice=parseInt(prompt("Enter a number from 1 to 10"));

for(i=0;i<arr.length;i++){
    if(userChoice==arr[i]){
        count++
    }

}

if (count==0){
    alert("You did not guess")
}
else{
    alert("Your number exist "+count+" times in the array");
}
