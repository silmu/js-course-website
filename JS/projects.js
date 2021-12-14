// Change color of a project on mouseover
//Loop to add eventListener on each project
for(var i = 1; i <= 3; i++){
    var project = $('#project'+ i)[0];
    // Function to change color
    project.addEventListener('mouseover', function (event) {
        if (event.target !== event.currentTarget)
            return;
        event.target.style.backgroundColor = "rgb(231, 231, 231)";
        setTimeout(function () {
            event.target.style.backgroundColor = "";
        }, 1000);
    }, false);
}


// Count how many times the page is scrolled
var i = 0;
window.addEventListener('scroll', function (event) {
        i++;
        document.getElementById('scrolls').innerHTML = i;

    });