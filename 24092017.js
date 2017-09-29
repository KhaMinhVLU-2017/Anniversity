setInterval(time,1000);
function time() {
var now =new Date();
var nowtrue= new Date(now.getFullYear(),now.getMonth()+1,now.getDate());
var memory = new Date(2016,2,19);

var timenow = nowtrue.getTime();
var timememory = memory.getTime();

var rentime =timenow-timememory;

	var s= Math.floor(rentime/1000);
	var m= Math.floor(s/60);
	var h= Math.floor(m/60);
	var d= Math.floor(h/24);

	h%=24;
	m%=60;
	s%=60;

	h=(h<10) ?"0"+h:h;
	m=(m<10) ?"0"+m:m;
	s=(s<10) ?"0"+s:s;

	document.getElementById('Day').innerHTML=d;
	document.getElementById('Hour').innerHTML=now.getHours()+"h";
	document.getElementById('Minute').innerHTML=now.getMinutes()+"m";
	document.getElementById('second').innerHTML=now.getSeconds()+"'s";

}