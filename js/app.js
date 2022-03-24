document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");

let items, nbSlide, next, before, count, btnSound;
    items = document.querySelectorAll('li img');
    nbSlide = items.length;
    next = document.querySelector('#right');
    before = document.querySelector('#left');
    count = 0;
    btnSound = document.getElementById('btnSound');

const music = new Audio('./asset/bat_hit.wav');
    // cliquez sur le logo pour jouer la musique
    const playSound = () => {
        music.volume = 0.1;
        music.play()
    }
    
    btnSound.addEventListener('click',playSound);

let app =({
    slideNext () {
        items[count].classList.remove('active');
    
        count < nbSlide - 1 ? count++ : count = 0;
    
        items[count].classList.add('active')
        console.log(count);
        
    },
    slideBefore () {
        items[count].classList.remove('active');
    
        count > 0 ? count-- : count = nbSlide - 1;
    
        items[count].classList.add('active')
        
    },
    keyPress (e) {
            if(e.keyCode === 37){
                app.slideBefore();
            } else if(e.keyCode === 39){
                app.slideNext();
            }
        },
})

next.addEventListener('click', app.slideNext);


before.addEventListener('click', app.slideBefore);


document.addEventListener('keydown', app.keyPress);
});