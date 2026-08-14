const DiaEl = document.getElementById("Dias")

const horaEl = document.getElementById("horas")

const minutosEl = document.getElementById("minutos")

const segundosEl = document.getElementById("segundos")

const newYearTime = new Date("jan 1, 2027 00:00:00").getTime() 



function updateCountdown(){
    const now = new Date().getTime();
    const gap = newYearTime - now;
    const second = 1000;
    const minute = second * 60;
    const hour =  minute * 60;
    const day = hour *24; 
    const d = Math.floor(gap/day)
    const h = Math.floor((gap % day /hour))
    const m = Math.floor((gap % hour) / minute)
    const s = Math.floor((gap % minute)/ second)
    DiaEl.innerText = d;    
    horaEl.innerText = h;
    minutosEl.innerText = m;
    segundosEl.innerText = s;
    setTimeout(updateCountdown,1000)

}

updateCountdown()



