function checkPass(){

let p=document.getElementById("pass").value;

if(p==="Kallu"){

document.getElementById("lockScreen").style.display="none";

document.getElementById("main").style.display="block";

typeText();

}else{

alert("Wrong Code ❌ Hint : Kallu");

}
}

let text =
"Today is a very special day because someone very special was born ❤️ 🎊 ✨";

let i=0;

function typeText(){

if(i<text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typeText,50);

}
}

/* HEARTS */

setInterval(()=>{

let h=document.createElement("div");

h.className="heart";

h.innerHTML="✨❤️🎉";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(15+Math.random()*20)+"px";

document.body.appendChild(h);

setTimeout(()=>{
h.remove();
},5000);

},300);

/* OPEN SURPRISE */

function startSurprise(){

    document.getElementById("photoReveal").style.display="none";

    document.getElementById("sec1").style.display="block";
    document.getElementById("sec2").style.display="block";
    document.getElementById("sec3").style.display="block";

    document.getElementById("sec1").scrollIntoView({
        behavior:"smooth"
    });
}
function cutCake(){


    document.getElementById("cakeArea").style.display = "none";


    document.getElementById("cake").innerHTML = "🍰";

    document.getElementById("cakeBtn").style.display = "none";

    document.getElementById("cakeMsg").innerHTML =
    "🎉 Happy Birthday Pragya ❤️ 🎉";

    document.getElementById("photoReveal").style.display = "flex";

    document.getElementById("birthdaySong").play();

    for(let i=0;i<100;i++){

        let c=document.createElement("div");

        c.innerHTML=["🎉","🎊","❤️","✨","💖"]
        [Math.floor(Math.random()*5)];

        c.style.position="fixed";
        c.style.left=Math.random()*100+"vw";
        c.style.top="-20px";
        c.style.fontSize="25px";
        c.style.animation="fall 4s linear forwards";

        document.body.appendChild(c);

        setTimeout(()=>{
            c.remove();
        },4000);
    }

    setTimeout(()=>{
        document.getElementById("surpriseBtn").style.display="inline-block";
    },2000);
}
function openVideo(){

    // Birthday song band
    document.getElementById("birthdaySong").pause();

    // Video open
    document.getElementById("videoPopup").style.display = "flex";

    // Video play
    document.getElementById("birthdayVideo").play();
}

function closeVideo(){

    // Video band
    document.getElementById("videoPopup").style.display = "none";

    document.getElementById("birthdayVideo").pause();
    document.getElementById("birthdayVideo").currentTime = 0;

    // Birthday song fir se start
    document.getElementById("birthdaySong").play();
}
