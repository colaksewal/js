//show time fonksiyonunu yazmamız gerek
// saati almamız gerekiyor tarih olultur ondan da saat dakika saniye özelliklerini al
// Dom ile elementi al 

function showTime(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = addZero(hour);
    minute = addZero(minute);
    second = addZero(second);

    let time = hour + ":" + minute + ":" + second ;

    document.querySelector("#myClock").innerHTML = time;

    setTimeout(showTime,1000);
}


function addZero(number){
    if(number < 10){
        return "0" + number;
    }else 
        return number;
}

  
showTime();