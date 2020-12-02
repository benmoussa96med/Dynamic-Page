//DOM
const time =document.querySelector('#time');
const greeting =document.querySelector('#greeting');
const name =document.querySelector('#name');
const focus =document.querySelector('#focus');
//show time
function showTime(){
    let Today =new Date(),
    hour=Today.getHours(),
    min=Today.getMinutes(),
    sec=Today.getSeconds();
//set AM or PM
const ampm=hour>=12 ?'PM':'AM';
hour =hour %12 || 12 ; //12hr Format
time.innerHTML=`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
setTimeout(showTime,1000);
}
function addZero(n){//add zeros
    return (parseInt(n,10)<10?'0':'')+n;
}
function setGb(){
    let Today =new Date(),
    hour=Today.getHours();
    if(hour <12){
        document.body.style.backgroundImage="url('img/morning.jpg')";
        greeting.textContent='Good Morning';
    }
    else if(hour<18){
        document.body.style.backgroundImage="url('img/afternoon.jpg')";
        greeting.textContent='Good Afternoon';
    }
    else{
        document.body.style.backgroundImage="url('img/night.jpg')";
        greeting.textContent='Good night';
    }
}

//Run
showTime();
setGb();