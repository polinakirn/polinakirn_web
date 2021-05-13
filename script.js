const startingMinutes = 1/2;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    time = time < 0 ? 0 : time;
    if (time == 0) {
        // fn(); <-- not sure what this is supposed to do, so I commented it out
        time = startingMinutes * 60; // reset counter
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

//var startingMinutes = 2;
//let time = startingMinutes * 60;

//const countdownEl = document.getElementById('countdown');

//setInterval(updateCountdown, 1000)

//function updateCountdown() {
//  const minutes = Math.floor(time / 60);
//  let seconds = time % 60;
//
//  seconds = seconds < 10 ? '0' + seconds : seconds;
//

//  countdownEl.innerHTML = `${minutes}:${seconds}`;
//  time--;
//  time = time < 0 ? 0 : time;
//  if (time == 0) {
//    fn();
//    time = startingMinutes * 60;
//    return;
//  }

//  function fn() {
//    console.log("timer reset");
//  }
//}

//const startingMinutes = 2;
//let time = startingMinutes * 60;

//const countdownEl = document.getElementById('countdown');

//setInterval(updateCountdown, 1000)

//function updateCountdown(){
    //const minutes = Math.floor(time / 60);
//    let seconds = time % 60;
    
   // seconds = seconds < 10 ? '0' + seconds : seconds;
    

    //countdownEl.innerHTML = `${minutes}:${seconds}`;
   // time--;
    //time = time < 0 ? 0 : time;
    //if (time < 0) {
    //    fn();
    //    setInterval(updateCountdown, 1000)
   //     return;
   // }
//}
