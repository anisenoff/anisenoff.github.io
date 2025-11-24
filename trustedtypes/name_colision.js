const escapeHTMLPolicy = trustedTypes.createPolicy("EscapePolicy", {
    createHTML: (string) =>
        string
            .replace(/'/g, "&apos;"),
});

let el2 = document.getElementById("myDiv2");
const escaped2 = escapeHTMLPolicy.createHTML("stuff");
console.log(escaped2 instanceof TrustedHTML); // true
el2.innerHTML = escaped2;