

var newdiv=document.createElement("div");
newdiv.className="container";
document.body.append(newdiv);


var input=document.createElement("input");
input.type="text";
input.placeholder="0";
input.style.color="white";
input.setAttribute("onkeyup","press()");
newdiv.append(input);




var secdiv=document.createElement("div");
secdiv.className="div2";
newdiv.append(secdiv);

var buttonc=document.createElement("button");
buttonc.className="button";
buttonc.innerText="C";
secdiv.append(buttonc);

var buttonc=document.createElement("button");
buttonc.className="buttonc";
buttonc.innerText="/";

secdiv.append(buttonc);


var buttonc=document.createElement("button");
buttonc.className="buttonc";
buttonc.innerText="*";
secdiv.append(buttonc);

var buttonc=document.createElement("button");
buttonc.className="buttonc";
buttonc.innerText="%";
secdiv.append(buttonc);

var buttonc=document.createElement("button");
buttonc.className="buttonc";
buttonc.innerText="7";
secdiv.append(buttonc);


var buttonc=document.createElement("button");
buttonc.className="buttonc";
buttonc.innerText="8";
secdiv.append(buttonc);


var buttonc=document.createElement("button");
buttonc.className="buttonc";
buttonc.innerText="9";
secdiv.append(buttonc);

var buttonc=document.createElement("button");
buttonc.className="buttonc";
buttonc.innerText="-";
secdiv.append(buttonc);

var buttonc=document.createElement("button");
buttonc.className="buttonc";
buttonc.innerText="4";
secdiv.append(buttonc);

var buttonc=document.createElement("button");
buttonc.className="buttonc";
buttonc.innerText="5";
secdiv.append(buttonc);

var buttonc=document.createElement("button");
buttonc.className="buttonc";
buttonc.innerText="6";
secdiv.append(buttonc);

var buttonc=document.createElement("button");
buttonc.className="buttonX";
buttonc.innerText="+";
secdiv.append(buttonc);

var buttonc=document.createElement("button");
buttonc.className="buttonc";
buttonc.innerText="1";
secdiv.append(buttonc);

var buttonc=document.createElement("button");
buttonc.className="buttonc";
buttonc.innerText="2";
secdiv.append(buttonc);

var buttonc=document.createElement("button");
buttonc.className="buttonc";
buttonc.innerText="3";
secdiv.append(buttonc);

var buttonc=document.createElement("button");
buttonc.className="buttony";
buttonc.innerText="0";
secdiv.append(buttonc);

var buttonc=document.createElement("button");
buttonc.className="buttonc";
buttonc.innerText=".";
secdiv.append(buttonc);

var buttonc=document.createElement("button");
buttonc.className="buttonc";
buttonc.innerText="=";
secdiv.append(buttonc);


var buttonc=document.createElement("button");
buttonc.className="buttonc";
buttonc.innerText="AC";
secdiv.append(buttonc);



var buttons=document.querySelectorAll("button");
buttons[0].setAttribute("onclick","c()");
buttons[1].setAttribute("onclick","div()");
buttons[2].setAttribute("onclick","mult()");
buttons[3].setAttribute("onclick","modulus()");
buttons[4].setAttribute("onclick","seven()");
buttons[5].setAttribute("onclick","eight()");
buttons[6].setAttribute("onclick","nine()");
buttons[7].setAttribute("onclick","sub()");
buttons[8].setAttribute("onclick","four()");
buttons[9].setAttribute("onclick","five()");
buttons[10].setAttribute("onclick","six()");
buttons[11].setAttribute("onclick","add()");
buttons[12].setAttribute("onclick","one()");
buttons[13].setAttribute("onclick","two()");
buttons[14].setAttribute("onclick","three()");
buttons[15].setAttribute("onclick","zero()");
buttons[16].setAttribute("onclick","dot()");
buttons[17].setAttribute("onclick","eva()");
buttons[18].setAttribute("onclick","del()");

function c(){
    console.log("deleting...");
   let arr=input.value.split("");
   arr.pop();
   input.value=arr.join("");
}
function div(){
    input.value=input.value+""+buttons[1].innerText;
}

function mult(){
input.value=input.value+""+buttons[2].innerText;
}
function modulus(){
    input.value=input.value+""+buttons[3].innerText;
}
function seven(){
    input.value=input.value+""+buttons[4].innerText;
}

function eight(){
    input.value=input.value+""+buttons[5].innerText;
}


function nine(){
    input.value=input.value+""+buttons[6].innerText;
}

function sub(){
    input.value=input.value+""+buttons[7].innerText;
}
function four(){
    input.value=input.value+""+buttons[8].innerText;
}
function five(){
    input.value=input.value+""+buttons[9].innerText;
}
function six(){
    input.value=input.value+""+buttons[10].innerText;
}
function add(){
    input.value=input.value+""+buttons[11].innerText;
}
function one(){
    input.value=input.value+""+buttons[12].innerText;
}
function two(){
    input.value=input.value+""+buttons[13].innerText;
}
function three(){
    input.value=input.value+""+buttons[14].innerText;
}
function zero(){
    input.value=input.value+""+buttons[15].innerText;
}
function dot(){
    input.value=input.value+""+buttons[16].innerText;
}
function eva(){
   input.value=eval(input.value);
}
function del(){
    input.value="";
 }
 function press(){
if(input.value!=parseInt(input.value)||input.value!=parseFloat(input.value)){
input.value="Use numbers on keyboard PRESS AC";
}

 }
