var d = new Date();
var time = `<b>Time:</b> ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
var date = `<b>Date:</b> ${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`;
document.getElementById('time').innerHTML = time;
document.getElementById('date').innerHTML = date;