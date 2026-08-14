const horaEl = document.querySelector(".hora")


const minutoEl = document.querySelector(".minuto")


const segundoEl = document.querySelector(".segundo")

function updateClock(){
    const currentDate   = new Date();
    setTimeout(updateClock, 1000);
    console.log(currentDate    );
    const hora = currentDate.getHours();
    const minuto = currentDate.getMinutes();
    const segundo = currentDate.getSeconds();

    const horaDeg = (hora / 12) * 360;
    horaEl.style.transform = `rotate(${horaDeg}deg)`;
   
       const minutoDeg = (minuto / 60) * 360;
    minutoEl.style.transform = `rotate(${minutoDeg}deg)`;
    
    const segundoDeg = (segundo / 60) * 360;
    segundoEl.style.transform = `rotate(${segundoDeg}deg)`;

}
updateClock();
