import add from "./modules/add.js";
import minus from "./modules/minus.js";
import kopaytiruv from "./modules/kopaytiruv.js";
import boluv from "./modules/boluv.js";

const result = document.getElementById("result");
const plus = document.getElementById("plus");
const minuss = document.getElementById("minus");
const kopaytma = document.getElementById("kopaytma");
const bolinma = document.getElementById("bolinma");

plus.addEventListener("click", () => {
    const a = +document.getElementById("firstInput").value;
    const b = +document.getElementById("secondInput").value;
    result.textContent = "Result: " + add(a, b);
});
minuss.addEventListener("click", () => {
    const a = +document.getElementById("firstInput").value;
    const b = +document.getElementById("secondInput").value;
    result.textContent = "Result: " + minus(a, b);
});
kopaytma.addEventListener("click", () => {
    const a = +document.getElementById("firstInput").value;
    const b = +document.getElementById("secondInput").value;
    result.textContent = "Result: " + kopaytiruv(a, b);
});
bolinma.addEventListener("click", () => {
    const a = +document.getElementById("firstInput").value;
    const b = +document.getElementById("secondInput").value;
    if (b === 0) {
        result.textContent = "Ошибка: нельзя делить на 0";
    } else {
        result.textContent = "Result: " + boluv(a, b);
    }
});