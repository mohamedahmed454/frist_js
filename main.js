// 1- Create a function to calculate Average to a group of numbers (at least 10 numbers) .

var x = 5;
var i = 5;
var y = 5;
var z = 5;
var p = 5;
var q = 5;
var a = 5;
var s = 5;
var f = 5;
var l = 5;
var k = 10;
function averg() {
  console.log((x + i + y + z + p + q + a + s + f + l) / k);
}
averg();
///////////////////////////////////////////////////////////////////////////////////
function avrg() {
  var sum =[4+6+55+2+1+0+14+2+3];
  return sum / 10;
}
console.log(avrg());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2- Write a function that takes the base and height of a triangle and return its area

function area1(x, y) {
  return x * y * 0.5;
}
console.log(area1(5, 5));
///////////////////////////////////////////////////////////////////////////////////

function area2() {
  console.log(5 * 5 * 0.5);
}
area2();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3- Create a function that takes the age in years and returns the age in days and print it on console

function days(years) {
  return years * 360;
}
console.log(days(20));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4- Create a function takes two numbers and return thier sum Create a function takes two numbers and return thier sum

function sum(x, y) {
  return x + y;
}
console.log(sum(2, 5));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//5- Create a function that takes an array containing only numbers and return the first element

function nam() {
  var arrr = [
    "mohamed",
    "ahmed",
    "hagag",
    "zizo",
    "shikabala",
    "obama",
    "shalbi",
    "mathlothi",
    "winsh",
    "shifo",
  ];
  console.log(arrr[0]);
}
nam();
///////////////////////////////////////////////////////////////////////////////////
var arrr = [
  "mohamed",
  "ahmed",
  "hagag",
  "zizo",
  "shikabala",
  "obama",
  "shalbi",
  "mathlothi",
  "winsh",
  "shifo",
];
function nam2() {
  return arrr[0];
}
console.log(nam2());
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//6- Create a function show your name in HTML document

        function yourName(fname , lastname) {
          return fname + " " + lastname;
        }
        document.getElementById("h1-h1").innerHTML=yourName("Mohamed","Hagag");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//7- Write a function that takes an integer hours and converts it to second .

        function hours(x) {
            return x * 3600;
        }
        console.log(hours(2));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//8- Given four numbers, return true if the sum of both numbers is more than 350. Otherwise return false.
        function cond(x,z,i,y) {
          if ((x+z+i+y) > 350) {
            document.getElementById("eight").innerHTML="true";
          }else{
            document.getElementById("eight").innerHTML="false";
          };
        }
        cond(800,40,20,35);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//9- false مل فانكشن بتاخد رقم لو بيساوي صفر رجع true عكس كدا بيرجع 

          function con(x) {
            if (x == 0) {
              return true;
            }else{
              return false;
            }
          }
          console.log(con(10));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//10- عمل فانكشن بتاخد رقمين وتجيب باقي القسمة بتاعهم وليس القسمة
          function modest(x,y) {
            return x % y;
          }
          console.log( modest(20,9));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//11- Find the largest of two number Make a function take two parameters num1 and num2 and print the greater number or if they are equal print they are equal.

         function myFun(num1,num2) {
          if (num1 > num2){
            console.log("num1 > num2");
          }else if (num1 < num2){
            console.log("num2 > num1");
           }else{
            console.log("num1 = num2");
           }
         }
         myFun(20,13);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//12- Check if input variable is a number or not
      var x = 4;
         function variable(x) {
           if (typeof x == "number"){
                console.log("is a number");
           }else{
            console.log("is a not number")
           }
        }
        variable(4);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//13- Write a JavaScript function to get the current date
        function date() {
          return date = new Date();
        }
        console.log(date());