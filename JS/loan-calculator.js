
//Form handling
var form = document.getElementById('myGraph');

var monthlyPay,
    total,
    totalInterest;    
//Calculate on Submit and draw a graph
form.addEventListener('submit', function(event) {
    var amount = document.getElementById("amount").value;
    var interest = document.getElementById("interest").value;
    var years = document.getElementById("years").value;
    // monthy pay without interest = amount of loan / (years * 12 months)
    // monthly pay with interest = monthly pay without interest * (interest / 12 months /100)
    var monthlyNoInterest = (amount / (years * 12));
    monthlyPay = (monthlyNoInterest * (interest / 12 / 100)) + monthlyNoInterest;
    total = monthlyPay * 12 * years;
    totalInterest = total - amount;

    document.getElementById('resultMonthly').innerHTML = monthlyPay;
    document.getElementById('resultTotal').innerHTML = total;
    document.getElementById('resultInterest').innerHTML = totalInterest;

    //Create a graph
    var graph = document.getElementById('myCanvas');
    var ctx = graph.getContext('2d');
    //Erase old graph
    ctx.clearRect(0, 0, graph.width, graph.height);

    //Draw a straight line from (0,0) to end point
    function draw(year) {
    ctx.beginPath();
    ctx.moveTo(0,300);
    ctx.lineTo(500, years);
    ctx.stroke();
}
    //draw two lines for total loan sum and total interest
    ctx.strokeStyle="#000";
    draw(total);
    ctx.strokeStyle="#FF0066";
    draw(totalInterest);
    // Prevent empty submission
    event.preventDefault();
});