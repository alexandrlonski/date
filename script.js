window.addEventListener('DOMContentLoaded', function() {
'use strict';

setInterval( function(){
let date = new Date(), 
    hour = date.getHours(),
    week = [ "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "<i>Суббота</i>", "<i>Воскресенье</i>" ],
    today = (6 + new Date().getDay()) % 7,
    day = week[today],
    
    timeOfDay = function() {
      if(hour >= 0 && hour < 5 ){
        return "Доброй ночи";
      } else if(hour > 4 && hour < 12){
        return "Доброе утро";
      } else if(hour > 11 || hour < 18){
        return "Добрый день";
      } else if(hour > 17 || hour < 24){
        return "Добрый вечер";
      } else {
       return "Доброй ночи";
      }
      
    },

    countTimer = function (deadline){
       let dateStop = new Date(deadline).getTime(),
         dateNow = new Date().getTime(),
         timeRemaining = (dateStop - dateNow) / 1000,
         dayNewYear = Math.floor(timeRemaining / 60 / 60 / 24 );
       return dayNewYear;
       
   };
   
document.getElementById('dateOne').innerHTML = `${timeOfDay()}`;
document.getElementById('dateTwo').innerHTML = `Сегодня: ${day}`;
document.getElementById('dateThree').innerHTML = `Текущее время: ${ date.toLocaleTimeString('en') }`;
document.getElementById('dateFour').innerHTML = `До нового года осталось ${countTimer('1 January 2021')} дней`;

  } , 1000);

});  
