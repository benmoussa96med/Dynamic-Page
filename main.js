//DOM
const time =document.querySelector('#time');
const greeting =document.querySelector('#greeting');
const name =document.querySelector('#name');
const focus =document.querySelector('#focus');
const showAmPm = true;

//show time
function showTime(){
    let Today =new Date(),
    hour=Today.getHours(),
    min=Today.getMinutes(),
    sec=Today.getSeconds();
//set AM or PM
const ampm=hour>=12 ?'PM':'AM';
hour =hour %12 || 12 ; //12hr Format
time.innerHTML=`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ?ampm:''}`;
setTimeout(showTime,1000);
}
function addZero(n){//add zeros
    return (parseInt(n,10)<10?'0':'')+n;
}
function setGb(){
    let Today =new Date(),
    hour=Today.getHours();
    if(hour <12){
        document.body.style.backgroundImage="url('https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
        greeting.textContent='Good Morning';
        document.body.style.color='white';

    }
    else if(hour<18){
        document.body.style.backgroundImage="url('img/afternoon.jpg')";
        greeting.textContent='Good Afternoon';
    }
    else{
        document.body.style.backgroundImage="url('https://i.ibb.co/924T2Wv/night.jpg')"  /*"url('img/night.jpg')"*/;
        greeting.textContent='Good night';
        document.body.style.color='white';
    }
}
function setName(e){
    if(e.type==='Keypress'){
if(e.which===13 || e.keyCode==13){
    localStorage.setItem('name',e.target.innerHTML);
    name.blur(); }
    }
    else{
        localStorage.setItem('name',e.target.innerHTML);
    }
}
function setFocus(e){
    if(e.type==='Keypress'){
if(e.which===13 || e.keyCode==13){
    localStorage.setItem('focus',e.target.innerHTML);
    focus.blur(); }
    }
    else{
        localStorage.setItem('focus',e.target.innerHTML);
    }
}
function GetName(){
if(localStorage.getItem('name')===null){
    name.textContent='[Add Name]';
}
else{
    name.textContent=localStorage.getItem('name');
}
}
function GetFocus(){
    if(localStorage.getItem('focus')===null){
        focus.textContent='[Add Focus]';
    }
    else{
        focus.textContent=localStorage.getItem('focus');
    }
    }
name.addEventListener('key',setName);
name.addEventListener('blur',setName);
focus.addEventListener('key',setFocus);
focus.addEventListener('blur',setFocus);

///Run
showTime();
setGb();
GetName();
GetFocus();