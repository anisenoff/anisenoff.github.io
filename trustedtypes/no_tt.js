
let el2 = document.getElementById("myDiv2");
const text = "<img src=x onerror=alert(1)>";
console.log(text instanceof TrustedHTML); // true
el2.innerHTML = text;