/*
Create an application that asks a user to enter how many subjects they have. The application should then ask the user to enter the results for each subject. Store these results in an array and print them back to the user along with their overall average and grade for each module.
*/
subjects=parseInt(prompt("How many subject did you have"));
console.log(subjects)
let arrSubjects=[];
for(i=0;i<subjects;i++){
    arrSubjects[i]=parseInt(prompt("Please enter the result for subject numer "+(i+1)));
}
alert("Here is your marks "+arrSubjects)
let sum=0;
for(i=0;i<arrSubjects.length;i++){
  
    sum+=arrSubjects[i];
  
}

let average=sum/arrSubjects.length;
alert("Your average mark is "+average)