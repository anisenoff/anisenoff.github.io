
let el2 = document.getElementById("myDiv2");
const text2 = "<img src=x onerror=alert(2)>";
console.log(text2 instanceof TrustedHTML); // true
el2.innerHTML = text2;