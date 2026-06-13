// ===========================
// LOADING SCREEN
// ===========================

window.onload = function(){

setTimeout(()=>{

document.getElementById("loader").style.display="none";

document.getElementById("login").style.display="flex";

},3000);

}






// ===========================
// HIDE ALL PAGES
// ===========================

function hideAll(){

let pages =
document.querySelectorAll("section");


pages.forEach(page=>{

page.style.display="none";

});

}







// ===========================
// NEXT PAGE
// ===========================


function nextPage(pageName){


hideAll();


document.getElementById(pageName)
.style.display="flex";


heartBlast();


// typing start

if(pageName=="story"){

startTyping();

}


}








// ===========================
// PASSWORD
// ===========================


function unlock(){


let pass =
document.getElementById("password").value;



if(pass=="rakhi18"){


nextPage("gift");


}

else{


alert("😜 Wrong Password ❤️");


}


}









// ===========================
// GIFT OPEN
// ===========================


function openGift(){


// music

let music =
document.getElementById("music");


music.volume=0.5;


music.play();



// go countdown

nextPage("countdown");


startCountdown();


}










// ===========================
// COUNTDOWN
// ===========================


function startCountdown(){


let number=3;


let count =
document.getElementById("count");


let timer =
setInterval(()=>{


count.innerHTML=number;


number--;



if(number<0){


clearInterval(timer);


nextPage("birthday");


}


},1000);


}










// ===========================
// TYPING MESSAGE
// ===========================


let typingText =

"Some people come into life unexpectedly... but become the most special part of it ❤️ Thank you for being that special person ✨";



let index=0;



function startTyping(){


let box =
document.getElementById("typing");


box.innerHTML="";


index=0;


type();


}



function type(){


if(index < typingText.length){


document.getElementById("typing")
.innerHTML +=
typingText.charAt(index);



index++;


setTimeout(type,70);


}


}









// ===========================
// HEART BLAST
// ===========================


function heartBlast(){


for(let i=0;i<45;i++){


let heart =
document.createElement("div");



let icons =
["❤️","💖","✨","🎂","🎁"];



heart.innerHTML =
icons[
Math.floor(Math.random()*icons.length)
];



heart.style.position="fixed";


heart.style.left =
Math.random()*100+"vw";


heart.style.top="-20px";


heart.style.fontSize =
(Math.random()*25+20)+"px";


heart.style.zIndex="1000";


heart.style.animation =
"fallDown 3s linear";


document.body.appendChild(heart);




setTimeout(()=>{


heart.remove();


},3000);


}


}









// ===========================
// FALL ANIMATION
// ===========================


let style =
document.createElement("style");


style.innerHTML=`

@keyframes fallDown{


to{


transform:
translateY(110vh)
rotate(360deg);


opacity:0;


}


}

`;


document.head.appendChild(style);









// ===========================
// SECRET BUTTON
// ===========================


function secret(){


alert(
"😂 Maine bola tha don't click...\n\nBut ek aur baat ❤️\n\nAlways keep smiling ✨"
);



nextPage("final");


}