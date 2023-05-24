//array
const img = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'] ;
console.log(img);

let slider = document.querySelector('.slider');

let slider_cont = '';

let active_element = 0

for (let i = 0; i < img.length; i++) {

    let visible_img = img[i];
    slider_cont += `
        <div class="slide">
            <img src="./${visible_img}">
        </div>`;
}

slider.innerHTML = slider_cont;

let slides = ''
document.getElementsByClassName('slide')[active_element].classList.add('active')

let prev_button = document.querySelector('.prev')
let next_button = document.querySelector('.next')

prev_button.addEventListener('click', function() {

    if(active_element === 0) {

        active_element = img.length - 1;
    }
    else {
        active_element--;
    }

    document.querySelector('.slide.active').classList.remove('active')
    document.getElementsByClassName('slide')[active_element].classList.add('active')
        
})

next_button.addEventListener('click', function() {

    if(active_element === img.length -1) {

        active_element = 0;
    }
    else {
        active_element++;
    }

    document.querySelector('.slide.active').classList.remove('active')
    document.getElementsByClassName('slide')[active_element].classList.add('active')
        
})
