/*=========================================
        BLACK & GOLD BIRTHDAY CARD
            script.js (PART 1)
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const title = document.querySelector(".title");
    const name = document.querySelector(".name");
    const message = document.querySelector(".message");

    // Initial Styles
    title.style.opacity = "0";
    name.style.opacity = "0";
    message.style.opacity = "0";

    title.style.transform = "translateY(-40px)";
    name.style.transform = "translateY(-40px)";
    message.style.transform = "translateY(40px)";

    title.style.transition = "1.2s ease";
    name.style.transition = "1.2s ease";
    message.style.transition = "1.2s ease";

    // Entrance Animation
    setTimeout(() => {
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
    }, 300);

    setTimeout(() => {
        name.style.opacity = "1";
        name.style.transform = "translateY(0)";
    }, 900);

    setTimeout(() => {
        message.style.opacity = "1";
        message.style.transform = "translateY(0)";
    }, 1600);

});


/*=========================================
        Floating Sparkles
=========================================*/

const sparkCount = 50;

for(let i = 0; i < sparkCount; i++){

    const spark = document.createElement("div");

    spark.className = "spark";

    spark.style.left = Math.random() * 100 + "vw";

    spark.style.top = Math.random() * 100 + "vh";

    spark.style.animationDuration =
    (2 + Math.random() * 5) + "s";

    spark.style.animationDelay =
    Math.random() * 4 + "s";

    document.body.appendChild(spark);

}


/*=========================================
        Mouse Glow Effect
=========================================*/

document.addEventListener("mousemove", e=>{

    document.body.style.backgroundPosition =
    `${e.clientX/60}px ${e.clientY/60}px`;

});


/*=========================================
        Cake Glow Animation
=========================================*/

const cake = document.querySelector(".cake");

setInterval(()=>{

    cake.style.filter =
    "drop-shadow(0 0 20px gold)";

    setTimeout(()=>{

        cake.style.filter =
        "drop-shadow(0 0 8px gold)";

    },700);

},1500);
/*=========================================
        REAL CONFETTI EFFECT
=========================================*/

function createConfetti() {

    const confetti = document.createElement("div");

    confetti.className = "confetti-piece";

    confetti.style.left = Math.random() * window.innerWidth + "px";

    confetti.style.background =
        ["gold", "#FFD700", "#ffffff", "#f7c948"][
            Math.floor(Math.random() * 4)
        ];

    confetti.style.animationDuration =
        (3 + Math.random() * 3) + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {

        confetti.remove();

    }, 6000);

}

setInterval(createConfetti, 180);


/*=========================================
      RANDOM BALLOON MOVEMENT
=========================================*/

const balloons = document.querySelectorAll(".balloon");

balloons.forEach((balloon, index) => {

    let direction = 1;

    setInterval(() => {

        balloon.style.transform =
            `translateX(${direction * 20}px)`;

        direction *= -1;

    }, 1800 + index * 300);

});


/*=========================================
      AUTO TITLE COLOR GLOW
=========================================*/

const titleText = document.querySelector(".title");

setInterval(() => {

    titleText.style.color = "#FFD700";

    setTimeout(() => {

        titleText.style.color = "#FFFFFF";

    }, 700);

}, 2200);


/*=========================================
      AUTO SCROLL SHINE
=========================================*/

const container = document.querySelector(".container");

setInterval(() => {

    container.style.boxShadow =
        "0 0 80px gold";

    setTimeout(() => {

        container.style.boxShadow =
            "0 0 30px rgba(255,215,0,.25)";

    }, 800);

}, 2500);
/*=========================================
        FIREWORK EFFECT
=========================================*/

function createFirework() {

    const firework = document.createElement("div");

    firework.className = "firework";

    firework.style.left =
        Math.random() * window.innerWidth + "px";

    firework.style.top =
        Math.random() * (window.innerHeight / 2) + "px";

    document.body.appendChild(firework);

    setTimeout(() => {

        firework.remove();

    }, 1200);

}

setInterval(createFirework,2500);


/*=========================================
        MOUSE CLICK SPARK
=========================================*/

document.addEventListener("click",(e)=>{

    for(let i=0;i<12;i++){

        const spark=document.createElement("div");

        spark.className="clickSpark";

        spark.style.left=e.clientX+"px";

        spark.style.top=e.clientY+"px";

        spark.style.setProperty(
            "--x",
            (Math.random()*200-100)+"px"
        );

        spark.style.setProperty(
            "--y",
            (Math.random()*200-100)+"px"
        );

        document.body.appendChild(spark);

        setTimeout(()=>{

            spark.remove();

        },1000);

    }

});


/*=========================================
        AUTO MESSAGE GLOW
=========================================*/

const msg=document.querySelector(".message");

setInterval(()=>{

    msg.style.textShadow="0 0 20px gold";

    setTimeout(()=>{

        msg.style.textShadow="none";

    },800);

},3000);


/*=========================================
        PAGE TITLE BLINK
=========================================*/

setInterval(()=>{

    document.title="🎂 Happy Birthday 🎂";

    setTimeout(()=>{

        document.title="Happy Birthday SAIMA SAUDIA";

    },1200);

},2500);
/*=========================================
        TYPEWRITER EFFECT
=========================================*/

const paragraphs = document.querySelectorAll(".message p");

paragraphs.forEach((p, index) => {

    const text = p.innerText;

    p.innerText = "";

    setTimeout(() => {

        let i = 0;

        const typing = setInterval(() => {

            p.innerText += text.charAt(i);

            i++;

            if (i >= text.length) {

                clearInterval(typing);

            }

        }, 30);

    }, index * 2500);

});

/*=========================================
        MUSIC CONTROL
=========================================*/

const music = document.querySelector("audio");

const musicBtn = document.createElement("button");

musicBtn.innerHTML = "🎵 Music";

musicBtn.className = "music-btn";

document.body.appendChild(musicBtn);

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "🔊 Playing";

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵 Music";

    }

});


/*=========================================
        GOLD PARTICLES
=========================================*/

setInterval(() => {

    const particle = document.createElement("div");

    particle.className = "goldParticle";

    particle.style.left = Math.random() * window.innerWidth + "px";

    particle.style.top = window.innerHeight + "px";

    document.body.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, 5000);

}, 300);


/*=========================================
        FINAL GLOW EFFECT
=========================================*/

setInterval(() => {

    document.body.style.filter = "brightness(1.08)";

    setTimeout(() => {

        document.body.style.filter = "brightness(1)";

    }, 700);

}, 5000);


/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log("🎂 Happy Birthday SAIMA SAUDIA 🎂");
