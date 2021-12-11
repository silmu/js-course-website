var d = new Date();
var time = d.toLocaleTimeString('en-GB');
var date = d.toLocaleDateString('en-GB');
document.getElementById('time').innerHTML += time;
document.getElementById('date').innerHTML += date;