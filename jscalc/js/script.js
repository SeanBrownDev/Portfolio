var operator;
var firstval;
var secondval;
var mini;

document.getElementById("backspace").addEventListener("click", myBackspace);
document.getElementById("clearmemory").addEventListener("click", myClearMemory);
document.getElementById("clear").addEventListener("click", myClear);
document.getElementById("posneg").addEventListener("click", myPosNeg);
document.getElementById("squareroot").addEventListener("click", mySquareRoot);
document.getElementById("seven").addEventListener("click", mySeven);
document.getElementById("eight").addEventListener("click", myEight);
document.getElementById("nine").addEventListener("click", myNine);
document.getElementById("divide").addEventListener("click", myDivide);
document.getElementById("percent").addEventListener("click", myPercent);
document.getElementById("four").addEventListener("click", myFour);
document.getElementById("five").addEventListener("click", myFive);
document.getElementById("six").addEventListener("click", mySix);
document.getElementById("multiply").addEventListener("click", myMultiply);
document.getElementById("inverse").addEventListener("click", myInverse);
document.getElementById("one").addEventListener("click", myOne);
document.getElementById("two").addEventListener("click", myTwo);
document.getElementById("three").addEventListener("click", myThree);
document.getElementById("minus").addEventListener("click", myMinus);
document.getElementById("equals").addEventListener("click", myEquals);
document.getElementById("zero").addEventListener("click", myZero);
document.getElementById("decimal").addEventListener("click", myDecimal);
document.getElementById("plus").addEventListener("click", myPlus);

function myBackspace(){
        var currentval = document.getElementById("displayscreen").value;
        if (currentval.length < 2){
            newval = "0";
        }
        else{
        newval = currentval.substring(0, currentval.length - 1);
    }
    document.getElementById("displayscreen").value = newval;
}

function myClearMemory(){
    document.getElementById("displayscreen").value = "0";
    document.getElementById("miniscreen").value = "0";
}

function myClear(){
    document.getElementById("displayscreen").value = "0";
    document.getElementById("miniscreen").value = "0";
}

function myPosNeg(){
var currentval = document.getElementById("displayscreen").value;
   if(currentval != "0"){
   if(currentval.includes("-")){
                       }
   else{
   document.getElementById("displayscreen").value = "-" + currentval;
                       }
}
    else{}
}

function mySquareRoot(){
    var currentval = document.getElementById("displayscreen").value;
    document.getElementById("miniscreen").value = "sqrt(" + currentval + ")";
    document.getElementById("displayscreen").value = Math.sqrt(Number(currentval));
}

function mySeven(){
      if (document.getElementById("displayscreen").value != "0"){
        newval = document.getElementById("displayscreen").value + "7";
    }
    else{
        newval = "7";
    }
    document.getElementById("displayscreen").value = newval;
}

function myEight(){
        if (document.getElementById("displayscreen").value != "0"){
        newval = document.getElementById("displayscreen").value + "8";
    }
    else{
        newval = "8";
    }
    document.getElementById("displayscreen").value = newval;
    
}

function myNine(){
   if (document.getElementById("displayscreen").value != "0"){
        newval = document.getElementById("displayscreen").value + "9";
    }
    else{
        newval = "9";
    }
    document.getElementById("displayscreen").value = newval;
}

function myDivide(){
   if(document.getElementById("miniscreen").value != "0"){
      myEquals();
      } else {}
   var currentval = document.getElementById("displayscreen").value;
   operator = "divide";
   document.getElementById("miniscreen").value = currentval + " /";
    document.getElementById("displayscreen").value = "0";
}

function myPercent(){
   var currentval = document.getElementById("displayscreen").value;
   document.getElementById("miniscreen").value = "" + (currentval*100) + "%";
   
}

function myFour(){
    if (document.getElementById("displayscreen").value != "0"){
        newval = document.getElementById("displayscreen").value + "4";
    }
    else{
        newval = "4";
    }
    document.getElementById("displayscreen").value = newval;
}

function myFive(){
    if (document.getElementById("displayscreen").value != "0"){
        newval = document.getElementById("displayscreen").value + "5";
    }
    else{
        newval = "5";
    }
    document.getElementById("displayscreen").value = newval;
}

function mySix(){
    if (document.getElementById("displayscreen").value != "0"){
        newval = document.getElementById("displayscreen").value + "6";
    }
    else{
        newval = "6";
    }
    document.getElementById("displayscreen").value = newval;
}

function myMultiply(){
     if(document.getElementById("miniscreen").value != "0"){
      myEquals();
      } else {}
   var currentval = document.getElementById("displayscreen").value;
   operator = "multiply";
   document.getElementById("miniscreen").value = currentval + " *";
    document.getElementById("displayscreen").value = "0";
}

function myInverse(){
   var currentval = document.getElementById("displayscreen").value;
   document.getElementById("miniscreen").value = "1/" + currentval;
   document.getElementById("displayscreen").value = "" + (1 / Number(currentval)) + "";
}

function myOne(){
    if (document.getElementById("displayscreen").value != "0"){
        newval = document.getElementById("displayscreen").value + "1";
    }
    else{
        newval = "1";
    }
    document.getElementById("displayscreen").value = newval;
}

function myTwo(){
 if (document.getElementById("displayscreen").value != "0"){
        newval = document.getElementById("displayscreen").value + "2";
    }
    else{
        newval = "2";
    }
    document.getElementById("displayscreen").value = newval;
}

function myThree(){
    if (document.getElementById("displayscreen").value != "0"){
        newval = document.getElementById("displayscreen").value + "3";
    }
    else{
        newval = "3";
    }
    document.getElementById("displayscreen").value = newval;
}

function myMinus(){
   if(document.getElementById("miniscreen").value != "0"){
      myEquals();
      } else {}
   var currentval = document.getElementById("displayscreen").value;
   operator = "minus";
   document.getElementById("miniscreen").value = currentval + " -";
    document.getElementById("displayscreen").value = "0";
}

function myEquals(){
    
    if (document.getElementById("displayscreen").value != "0"){
    var mini = document.getElementById("miniscreen").value;
    firstval = mini.split(" ",1);
    secondval = document.getElementById("displayscreen").value;
        switch(operator) {
    case "plus":
        document.getElementById("displayscreen").value = Number(firstval) + Number(secondval);
        document.getElementById("miniscreen").value = "0";
        break;
    case "multiply":
        document.getElementById("displayscreen").value = Number(firstval) * Number(secondval);
        document.getElementById("miniscreen").value = "0";
        break;
    case "minus":
        document.getElementById("displayscreen").value = Number(firstval) - Number(secondval);
        document.getElementById("miniscreen").value = "0";
        break;
    case "divide":
        document.getElementById("displayscreen").value = Number(firstval) / Number(secondval);
        document.getElementById("miniscreen").value = "0";
        break;
}
    }
}

function myZero(){
   if (document.getElementById("displayscreen").value != "0"){
        newval = document.getElementById("displayscreen").value + "0";
    }
    else{
        newval = "0";
    }
    document.getElementById("displayscreen").value = newval;
}

function myDecimal(){
   var currentval = document.getElementById("displayscreen").value;
   if(currentval.includes(".")){
                       }
   else{
   document.getElementById("displayscreen").value = currentval + ".";
                       }
}

function myPlus(){
    if(document.getElementById("miniscreen").value != "0"){
      myEquals();
      } else {}
   var currentval = document.getElementById("displayscreen").value;
   operator = "plus";
   document.getElementById("miniscreen").value = currentval + " +";
    document.getElementById("displayscreen").value = "0";
}