let items, nbSlide, next, before, count;
items = document.querySelectorAll('img');
nbSlide = items.length;
next = document.querySelector('#right');
before = document.querySelector('#left');
count = 0;

let app =({
    slideNext () {
        items[count].classList.remove('active');
    
        if(count < nbSlide - 1){
            count++;
        } else {
            count = 0;
        }
    
        items[count].classList.add('active')
        console.log(count);
        
    },
    slideBefore () {
        items[count].classList.remove('active');
    
        if(count > 0){
            count--;
        } else {
            count = nbSlide - 1;
        }
    
        items[count].classList.add('active')
        
    },
    keyPress (e) {
        console.log(e);
        
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