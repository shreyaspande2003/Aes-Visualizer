var tl = anime.timeline({
    duration: 1000,
    delay:500
  });
tl
.add({
    targets:'.first',
    translateX : 120,
    innerHTML:`<span>K<span style="color:#acaaaa">0</span></span>`,
    delay:10
})
.add({
    targets:'.first',
    translateY : 200,
    delay:10
})
.add({
    targets:'.first',
    translateX :400,
    opacity :0,
})
.add({
    targets:'.first',
    innerHTML:'b3',
    translateX : 800,
    duration:0,
})
.add({
    targets:'.first',
    opacity :1,
    translateX :1000,
    delay:10,
})
.add({
    targets:'.first',
    translateY : 0,
    delay:10
})
.add({
    targets:'.first',
    translateX :1120,
    delay:10
})
.add({
    targets:'.second',
    translateX : 120,
    innerHTML:`<span>E<span style="color:#acaaaa">0</span></span>`,
    delay:10
})
.add({
    targets:'.second',
    translateY : 80,
    delay:10
})
.add({
    targets:'.second',
    translateX :400,
    opacity :0,
    delay:10
})

.add({
    targets:'.second',
    innerHTML:'6e',
    translateX : 800,
    duration:0
})
.add({
    targets:'.second',
    opacity :1,
    translateX :1000,
    delay:10
})


.add({
    targets:'.second',
    translateY : 0,
    delay:10
})
.add({
    targets:'.second',
    translateX :1120,
    delay:10
})
.add({
    targets:'.third',
    translateX : 120,
    innerHTML:`<span>Y<span style="color:#acaaaa">0</span></span>`,
    delay:10
})
.add({
    targets:'.third',
    translateY : -75,
    delay:10
})
.add({
    targets:'.third',
    translateX :400,
    opacity :0,
    delay:10
})
.add({
    targets:'.third',
    innerHTML:'cb<span style="color:#acaaaa">1</span>',
    targets:'.third',
    translateX : 800,
    duration:0
})
.add({
    targets:'.third',
    opacity :1,
    translateX :1000,
    delay:10
})
.add({
    targets:'.third',
    translateY : 0,
    delay:10
})
.add({
    targets:'.third',
    translateX :1120,
    delay:10
})


.add({
    targets:'.fourth',
    translateX : 120,
    innerHTML:`<span><span style="color:#acaaaa">0</span></span>`,
    delay:10
})
.add({
    targets:'.fourth',
    translateY : -200,
    delay:10
})
.add({
    targets:'.fourth',
    translateX :400,
    opacity :0,
    delay:10
})

.add({
    targets:'.fourth',
    innerHTML:'b7',
    targets:'.fourth',
    translateX : 800,
    duration:0
})
.add({
    targets:'.fourth',
    opacity :1,
    translateX :1000,
    delay:10
})
.add({
    targets:'.fourth',
    translateY : 0,
    delay:10
})
.add({
    targets:'.fourth',
    translateX :1120,
    delay:10
})
