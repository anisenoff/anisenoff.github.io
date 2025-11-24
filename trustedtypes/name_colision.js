var escapeHTMLPolicy = trustedTypes.createPolicy("EscapePolicy", {
    createHTML: (string) => string
});

let el2 = document.getElementById("myDiv2");
const escaped2 = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(2)>");
console.log(escaped2 instanceof TrustedHTML); // true
el2.innerHTML = escaped2;