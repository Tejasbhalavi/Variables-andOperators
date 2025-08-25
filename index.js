//1.Implementation of Variables & Operators

// 1. Write a program to print hello world 
//   console.log('Hello World');

//2 . write a program to perform arithmetic opertion
// let num1 = 20;
// let num2 = 10;
// let add = num1 + num2 ;
// let sub = num1 - num2;
// let mul = num1 * num2 ;
// let div = num1 / num2 ;
// let mod = num1 % num2 ;

// console.log(add);
// console.log(sub);
// console.log(mul);
// console.log(div);
// console.log(mod);


// 3.write a program swapping of two number

// let a = 5;
// let b = 10;

// console.log("Before Swap: a = " + a + ", b = " + b);

// let temp = a;   
// a = b;          
// b = temp;      

// console.log("After Swap: a = " + a + ", b = " + b);



// 4. Check Even / Odd (with remainder only)

// let num = 9;

// let remainder = num % 2;

// console.log("Remainder = " + remainder); 
// // 0 → Even, 1 → Odd

//******************************************************************/


//write a simple programs to demonstrate by using  functions and arrow funtion.


// 1 write a program to add two parameters using addition function

// function add(a, b) {
//   return a + b;
// }
// console.log("Addition: " + add(4, 6));


// 2 write a program  to check whether the given parameters  is even or odd


// function check(num) {
//   if (num % 2 === 0) 
    
//     {
//     return "Even number";
//   } 
  
//   else 
    
//     {
//     return "Odd number";
//   }
// }
// console.log( check(24));


// 3 write a program of find greatest of two number

// function greatestOfTwo(a,b) {
//   if (a > b) 
   
//    {
//     return a + " is the greatest";
//   } 
//   else if (b > a)
    
//   {
//     return b + " is the greatest";
//   } 
  
//   else 
//   {
//     return "Both numbers are equal";
//   }
// }

// console.log(greatestOfTwo(15, 15));



//1. Arrow function to add two numbers
// const add = (a, b) => a + b;
// console.log("Addition:", add(2, 1));

// 2.square of number

// const square = (n) => n * n;
// console.log("Square is" , square(6));


/******************************************************* */


//write a program using object

// let student = {

//     name:"Tejas",
//     rollnumber:"001",
//     age: 22,
//     course: "MCA"
// }
// // for display all the values
// console.log("Student Name: " + student.name +" " + "Age: " + student.age + " " + "Course: " + student.course);

// //for update a values 
// student.age = 23;
// console.log("Student Name: " + student.name +" " + "Age: " + student.age + " " + "Course: " + student.course);

// //adding a values
// student.city = "Amravati";
// console.log("Student Name: " + student.name +" ," + "Age: " + student.age + ", " + "Course: " + student.course + ", " +"city :"  + student.city );