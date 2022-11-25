

var tl = anime.timeline({
    duration: 1000,
    delay:1000
  });


tl
.add({
    targets:'.ansc1 , .ansc2 , .ansc3 , .ansc4',
    opacity: 0,
    duration:0
})

.add({
  targets:'.c1',
  translateY:300
})

.add({
  targets:'.c1',
  translateX:260
})

.add({
  targets:'.rc2 , .rc3 , .rc4',
  opacity: 0,
  duration:0
})

.add({
  targets:'.c1',
  translateX:300,
  opacity :0
})

.add({
  targets:'.ansc1',
  opacity: 1,
  duration:0
})

.add({
  targets:'.c2',
  translateY:300
})

.add({
  targets:'.c2',
  translateX:220
})
.add({
  targets:'.c2',
  translateX:300,
  opacity :0
})
.add({
  targets:'.ansc2',
  opacity: 1,
  duration:0
})
.add({
  targets:'.c3',
  translateY:300
})

.add({
  targets:'.c3',
  translateX:160
})
.add({
  targets:'.c3',
  translateX:300,
  opacity :0
})
.add({
  targets:'.ansc3',
  opacity: 1,
  duration:0
})
.add({
  targets:'.c4',
  translateY:300
})

.add({
  targets:'.c4',
  translateX:100
})
.add({
  targets:'.c4',
  translateX:300,
  opacity :0
})
.add({
  targets:'.ansc4',
  opacity: 1,
  duration:0
})



var t2 = anime.timeline({
});

t2.add({
  targets:'.rc1',
  translateX:-100,
  opacity:0,
  delay:7000
})
.add({
  targets:'.rc2',
  translateX:-80,
  opacity:1
})
.add({
  targets:'.rc2',
  translateX:-200,
  opacity:0,
  delay:5000
})

.add({
  targets:'.rc3',
  translateX:-130,
  opacity:1
})
.add({
  targets:'.rc3',
  translateX:-300,
  opacity:0,
  delay:5000
})
.add({
  targets:'.rc4',
  translateX:-190,
  opacity:1
})
.add({
  targets:'.rc4',
  translateX:-300,
  opacity:0,
  delay:5000
})
.add({
  targets:'.right , .xor',
  opacity:0
})
.add({
  targets:'.grid-container2',
  translateY:-200
})
.add({
  targets:'.grid-container2',
  translateX:-200
})
.add({
  targets:'.grid-container2',
  scale:1.5,
  duration:2000
})



