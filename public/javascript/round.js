    let t1 = anime.timeline({
    duration:500  ,
    delay:200 
    });

    t1
    .add({
        targets:'.anim-box',
        translateY:200
    })
    .add({
        targets: '.anim-box',
        translateY: 700,
    })
    .add({
        targets: '.anim-box',
        translateX: 500,
    })
    .add({
        targets: '.anim-box',
        translateY: 200,
    })
    .add({
        targets: '.anim-box',
        translateX: 0,
    })
    


for(var i=0;i<8;i++){
    t1
    .add({
        targets: '.anim-box',
        translateY: 700,
        duration: 500,
        delay: 500
    })
    .add({
        targets: '.anim-box',
        translateX: 500,
        duration: 500,
        delay: 500  
    })
    .add({
        targets: '.anim-box',
        translateY: 200,
        duration: 500,
        delay: 500  
    })
    .add({
        targets: '.anim-box',
        translateX: 0,
        duration: 500,
        delay: 500  
    })
}

t1.add({
    targets:'.anim-box',
    translateY:1100,
    duration:2000,
    easing: 'easeInOutQuad'
})
    
    // t1.
    // add({
    // targets: '.anim-box',
    // translateY: -250
    // });

    // t1.
    // add({
    // targets: '.anim-box',
    // translateX: 250
    // });

    // t1.
    // add({
    // targets: '.anim-box',
    // translateY: 250
    // });

    // t1.
    // add({
    // targets: '.anim-box',
    // translateX: -250
    // });


