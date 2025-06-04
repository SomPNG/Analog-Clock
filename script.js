const wrapper = document.querySelector(".wrapper");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const themeBtn = document.querySelector(".mode-switch");

function updateTime(){
    let date = new Date();

    let secToDeg = (date.getSeconds() / 60) * 360;
    secondHand.style.transform = `rotate(${secToDeg}deg)`;

    let minuteToDeg = (date.getMinutes() / 60) * 360;
    minuteHand.style.transform = `rotate(${minuteToDeg}deg)`;

    let hourToDeg = ((date.getHours() % 12) + date.getMinutes() / 60) * 30;
    hourHand.style.transform = `rotate(${hourToDeg}deg)`;
}

updateTime();

setInterval(updateTime, 1000);

themeBtn.addEventListener('click',()=>{
    wrapper.classList.toggle('dark');
    if(isDarkMode){
        themeBtn.innerText = 'Dark Mode';
        isDarkMode = false;
    }
    else{
        themeBtn.innerText = 'Light Mode';
        isDarkMode = true;
    }
});

let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
if(isDarkMode){
    wrapper.classList.add('dark');
    themeBtn.innerText = 'Light Mode';
}
else{
    wrapper.classList.remove('dark');
    themeBtn.innerText = 'Dark Mode';
}