// var b1=document.getElementById("b1");
// var b2=document.getElementById("b2");
// var b3=document.getElementById("b3");
// var b4=document.getElementById("b4");
// var b5=document.getElementById("b5");
// var b6=document.getElementById("b6");
// var b7=document.getElementById("b7");
// var b8=document.getElementById("b8");
// var b9=document.getElementById("b9");
// var b10=document.getElementById("b10");
// var b11=document.getElementById("b11");
// var b12=document.getElementById("b12");
// var b13=document.getElementById("b13");
// var b14=document.getElementById("b14");
// var b15=document.getElementById("b15");
// var b16=document.getElementById("b16");



function add(x){
    document.getElementById("result").value+=x;
}

function cle(){
    document.getElementById("result").value="";
}

function solve(){
    var x=document.getElementById("result").value;
    var y= eval(x) ;
    document.getElementById("result").value=y;
}