
var tl = anime.timeline({

});




tl
.add({
  targets:'.left',
  translateX : 200,
  opacity: 0,
  delay:1000
})
.add({
  targets:'.center',
  opacity: 0,
  duration:0
})






var t3 = anime.timeline({

});




t3
.add({
  targets:'.right',
  translateX : -200,
  opacity: 0,
  delay:1000
})




var t2 = anime.timeline({

});


t2
.add({
  targets:'.xor',
  opacity: 0,
  
  delay:1000
})
.add({
  targets:'.center',
  opacity: 1,
  duration:2000,
  
})
.add({
  targets:'.hh',
  opacity: 1,
  duration:1000,
  
})


