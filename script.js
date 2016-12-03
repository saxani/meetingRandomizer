
//Students names in an array
var students = ["BIBBO, NICOLAS", "DUEPNER, MATTHEW", "HELD, STEPHANIE", "HORI, CHIHARU", "HORVATH, NATALIE", "LAICHE, GAVIN", "MORIMOTO, MASAMI", "NARUKE, KOKORO", "NEARY, SHONA", "REIN, LEAH", "ROSEN, MICHAEL", "URBINA CARBAJAL, ROSARIO", "VALENTIN, VIVIAN", "WANG, ALEXANDER", "YATES, KEIASHA"];

//Start time of first meeting
var hours=4;
var minutes=10;

//Add all the names to the prelist section of the website
for(i = 0; i < students.length; i++){
    document.getElementById('prelist').innerHTML += students[i] + "<br>";
}

//When the button is pressed, go into this function
document.getElementById('generate').onclick= function () {
//Empty array for the meeting order names
var meetingOrder = [];

//For the length of the amount of students in the class, go through this loop
for (i = 0; i < 15; i++){
    //Get a random number within the number of students remaining
    var randomNumber = Math.floor(Math.random() * students.length);
    //Assign that random number to the students array to get the person next
    meetingOrder [i] = students[randomNumber];
    //Remove that student from the array
    students.splice(randomNumber, 1);
    
    //Display that student with the time
    document.getElementById('meetinglist').innerHTML += hours + ":" + (minutes < 10 ? "0" : "" ) + minutes + " - " + meetingOrder[i] + "<br>";
    //Increase the minutes by 7 for the next meeting
    minutes = minutes + 7;
    //Change the hour if necessary
    if (minutes > 59) {
        hours   = hours + 1;
        minutes = minutes - 60;
    }
}

}