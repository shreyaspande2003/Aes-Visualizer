// Create a timeline with default parameters
var tl = anime.timeline({
  // easing: 'easeOutExpo',
  // duration: 750
});


tl.add({
  targets: ['.Bc1r1, .Bc2r1, .Bc3r1, .Bc4r1, .Bc1r2, .Bc2r2, .Bc3r2, .Bc4r2, .Bc1r3, .Bc2r3, .Bc3r3, .Bc4r3, .Bc1r4, .Bc2r4, .Bc3r4, .Bc4r4'],
  // borderRadius: ['0%', '50%'],
  // delay: '1000',
  // translateX: 550,
  duration:0,
  opacity:0,
  // easing: 'easeInOutQuad'
});

var t2 = anime.timeline({
  // easing: 'easeOutExpo',
  // duration: 750
  delay:1000
});

t2.add({
    targets: ['.Ac1r1', '.Ac1r2',' .Ac1r3', '.Ac1r4'],
    translateX: 650,
    borderRadius: ['0%', '50%'],
    opacity: ['1','0'],
    easing: 'easeInOutQuad'
  },0);

t2.add({
    // targets: '.Rc1r1, .Rc2r1, .Rc3r1, .Rc4r1',
    targets: '.grid-container1',
    // translateY: 120,
    translateX: -550,
    borderRadius: ['0%', '50%'],
    // opacity: ['1','0'],
    easing: 'easeInOutQuad'
  },0);

  // tl.add({
  //   targets: ['.Bc1r1, .Bc2r1, .Bc3r1, .Bc4r1'],
  //   // borderRadius: ['0%', '50%'],
  //   // delay: '1000',
  //   translateX: 550,
  //   // duration:0,
  //   opacity: ['0', '1'],
  //   easing: 'easeInOutQuad'
  // })

  t2.add({
    targets: ['.Bc1r1, .Bc2r1, .Bc3r1, .Bc4r1'],
    // borderRadius: ['0%', '50%'],
    // delay: '1000',
    translateX: 550,
    // duration:0,
    opacity: '1',
    easing: 'easeInOutQuad'
  })


  t2.add({
    targets: ['.Ac2r1', '.Ac2r2',' .Ac2r3', '.Ac2r4'],
    translateX: 650,
    borderRadius: ['0%', '50%'],
    opacity: ['1','0'],
    easing: 'easeInOutQuad'
  }, '+=200');

  t2.add({
    targets: ['.Bc1r2, .Bc2r2, .Bc3r2, .Bc4r2'],
    // borderRadius: ['0%', '50%'],
    // delay: '1000',
    translateX: 550,
    // duration:0,
    delay:1000,
    opacity: 1,
    easing: 'easeInOutQuad'
  }, '+=200')

  t2.add({
    targets: ['.Ac3r1', '.Ac3r2',' .Ac3r3', '.Ac3r4'],
    translateX: 650,
    borderRadius: ['0%', '50%'],
    opacity: ['1','0'],
    easing: 'easeInOutQuad'
  }, '+=200');

  t2.add({
    targets: ['.Bc1r3, .Bc2r3, .Bc3r3, .Bc4r3'],
    // borderRadius: ['0%', '50%'],
    // delay: '1000',
    translateX: 550,
    // duration:0,
    delay:1000,
    opacity: 1,
    easing: 'easeInOutQuad'
  }, '+=200')

  t2.add({
    targets: ['.Ac4r1', '.Ac4r2',' .Ac4r3', '.Ac4r4'],
    translateX: 650,
    borderRadius: ['0%', '50%'],
    opacity: ['1','0'],
    easing: 'easeInOutQuad'
  }, '+=200');

  t2.add({
    targets: ['.Bc1r4, .Bc2r4, .Bc3r4, .Bc4r4'],
    // borderRadius: ['0%', '50%'],
    // delay: '1000',
    translateX: 550,
    // duration:0,
    opacity: 1,
    easing: 'easeInOutQuad'
  }, '+=200')

  // tl.add({
  //   targets: ['.Bc1r1, .Bc2r1, .Bc3r1, .Bc4r1, .Bc1r2, .Bc2r2, .Bc3r2, .Bc4r2, .Bc1r3, .Bc2r3, .Bc3r3, .Bc4r3, .Bc1r4, .Bc2r4, .Bc3r4, .Bc4r4'],
  //   // borderRadius: ['0%', '50%'],
  //   // delay: '1000',
  //   // translateX: 550,
  //   duration:0,
  //   opacity:1,
  //   easing: 'easeInOutQuad'
  // }, '+=200')

// anime({
//   targets: '.l1',
//   // left: '240px',
//   // backgroundColor: '#FFF',
//   // borderRadius: ['0%', '50%'],
//   opacity: ['0','1'],
//   easing: 'easeInOutQuad'
// });