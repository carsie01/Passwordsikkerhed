let tips = document.querySelectorAll('slideinfo .slider .tips');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;
function loadShow(){
    let stt =0;
    tips[active].style.transform = `none`;
    tips[active].style.zIndex = 1;
    tips[active].style.filter = 'none'
    tips[active].style.opacity = 1;
    for(var i = active + 1; i < tips.length; i++){
        stt++
        tips[i].style.transform = `translateX(${120*stt}px) scale(${ 1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        tips[i].style.zIndex = -stt;
        tips[i].style.filter = 'blur(5px)'
        tips[i].style.opacity = stt > 2 ? 0 :0.6;
    }

    stt = 0;
    for(var i = active - 1; i >= 0; i--){
        stt++;
        tips[i].style.transform = `transLateX(${-120*stt}px) scale(${ 1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        tips[i].style.zIndex = -stt;
        tips[i].style.filter = 'blur(5px)'
        tips[i].style.opacity = stt > 2 ? 0 :0.6;
    }
}
loadShow();
next.onclick = function(){
    active = active + 1 <tips.length ? active + 1 : active;
    loadShow();
}
