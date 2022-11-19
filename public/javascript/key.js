


var tl = anime.timeline({
    duration: 1000,
    delay:1000
  });

// var shidt =121
tl
.add({
  targets:'.left',
  translateX : -200,
  opacity: 0,
  delay:1000
})

.add({
    targets:'.top',
    translateX : 300,
})
.add({
    targets:'.another1',
    translateY : - 121.25,
})
.add({
  targets:'.top',
  translateY : 363.75,
})
.add({
  targets:'.top',
  translateX : 0,
})


window.onscroll = function(){
console.log(window.pageYOffset);

if(650<=window.pageYOffset<=700){

console.log("skjdhajkh")
var t2 = anime.timeline({
  duration: 1000,
  // delay:1000
});







