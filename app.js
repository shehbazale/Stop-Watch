const hours = document.querySelector('#hour');
const minutes = document.querySelector('#minute');
const seconds = document.querySelector('#second');

let start = false;
let second =0;
let minute = 0;
let hour = 0;
let timeOut=null;
//   start button function
  function startFunction(){
    if(timeOut!==null){
        clearInterval(timeOut)
    }
    timeOut = setInterval(timer, 1000);
}
// timer counter function
function timer(){
    second +=1;
    if(second===60){
        minute +=1;
        second=0;
    
    if(minute===60){
        hour +=1;
        minute=0;
    }
}
let updatedHour = hour<10 ? "0" + hour: hour;
let updatedMinute = minute<10 ? "0" + minute: minute;
let updatedSecond = second<10 ? "0" + second: second;
    seconds.innerHTML = updatedSecond;
    minutes.innerHTML = updatedMinute;
    hours.innerHTML = updatedHour; 
}
// stop button function
  function stopFunction(){
    clearInterval(timeOut)
  }
// reset button function
function resetFunction(){
   clearInterval(timeOut)
    second =0;
    minute = 0;
    hour = 0;
    seconds.innerHTML = '00';
        minutes.innerHTML = '00';
        hours.innerHTML = '00';
}