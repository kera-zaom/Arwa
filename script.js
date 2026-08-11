// ==========================
// LOVE WEBSITE SCRIPT
// ==========================

const password = "A";

const music = document.getElementById("bgMusic");

const playBtn = document.getElementById("playBtn");

function unlock(){

const input=document.getElementById("passInput").value.toLowerCase();

if(input===password){

document.getElementById("lock-screen").classList.remove("active");

document.getElementById("page1").classList.add("active");

music.play().catch(()=>{});

typeWriter();

}else{

alert("كلمة السر غلط ي عمري");
 
}

}


function goToPage(id){

document.querySelectorAll(".screen").forEach(screen=>{

screen.classList.remove("active");

});

document.getElementById(id).classList.add("active");

window.scrollTo({

top:0,

behavior:"smooth"

});

}


// تشغيل وإيقاف الموسيقى

if(playBtn){

playBtn.onclick=function(){

if(music.paused){

music.play();

playBtn.innerHTML="⏸";

}else{

music.pause();

playBtn.innerHTML="▶";

}

}

}



// ==========================
// Typing Effect
// ==========================

const message=`حبيت أعمل هدية جديدة وعايزين نملأها صورنا بقى...

بس قبل أي حاجة...

عايزك تعرفي إني بحبك وربنا يخليكي ليا يا قلبي ❤️

ويلا بقى انبهري 😂❤️`;

function typeWriter(){

const text=document.getElementById("typingText");

if(!text) return;

text.innerHTML="";

let i=0;

const timer=setInterval(()=>{

text.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(timer);

}

},45);

}

// ==========================
// LOVE COUNTER
// ==========================

const startDate = new Date("2025-10-03T00:00:00");

function updateCounter() {

    const now = new Date();

    const diff = now - startDate;

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(totalSeconds / 86400);

    const hours = Math.floor((totalSeconds % 86400) / 3600);

    const minutes = Math.floor((totalSeconds % 3600) / 60);

    const seconds = totalSeconds % 60;

    if(document.getElementById("days")){

        document.getElementById("days").textContent = days;

        document.getElementById("hours").textContent = hours;

        document.getElementById("minutes").textContent = minutes;

        document.getElementById("seconds").textContent = seconds;

    }

}

setInterval(updateCounter,1000);

updateCounter();



// ==========================
// Floating Hearts
// ==========================

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="100vh";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="999";

    heart.style.transition="all 8s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.top="-100px";

        heart.style.opacity="0";

        heart.style.transform="translateX("+(Math.random()*200-100)+"px) rotate(360deg)";

    },50);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,900);



// ==========================
// Photo Hover Animation
// ==========================

document.querySelectorAll(".photo-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="scale(1.05)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="scale(1)";

    });

});



// ==========================
// Fade Animation
// ==========================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});



// ==========================
// Click Effect
// ==========================

document.addEventListener("click",(e)=>{

    const spark=document.createElement("span");

    spark.innerHTML="✨";

    spark.style.position="fixed";

    spark.style.left=e.clientX+"px";

    spark.style.top=e.clientY+"px";

    spark.style.fontSize="20px";

    spark.style.pointerEvents="none";

    spark.style.transition=".8s";

    document.body.appendChild(spark);

    setTimeout(()=>{

        spark.style.transform="translateY(-80px) scale(2)";

        spark.style.opacity="0";

    },50);

    setTimeout(()=>{

        spark.remove();

    },800);

});



// ==========================
// Console Message ❤️
// ==========================

console.log("LOVE my everything ❤️");
