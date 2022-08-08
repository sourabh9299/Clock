let arr = ["MON","TUE","WED","THUR","FRI","SAT","SUN"]; 
function time(){
 
    var d = new Date();
    var day= d.getDay() -1 ;
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    var a ;  
  if(h>12){
     a = "PM"; 
  } else{
    a = "AM"
  }
  let fdate = arr[day];
    h = h - 12; 
document.getElementById("clock-box").innerHTML= h +":"+ m + ":" + s + " " + a  ;
document.getElementById("datebox").innerHTML=fdate;
}

setInterval(time,1000);