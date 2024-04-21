// Slider med tips til en god kode

// hentning af html
let tips = document.querySelectorAll('.slideinfo .slider .tips');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;

function loadShow() {
    let stt = 0;
    tips[active].style.transform = 'none';
    tips[active].style.zIndex = 1;
    tips[active].style.filter = 'none';
    tips[active].style.opacity = 1;
// skift mod højre
    for (let i = active + 1; i < tips.length; i++) {
        stt++;
        tips[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        tips[i].style.zIndex = -stt;
        tips[i].style.filter = 'blur(5px)';
        tips[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
// skift mod venstre
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        tips[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        tips[i].style.zIndex = -stt;
        tips[i].style.filter = 'blur(5px)';
        tips[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

loadShow();
// button knap mod højre 
next.onclick = function () {
    active = active + 1 < tips.length ? active + 1 : active;
    loadShow();
}
// button knap mod venstre
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}

