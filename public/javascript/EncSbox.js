let animation3 = anime({
  // targets: '.game-container',
  // translateY: 10,
  // // opacity: 0,
  targets: '.right',
  translateX: 0,
  opacity:0,
  duration:0,
  easing: 'easeInOutQuad'

});

let animation1 = anime({
    // targets: '.game-container',
    // translateY: 10,
    // // opacity: 0,
    // delay: 1000
    targets: '.left',
    translateX: 300,
    opacity:0,
    easing: 'easeInOutQuad'
  
  });


  let animation2 = anime({
    // targets: '.game-container',
    // translateY: 10,
    // // opacity: 0,
    delay: 1000,
    targets: '.right',
    translateX: 200,
    opacity:1,
    duration:1000,
    easing: 'easeInOutQuad'
  
});

