const sliderImages = document.querySelectorAll('.project-block-right__img'),
    sliderLine = document.querySelector('.project-block-right__slider-line'),
    sliderDots = document.querySelectorAll('.pagination__elem-circle'),
    sliderLink = document.querySelectorAll('.proj-block-right__item'),
    sliderBtnNext = document.querySelector('.pagination__elem-next'),
    sliderBtnPrev = document.querySelector('.pagination__elem-prev');

let sliderCount = 0,
    sliderWidth;

window.addEventListener('resize', showSlide);

sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

function showSlide() {
    sliderWidth = document.querySelector('.proj-block-right').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();


function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount);
    thisLink(sliderCount);
}

function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length -1;

    rollSlider();
    thisSlide(sliderCount);
    thisLink(sliderCount);
}

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('pagination__elem-circle--active'));
    sliderDots[index].classList.add('pagination__elem-circle--active');
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
        thisLink(sliderCount);
    })
})

function thisLink(index) {
    sliderLink.forEach(item => item.classList.remove('proj-block-right__item--active'));
    sliderLink[index].classList.add('proj-block-right__item--active');
}

sliderLink.forEach((link, index) => {
    link.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
        thisLink(sliderCount);
    })
})