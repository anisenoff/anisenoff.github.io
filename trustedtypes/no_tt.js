const escapeHTMLPolicy = trustedTypes.createPolicy("3pEscapePolicy", {
    createHTML: (string) =>
        string
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&apos;"),
});

let el = document.getElementById("myDiv2");
const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
console.log(escaped instanceof TrustedHTML); // true
el.innerHTML = escaped;