const style = document.createElement('style');
style.innerHTML = `
    .bg-color {
        background-color: #79ff21 !important; 
    }
`;
document.head.appendChild(style);

setInterval(() => {
    document.querySelectorAll('a').forEach(function(a) {
        const hrefValue = a.getAttribute('href');
        if (!hrefValue || hrefValue === 'javascript:;' || hrefValue === '#' || hrefValue === "" || hrefValue === "javascript:void(0") {
            a.classList.add('bg-color');
        } else {
            a.classList.remove('bg-color');
        }
    });
}, 1000);
