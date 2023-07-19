function currentTime(){
    var date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let when = "AM";
    if(hh >= 12 && mm>=01){
        when="PM";

    }
    document.querySelector('h1').innerHTML=hh + ":" +mm + ":" +ss + ":" +when;
//}
setTimeout(function(){
    //window.location.reload(1);
    currentTime();
 }, 1000);
}
currentTime();