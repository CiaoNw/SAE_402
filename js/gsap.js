const element = document.querySelector('#souris');
gsap.to("#souris", {
    y:-100,
    duration: 0.9,
    delay: 0.5,
    ease:"circ.out",
    repeat:-1,
    yoyo:true
}) 

function opacity(){
    document.getElementById('moi').style.opacity="1";
}

function opacityy(){
    document.getElementById('moi').style.opacity="0";
}
