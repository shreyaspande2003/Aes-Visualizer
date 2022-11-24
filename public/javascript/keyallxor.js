

var tl = anime.timeline({
    // duration: 1000,
    // delay:1000
  });

tl
.add({
    targets:'.right , .xor , .rc2,.rc3,.rc4',
    // translateY : 300,
    opacity: 0,
duration:0
})

.add({
  targets:'.c1',
  translateY : 300,
//   opacity: 0,
  delay:1000
})

.add({
    targets:'.c1',
    translateX : 200,
  //   opacity: 0,
    // delay:1000
  })









  var t2 = anime.timeline({
    // duration: 1000,
    // delay:1000
  });

t2
  .add({
    targets:'.rc1',
    translateY : 300,
  //   opacity: 0,
    delay:1000
  })
  .add({
    targets:'.rc1',
    translateX : -100,
  //   opacity: 0,
    // delay:1000
  })
  .add({
    targets:'.xor',
    // translateY : 300,
    opacity: 1,
duration:1000
})
  .add({
    targets:'.right',
    // translateY : 300,
    opacity: 1,
duration:2000
})