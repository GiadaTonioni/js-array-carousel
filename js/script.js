//array
let img = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'] ;
console.log(img);

let slider = document.querySelector('.slider');

let slider_cont = '';

for (let i = 0; i < img.length; i++) {

    let visible_img = img[i];
    slider_cont += `
        <div class="slide">
            <img src="${visible_img}/>
        </div>`
}

slider.innerHTML = slider_cont;

let slides = document.getElementsByClassName('slide')
console.log(slides)

let active_element = 0
slides[active_element].classList.add('active');

let prev_button = document.querySelector('.prev')
let next_button = document.querySelector('.next')

next_button.addEventListener('click', function() {

    if(active_element < (img.length - 1)) {
        slides[active_element].classList.remove('active');
        active_element++;
        slides[active_element].classList.add('active');
    }
})

prev_button.addEventListener('click', function() {

    if(active_element < 0) {
        slides[active_element].classList.remove('active');
        active_element--;
        slides[active_element].classList.add('active');
    }
})