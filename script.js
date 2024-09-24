const style = document.createElement('style');
style.innerHTML = `
    .red-bg {
        background-color: red !important; 
    }
`;
document.head.appendChild(style);

setTimeout(() => {
    document.querySelectorAll('a').forEach(function(a) {
        const hrefValue = a.getAttribute('href');
        if (!hrefValue || hrefValue === 'javascript:;' || hrefValue === '#' || hrefValue === "") {
            a.classList.add('red-bg');
        }
    });
}, 1000);
