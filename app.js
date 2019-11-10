//Pick out HTML elements
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
const section = document.querySelector('section');
const end = section.querySelector('h1');

//Initialize ScrollMagic
const controller = new ScrollMagic.Controller();

//Here, we define the things ScrollMagic should pay attention to
let scene = new ScrollMagic.Scene({
    duration: 9000, //how long the scrollbar should be 'hijacked'
    triggerElement: intro,
    triggerHook: 0 //starts at the very top of the frame
})
// .addIndicators() //allows you add 'trigger' and 'end' indicators on your screen
.setPin(intro) //here I'm setting the intro to 'persist' for the duration of 9000, no matter how long I scroll, it will always be 'sticky'
.addTo(controller);

//Animated the text 

const textAnim = TweenMax.fromTo(text, 3, {opacity:1}, {opacity:0});
let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

//TIME TO DO THE ANIMATIONS!
const accelAmount = 0.1; //this basically sets an 'easing' for when you scroll the video. If you set it to '1', it will stop as soon as you stop scrolling. 
let scrollPos = 0;
let delay = 0;

scene.on('update', e => {
    scrollPos = e.scrollPos/1000;
    console.log(scrollPos)
});

setInterval (()=> {
    delay += (scrollPos - delay) * accelAmount;
    console.log(scrollPos, delay);

    video.currentTime = delay;
}, 33.3)

