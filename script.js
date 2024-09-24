const style = document.createElement('style');
style.innerHTML = `
    .red-bg {
        background-color: red !important; 
    }
`;
document.head.appendChild(style);

setInterval(() => {
    document.querySelectorAll('a').forEach(function(a) {
        const hrefValue = a.getAttribute('href');
        if (!hrefValue || hrefValue === 'javascript:;' || hrefValue === '#' || hrefValue === "") {
            a.classList.add('red-bg');
        } else {
            a.classList.remove('red-bg');
        }
    });
}, 1000);
