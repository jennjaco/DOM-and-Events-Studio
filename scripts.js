// Write your JavaScript code here.
// Remember to pay attention to page loading!

let takeOff = null;
let flightStatus = null;
let background = null;
let shuttleHeight = null;
let land = null;
let abort = null;
let up = null;
let down = null;
let right = null;
let left = null;


function init(){
    takeOff = document.getElementById("takeoff");
    flightStatus = document.getElementById("flightStatus");
    background = document.getElementById("shuttleBackground");
    shuttleHeight = document.getElementById("spaceShuttleHeight");
    land = document.getElementById("landing");
    abort = document.getElementById("missionAbort");
    up = document.getElementById("up");
    down = document.getElementById("down");
    right = document.getElementById("right");
    left = document.getElementById("left");
    rocket = document.getElementById("rocket");
    rocket.style.bottom = '0px';
    rocket.style.left = '0px';
    rocket.style.position = 'absolute';

    takeOff.addEventListener('onClick', function(event){
        let answer = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (answer){
            flightStatus.innerHTML = "shuttle in flight.";
            background.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = 10000
        }
    });

    takeOff.onclick = function(){
        let answer = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (answer){
            flightStatus.innerHTML = "Shuttle in flight.";
            background.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = 10000
        }
        rocket.style.bottom = (parseInt(rocket.style.bottom) + 10) + 'px'
     
    };

    land.onclick = function(){
        let alert = window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        background.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        rocket.style.bottom = '0px'
    };

    abort.onclick = function(){
        let answer = window.confirm("Confirm that you want to abort the mission.");
        if (answer){
            flightStatus.innerHTML = "Mision aborted.";
            background.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
        }
    };

    let moveUp = document.getElementById("up")
    moveUp.addEventListener("click", function() {
        let currentHeightNum = Number(spaceShuttleHeight.textContent)
        spaceShuttleHeight.textContent = currentHeightNum + 10000;
        rocket.style.bottom = (parseInt(rocket.style.bottom) + 10) + 'px'
    });
    let moveDown = document.getElementById("down")
    moveDown.addEventListener("click", function(){
        let currentHeightNum = Number(spaceShuttleHeight.textContent)
        spaceShuttleHeight.textContent = currentHeightNum - 10000;
        rocket.style.bottom = (parseInt(rocket.style.bottom) - 10) + 'px'
    });

    let moveRight = document.getElementById("right")
    moveRight.addEventListener("click", function(){
        rocket.style.left = (parseInt(rocket.style.left) + 10) + 'px'
    });
    let moveLeft = document.getElementById("left")
    moveLeft.addEventListener("click", function(){
        rocket.style.left = (parseInt(rocket.style.left) - 10) + 'px'
    });



}







window.onload = init;
