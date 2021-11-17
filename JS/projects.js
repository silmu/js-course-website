//mouse over the 1st project even
var project1 = document.getElementById('project1');
project1.addEventListener('mouseover', (event) => {
    if (event.target !== event.currentTarget)
    return;
    event.target.style.backgroundColor = "rgb(231, 231, 231)";
    setTimeout(function() {
        event.target.style.backgroundColor = "";
    }, 1000);
}, false);
//event on load
window.addEventListener('load', (event) => {
        alert('The page is loaded!');
    });
//event on scroll
var i = 0;
window.addEventListener('scroll', (event) => {
        i++;
        document.getElementById('scrolls').innerHTML= i;

    });