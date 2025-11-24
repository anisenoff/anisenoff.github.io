const escapeHTMLPolicy2 = trustedTypes.createPolicy("p3EscapePolicy", {
    createHTML: (string) =>
        string
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&apos;"),
});

let el2 = document.getElementById("myDiv2");
const escaped2 = p3escapeHTMLPolicy2.createHTML("<img src=x onerror=alert(2)>");
console.log(escaped2 instanceof TrustedHTML); // true
el2.innerHTML = escaped2;