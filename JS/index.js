// Show date and time in european standarts
let d = new Date();
let time = d.toLocaleTimeString('en-GB');
let date = d.toLocaleDateString('en-GB');
document.getElementById('time').innerHTML += time;
document.getElementById('date').innerHTML += date;

// Toggle 3 different paragraphs if header is clicked
$("#about").click(function(){
    $("#toggleAbout").toggle();    
  });
$("#education").click(function(){
    $("#toggleEducation").toggle();
});
$("#career").click(function(){
    $("#toggleCareer").toggle();
});


