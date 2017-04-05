function cubed()
{
  num1 = document.getElementById("firstNumber").value;
  document.getElementById("result").innerHTML = num1 * num1 *num1;
}

var Memory = "0";
var Current = "0";
var Operation = 0;
var maxLength = 30;

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
