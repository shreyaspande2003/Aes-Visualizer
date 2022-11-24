var tl = anime.timeline({
    duration: 1000,
    delay:1000
  });
  
tl
.add({
    targets:['.a5','.a6','.a7','.a8'],
    translateX : -120,
    delay:10
})

.add({
    targets:['.a9','.a10','.a11','.a12'],
    translateX : -240,
    delay:10
})

.add({
    targets:['.a13','.a14','.a15','.a16'],
    translateX : -360,
    delay:10
})




.add({
    targets:'.a5',
    translateY : -240,
    delay:10
})
.add({
    targets:'.a5',
    translateX :480,
    delay:10
})
.add({
    targets:'.a5',
    translateY : 0,
    delay:10
})
.add({
    targets:'.a5',
    translateX :360,
    delay:10
})




.add({
    targets:['.a9','.a10'],
    translateY : -360,
    delay:10
})
.add({
    targets:['.a9','.a10'],
    translateX :480,
    delay:10
})
.add({
    targets:['.a9','.a10'],
    translateY : 0,
    delay:10
})
.add({
    targets:['.a9','.a10'],
    translateX :240,
    delay:10
})



.add({
    targets:['.a13','.a14','.a15'],
    translateY : -480,
    delay:10
})
.add({
    targets:['.a13','.a14','.a15'],
    translateX :480,
    delay:10
})
.add({
    targets:['.a13','.a14','.a15'],
    translateY : 0,
    delay:10
})
.add({
    targets:['.a13','.a14','.a15'],
    translateX :120,
    delay:10
})