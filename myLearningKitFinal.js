/* 1012N JS files */
function p01Func() {
	
  /* in Ex1, set message text and image sources for problem01 */
  document.getElementById("problem").innerHTML = "<p> Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender's hoop </p>";
  
  document.getElementById("flowchart").src="./images/basketball/basketball_design.jpg";
  
  document.getElementById("js").src="./images/basketball/basketball_js.jpg";
  
  document.getElementById("another").src="./images/basketball/basketball_another.jpg";
  
  document.getElementById("flowchart").style.display="none";
  
  document.getElementById("js").style.display="none";
  
  document.getElementById("another").style.display="none";
  
  
 
 
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;

  /* in Ex3, update display of images */



}

/* in Ex2, uncomment the following function and complete it*/


function checkUncheck1(){
  if (document.getElementById("check1").checked==true) {
   document.getElementById("flowchart").style.display="inline";

     // add a getElementById here to get "flowchart" img and 
     // set the display property of its style to one of "inline" or "none"	 

	 
  }
  else {
   document.getElementById("flowchart").style.display="none";
     // add a getElementById here to get "flowchart" img and 
     // set the display property of its style to one of "inline" or "none"	 
	  
	  
  }
}



function checkUncheck2(){
  if (document.getElementById("check2").checked==true) {
     document.getElementById("js").style.display="inline"
     // add a getElementById here to get "js" img and 
     // set the display property of its style  
	 
	 
  }
  else {
   document.getElementById("js").style.display="none"
     // add a getElementById here to get "js" img and 
     // set the display property of its style  
	  
	  
  }
}

/* in Ex2, you need to create function
   checkUncheck3, which is similar to checkUncheck 1 and 2
*/
function checkUncheck3() {
     if (document.getElementById("check3").checked==true) {
        document.getElementById("another").style.display="inline"
     }
     else {
        document.getElementById("another").style.display="none"
     }
}

/* in Ex3, create function p02Func similar to p01Func */
function p02Func() {
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"


  document.getElementById("problem").innerHTML = "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules.[1] It has been a part of the official program of the Summer Olympic Games since Tokyo 1964.";
  
  document.getElementById("flowchart").src="./images/volleyball/volleyball_design.jpg";
  
  document.getElementById("js").src="./images/volleyball/volleyball_js.jpg";
  
  document.getElementById("another").src="./images/volleyball/volleyball_other.jpg";

  document.getElementById("check1").checked=false;
  
  document.getElementById("check2").checked=false;
  
  document.getElementById("check3").checked=false;



}
/* in Ex4, create functions zoomIn() and zoomOut() */


function ZoomIn() {
   document.getElementById("flowchart").style.width="200%";
}

function ZoomOut() {
   document.getElementById("flowchart").style.width="100%";
}

function ZoomIn1() {
   document.getElementById("js").style.width="200%";
}

function ZoomOut1() {
   document.getElementById("js").style.width="100%";
}

function p03Func(){

   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to calculate the perimeter of a rectangle using 2 variables";
   document.getElementById("flowchart").src="./Problems/Perimeter.jpg";
   document.getElementById("js").src="./Problems/Get the perimeter.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p04Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to calculate the volume of an ellipsoid using 3 variables";
   document.getElementById("flowchart").src="./Problems/Volume of Elp.jpg";
   document.getElementById("js").src="./Problems/Volume of Elep.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p05Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to calculate the volume of an ellipsoid using 3 variables";
   document.getElementById("flowchart").src="./Problems/Volume of Elp.jpg";
   document.getElementById("js").src="./Problems/Volume of Elep.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p06Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to get the largest number out of 3 variables";
   document.getElementById("flowchart").src="./Problems/LargestOf3.jpg";
   document.getElementById("js").src="./Problems/Largest of 3.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p07Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to get the roots of 3 variables, outputting either two roots, 1 root, or no real roots.";
   document.getElementById("flowchart").src="./Problems/RootEq.jpg";
   document.getElementById("js").src="./Problems/Root Equation.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p08Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to check if a number is divisible by 6";
   document.getElementById("flowchart").src="./Problems/DivBy6.jpg";
   document.getElementById("js").src="./Problems/Div by 6.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p09Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to give a letter grade to the user inputted number using the If Else method";
   document.getElementById("flowchart").src="./Problems/LetterGrifElse.jpg";
   document.getElementById("js").src="./Problems/Letter Grade IF ELSE.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p10Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to give a letter grade to the user inputted number using the Switch Case method";
   document.getElementById("flowchart").src="./Problems/LetterGr SWI.jpg";
   document.getElementById("js").src="./Problems/Letter Grade Switch case.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p11Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to check if a number is positive or negative";
   document.getElementById("flowchart").src="./Problems/PosorNeg.jpg";
   document.getElementById("js").src="./Problems/Positive or neg num.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p12Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to separate the digits of the inputted number by a comma ',' ";
   document.getElementById("flowchart").src="./Problems/Sepetate Digits.jpg";
   document.getElementById("js").src="./Problems/Sperate Digits with ,.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p13Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to check how many 3s or 7s does the user inputted number have";
   document.getElementById("flowchart").src="./Problems/number 3or7.jpg";
   document.getElementById("js").src="./Problems/Number 3or 7.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p14Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to check if the reverse of the inputted number is the same and the original number";
   document.getElementById("flowchart").src="./Problems/Reverse same number.jpg";
   document.getElementById("js").src="./Problems/Reverse same number.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p15Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to get the factorial of the user inputted number";
   document.getElementById("flowchart").src="./Problems/FactorialA.jpg";
   document.getElementById("js").src="./Problems/Factorial A inside Func.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p16Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to get the factorial of the user inputted number by calling this function In FactorialA() and using a parameter";
   document.getElementById("flowchart").src="./Problems/FactorialB.jpg";
   document.getElementById("js").src="./Problems/FactorialB.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p17Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to get the fibonacci sequence till the user inputted number";
   document.getElementById("flowchart").src="./Problems/FibSeq.jpg";
   document.getElementById("js").src="./Problems/FibSeq.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p18Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to draw a triangle using the inputted user number as the number of rows";
   document.getElementById("flowchart").src="./Problems/Triangle.jpg";
   document.getElementById("js").src="./Problems/Triangle.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p19Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to check if the user inputted number is prime or not";
   document.getElementById("flowchart").src="./Problems/19.jpeg";
   document.getElementById("js").src="./Problems/PrimeNumbers.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p20Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to check check how many positive or negative numbers have been inputted until a certain limit has been reached";
   document.getElementById("flowchart").src="./Problems/20.jpeg";
   document.getElementById("js").src="./Problems/Number of Positive Neg.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p21Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to get the binary form of the user inputted numbers";
   document.getElementById("flowchart").src="./Problems/21.jpeg";
   document.getElementById("js").src="./Problems/BinaryNumber.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p22Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to check how many Positives";
   document.getElementById("flowchart").src="./Problems/22.jpeg";
   document.getElementById("js").src="./Problems/NumberOfPosNeg.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p23Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to get the sum of the numbers in a given array";
   document.getElementById("flowchart").src="./Problems/SumOfArrayNum.jpeg";
   document.getElementById("js").src="./Problems/SumOfArrayNum.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p24Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to sort a random array";
   document.getElementById("flowchart").src="./Problems/SortArray.jpeg";
   document.getElementById("js").src="./Problems/SortArray.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p25Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to sort a random array but a different method than the first";
   document.getElementById("flowchart").src="./Problems/SortArray2.jpeg";
   document.getElementById("js").src="./Problems/SortArray2.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p26Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to check if the user inputted number is in the given array or not";
   document.getElementById("flowchart").src="./Problems/ArrayCheck.jpeg";
   document.getElementById("js").src="./Problems/ArrayCheck.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p27Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to check which of the two user inputted words of the same length come before the other in a dictionary";
   document.getElementById("flowchart").src="./Problems/Dict.jpeg";
   document.getElementById("js").src="./Problems/Dict.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p28Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to check which of the two user inputted words (can be different length)come before the other in a dictionary but in a dictionary";
   document.getElementById("flowchart").src="./Problems/Dict2.jpeg";
   document.getElementById("js").src="./Problems/Dict2.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p29Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to make a rolling dice game and if the two dices land on the same number Program will output a word";
   document.getElementById("flowchart").src="./Problems/29.jpeg";
   document.getElementById("js").src="./Problems/RollDie.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}

function p30Func(){
   document.getElementById("flowchart").style.display="none"
   document.getElementById("js").style.display="none"
   document.getElementById("another").style.display="none"
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

   document.getElementById("problem").innerHTML = "We used this code to get the product of two user inputted variables using recursions";
   document.getElementById("flowchart").src="./Problems/30.jpeg";
   document.getElementById("js").src="./Problems/Multiply.png";
   document.getElementById("another").src="./Problems/Whitex.png";

}


