



const audio = new Audio("./audio.mp3");

// For Minutes:


for (let i = 0; i < 60; i++) {
    mins.innerHTML = mins.innerHTML + `<option value="${i}" id="">${i}</option> `;
}

// For secs:
for (let i = 0; i < 60; i++) {
    secs.innerHTML = secs.innerHTML + `<option value="${i}" id="">${i}</option> `;
}

// For hours:
for (let i = 24; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    hours.innerHTML = hours.innerHTML + `<option value="${i}">${i}</option>`;
}

// For AM/PM
for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    Am_Pm.innerHTML = Am_Pm.innerHTML + `<option value="${ampm}">${ampm}</option>`;

}

//Timer:
let timer = new Date();
let year = timer.getFullYear();
let month = timer.getMonth() + 1;
let date = timer.getDate();

//Real Time
let rtime;
let realTime = document.getElementById("rTime");
setInterval(() => {
    rtime = new Date();
    realTime.innerHTML = rtime;
}, 1000);

//Audio
function bell() {
    audio.play();
    setTimeout(() => {
        img.src = "https://png.pngtree.com/png-vector/20220330/ourmid/pngtree-time-management-concept-business-people-working-near-the-big-clock-schedule-png-image_4520217.png";
        para.innerHTML = "🔔 Weak-UP Time ⏰"
    }, 10000);
}



const para = document.getElementById("para");
const setAlarm = document.getElementById("btn");
const img = document.getElementById("imgbox");
setAlarm.addEventListener("click", () => {
    alarmDate = new Date(
        `${year}-${month}-${date} ${hours.value}:${mins.value}:${secs.value}`
    );

    timeforAlarm = new Date();

    alarmTime = alarmDate - timeforAlarm;
    console.log(alarmTime);
    if (alarmTime >= 0) {
        document.getElementById("output").innerHTML = `Your Alarm are registered Now!.`;
    } else {
        document.getElementById("output").innerHTML  = `Samay se piche chalne ka shauk kyu hai aapko? Sahi se time daalo`;
    }


    //image not change
    if (alarmTime >= 0) {
        setTimeout(() => {
            bell();
            document.getElementById("imgbox").innerHTML =
                `  
            <div class="jumbotron", style= "width:250px;height:250px">
                    <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
                <lord-icon
                    src="https://cdn.lordicon.com/mdbykuhq.json"
                     trigger="loop"
                     delay="2000"
                    style="width:250px;height:250px">
               </lord-icon>
             </div> 
`
            para.innerHTML = "Arey bhai sone do mat jagao!";
        }, alarmTime);
    }
});

//Clear Alarm
const clearAlarm = document.getElementById("clearAlarm");

clearAlarm.addEventListener("click", () => {
    audio.pause();
    let a = document.getElementById("output").innerHTML = "Alarm Cleared";  
   setInterval( () => { a.removeAttribute = " ";  }, 2000)
  
    // img.src = "https://png.pngtree.com/png-vector/20220330/ourmid/pngtree-time-management-concept-business-people-working-near-the-big-clock-schedule-png-image_4520217.png";
});

//interval of set alarm was not gone 