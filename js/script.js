let a = "";
let b = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "*", "/"];

const out = document.querySelector(".calc_result");
 var p = 0;
function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = "";
  finish = false;
  out.textContent = 0;
}

document.querySelector(".calc__btn__reset").onclick = clearAll;

document.querySelector(".calc").onclick = (event) => {
  if (!event.target.classList.contains("calc__btn")) return;
  if (event.target.classList.contains("calc__btn__reset")) return;

  out.textContent = "";

  const key = event.target.textContent;
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      console.log(a, b, sign);
      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    return;
  }
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    // console.log(sign);
    return;
  }
  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "*":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          out.textContent = "Owners";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;
  }
};

// const calc = document.querySelector(".calc");
// const result = document.querySelector("#result");

// calc.addEventListener("click", function (event) {
//   if (!event.target.classList.contains("calc__btn")) return;
//   const valueNambr = event.target.innerText;

//   switch (valueNambr) {
//     case "C":
//       result.innerText = "";
//       break;
//     case "=":
//       if (result.innerText.search(/[^0-9*/+-.]/im) != -1) return;
//       result.innerText += "=" + eval(result.innerText).toFixed(2);
//       break;
//     default:
//       result.innerText += valueNambr;
//   }
// });
