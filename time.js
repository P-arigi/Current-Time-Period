function showTime(){
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    //var section="AM";

    if(h==0){
      h=12;
      section="AM"
    }
    if(h>12){
       h=h-12;
       section="PM"
    }
    h=(h<10)? "0"+h:h;
    m=(m<10)? "0"+m:m;
    s=(s<10)? "0"+s:s;
      var time=h+":"+m+":"+s + " "+section;
  document.getElementById("showclock").innerHTML=time;
  //document.getElementById("showclock").textContent=time
     setTimeout(showTime, 1000)
}
showTime()