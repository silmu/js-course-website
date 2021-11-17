//lists of skills by type
var progLangs = [
    {name: 'JavaScript', idImg: '<img class="icon" src="Images/js-logo.jpg" alt="JavaScript icon">'},
    {name: 'HTML', idImg: '<img class="icon" src="Images/html-logo.jpg" alt="HTML icon">'},
    {name: 'CSS', idImg: '<img class="icon" src="Images/css-logo.jpg" alt="CSS icon">'},
    {name: 'Kotlin', idImg: '<img class="icon" src="Images/kotlin-logo.jpg" alt="Kotlin icon">'},
    {name: 'PHP', idImg: '<img class="icon" src="Images/php-logo.jpg" alt="PHP icon">'},
    {name: 'SQL', idImg: '<img class="icon" src="Images/sql-logo.jpg" alt="SQL icon">'},
    {name: 'Python', idImg: '<img class="icon" src="Images/python-logo.jpg" alt="Python icon">'},
    {name: 'Java', idImg: '<img class="icon" src="Images/java-logo.jpg" alt="Java icon">'},
    {name: 'C', idImg: '<img class="icon" src="Images/c-logo.jpg" alt="C icon">'},
    {name: 'C++', idImg: '<img class="icon" src="Images/C++-logo.jpg" alt="C++ icon">'}
];

var frameworks = [
    {name: 'Node.js', idImg: '<img class="icon" src="Images/node.jpg" alt="Node.js icon">'}];

var conceptImg = '<img class="icon" src="Images/concept.jpg" alt="Concept">';   
var concepts = [
    {name: 'OOP', idImg:conceptImg}, 
    {name: 'Functional programming', idImg:conceptImg},
    {name: 'AI problem solving', idImg:conceptImg},
    {name: 'Bayes\' probability', idImg:conceptImg}];
var others = [
    {name: 'XAMPP', idImg:'<img class="icon" src="Images/xampp.jpg" alt="XAMPP icon">'}, 
    {name: 'GitHub', idImg:'<img class="icon" src="Images/GitHub-logo.jpg" alt="GitHub icon">'}, 
    {name: 'NetBeans', idImg:'<img class="icon" src="Images/netbeans.jpg" alt="NetBeans icon">'}, 
    {name: 'VSCode', idImg:'<img class="icon" src="Images/vsc.jpg" alt="VSCode icon">'}, 
    {name: 'Android Studio', idImg:'<img class="icon" src="Images/android-logo.jpg" alt="Android Studio icon">'}, 
    {name: 'IntelliJ IDEA', idImg:'<img class="icon" src="Images/intelli.jpg" alt="IntelliJ IDEA icon">'}];


//assign value of html elements location to variables 
var getProgLang = document.getElementById('progLangs');
var getFrame = document.getElementById('frameworks');
var getCons = document.getElementById('concepts')
var getOth = document.getElementById('other');

//call function toPrint to show lists of skills in devoted html elements
toPrint(progLangs, getProgLang);
toPrint(frameworks, getFrame);
toPrint(concepts, getCons);
toPrint(others, getOth);

//print a formated array
function toPrint(myArray, tagId){
    for(var i=0; i<myArray.length; i++){
        //write id, name and show an image
        tagId.innerHTML += `<div class="skill">&emsp;${i+1}. ${myArray[i].name} ${myArray[i].idImg}</div>`;
    }
}
//get values from the form and create a new object Skill
function addSkill(){
    var skillName = document.getElementById('name').value;
    var skillType = document.getElementById('type').value;

    switch(skillType){

        case 'Programming language':
            progLangs.shift();
            progLangs[9] = {name: skillName, idImg: ''};

            console.log('Added programming language.');
            //clean html element and rewrite new list
            getProgLang.innerHTML = '';
            toPrint(progLangs, getProgLang);
            break;

        case 'Framework':
            frameworks.shift();
            frameworks[0] = {name: skillName, idImg: ''};

            console.log('Added a concept.');
            //clean html element and rewrite new list
            getFrame.innerHTML = '';
            toPrint(frameworks, getFrame);
            break;

        case 'Concept':
            concepts.shift();
            concepts[3] = {name: skillName, idImg: conceptImg};

            console.log('Added a concept.');
            //clean html element and rewrite new list
            getCons.innerHTML = '';
            toPrint(concepts, getCons);
            break;

        case 'Other':
            others.shift();
            others[5] = {name: skillName, idImg: ''};

            console.log('Added other skill.');
            //clean html element and rewrite new list
            getOth.innerHTML = '';
            toPrint(others, getOth);
            break;
    }
}