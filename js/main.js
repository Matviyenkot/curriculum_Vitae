
  document.addEventListener("DOMContentLoaded", function(event) {
     

function progresBar( skill, percent){
    const parent = document.querySelector('.skills');

    const line = document.createElement('div');

        line.innerHTML = `
        <div id="greyProgress">
                    <div class="greenBar" style="width: ${percent}%"></div>
                    <div>${skill}  ${percent}%</div>
        </div>
        `;

        parent.append(line);
}



progresBar( 'HTML', '80');
progresBar( 'CSS', '75');
progresBar( 'JavaScript', '78');
progresBar( 'PHP', '55');
progresBar( 'English', '70');


//rotation

const icons = document.querySelectorAll('.link');

function animation(){
    icons.forEach( e => {
        e.classList.add('rotation');
        setTimeout(() => e.classList.remove('rotation'), 1000);
    });

    
}

setInterval( animation, 5000);

// Slider


const images = document.querySelectorAll('.header_slider-line img'),
      sliderLine = document.querySelector('.header_slider-line'),
      slider = document.querySelector('.header_slider');

let counter = 1;
let width;
let offset = 0;



function init(){
  
    width = document.querySelector('.header_slider').offsetWidth;
    sliderLine.getElementsByClassName.width = width*images.length + 'px';
    images.forEach(item =>{
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });

    rollSlider();

}

window.addEventListener('resize', init);
window.addEventListener('resize', slide);



function rollSlider(){
    sliderLine.style.transform = 'translate(-' + counter*width + 'px';
}

function slide(){
    
    if (offset >= width * (images.length - 1)) {
        offset = 0;
        counter = 1;
    } else {
        offset += width; 
        counter ++;           
    }

    sliderLine.style.transform = `translateX(-${offset}px)`;

    

    dots.forEach(dot => dot.style.opacity = '.5');
    dots[counter-1].style.opacity = 1;
}

const indicators = document.createElement('ol'),
       dots =[];

 indicators.classList.add('carousel-indicators');

 slider.append(indicators);

 for(let i =0; i< images.length; i++){
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.classList.add('dot');
   

    if(i==0){
        dot.style.opacity = 1;
    }

    indicators.append(dot);

    dots.push(dot);
}

dots.forEach(dot => {
    dot.addEventListener('click', (e) =>{
        const slideTo = e.target.getAttribute('data-slide-to');

        counter = slideTo;

        offset = width * (slideTo - 1);

        sliderLine.style.transform = `translateX(-${offset}px)`;

        

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[counter -1].style.opacity = 1;


    });
});

init();
slide();

setInterval(slide, 10000);


});