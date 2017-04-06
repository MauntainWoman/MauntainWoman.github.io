function cubed()
{
  num1 = document.getElementById("firstNumber").value;
  document.getElementById("result").innerHTML = num1 * num1 *num1;
}

var Memory = "0";
var Current = "0";
var Operation = 0;
var maxLength = 30;

//Adding a number to the display
function AddDigit(dig) {
  if (Current.length > maxLength) {
    Current = "Oops! Too long"; //limit length
  } else {
    if ((eval(Current) == 0) && (Current.indexOf(".") == -1)){
      Current = dig;
    } else {
      Current = Current + dig;
    };
  };
  document.Calculator.Display.value = Current;
}

//Adding a decimal to the display
function AddDot() {
  if (Current.length == 0) {
    Current = "0.";
  } else {
    if (Current.indexOf(".") == -1) {
      Current = Current + ".";
    };
  };
  document.Calculator.Display.value = Current;
}

//Adding an exponent
function DoExponent() {
  if (Current.indexOf("e") == -1) {
    Current = Current + "e0";
  document.Calculator.Display.value = Current;
  };
}

//Sign Change
function PlusMinus() {
  if  (Current.indexOf("e") != -1) {
    var epos = Current.indexOf("e-");
    if (epos != -1) {
      Current = Current.substring(0,1+epos) + Current.substring(2+epos); //clip -ve exp
    } else {
      epos = Current.indexOf("e");
      Current = Current.substring(0,1+epos) + "-" + Current.substring(1+epos); //insert
    };
  } else {
    if ( Current.indexOf("-") == 0 ) {
      Current = Current.substring(1);
    } else {
      Current = "-" + Current;
    };
  };
  document.Calculator.Display.value = Current;
}

//clear current entry
function Clear() {
  Current = "0";
  document.Calculator.Display.value = Current;
};

//clear all memeory
function AllClear() {
  Current = "0";
  Operation = "0";
  Memory = "0";
  document.Calculator.Display.value = Current;
}

//Add, substract, divide, multiply
function Operate(op){
  if (op.indexOf("*") > -1) {
    Operation = 1;
      document.Calculator.Display.value = Current + "*";
  }
  if (op.indexOf("/") > -1) {
    Operation = 2;
    document.Calculator.Display.value = Current + "/";
  }
  if (op.indexOf("+") > -1) {
    Operation = 3;
    document.Calculator.Display.value = Current + "+";
  }
  if (op.indexOf("-") > -1) {
    Operation = 4;
    document.Calculator.Display.value = Current + "-";
  }

  Memory = Current;
  Current = "";

}

// Perform calculation on "="
function Calculate(){
  if (Operation == 1) {
    Current = eval(Memory) * eval(Current);
  };
  if (Operation == 2) {
    Current = eval(Memory) / eval(Current);
  };
  if (Operation == 3) {
    Current = eval(Memory) + eval(Current);
  };
  if (Operation == 4) {
     Current = eval(Memory) - eval(Current);
   };
  Operation = 0;
  Memory    = "0";
  document.Calculator.Display.value = Current;
 }
