
let el = document.getElementById("myDiv2");
const text = "<img src=x onerror=alert(1)>";
console.log(text instanceof TrustedHTML); // true
el.innerHTML = text;