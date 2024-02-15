const text3 = document.querySelector('.text3');
const img3 = document.querySelector('.img3');

const text7 = document.querySelector('.text7');
const img7 = document.querySelector('.img7');

const text8 = document.querySelector('.text8');
const img8 = document.querySelector('.img8');

const text10 = document.querySelector('.text10');
const img10 = document.querySelector('.img10');

const text11 = document.querySelector('.text11');
const img11 = document.querySelector('.img11');

const text12 = document.querySelector('.text12');
const img12 = document.querySelector('.img12');

const text13 = document.querySelector('.text13');
const img13 = document.querySelector('.img13');

const text14 = document.querySelector('.text14');
const img14 = document.querySelector('.img14');

function animateElements(textElement, imgElement) {
    const textPosition = textElement.getBoundingClientRect().top;
    const imgPosition = imgElement.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (textPosition < screenPosition) {
        textElement.classList.add('animate');
    } else {
        textElement.classList.remove('animate');
    }

    if (imgPosition < screenPosition) {
        imgElement.classList.add('animate');
    } else {
        imgElement.classList.remove('animate');
    }
}

window.addEventListener('scroll', function() {
    animateElements(text3, img3);
    animateElements(text7, img7);
    animateElements(text8, img8);
    animateElements(text10, img10);
    animateElements(text11, img11);
    animateElements(text12, img12);
    animateElements(text13, img13);
    animateElements(text14, img14);
});
