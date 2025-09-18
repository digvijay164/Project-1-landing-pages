const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
})

function mouseCursor(){
    window.addEventListener("mousemove", function(dets){
        let cursor = document.querySelector(".cursor");
        cursor.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    })
}

function firstPageAnimation(){
    let tl = gsap.timeline();

    tl.from(".nav", {
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut
    })
    .to(".bounding-elem",{
        y: "0",
        duration: 2,
        ease: Expo.easeInOut,
        delay: -1,
        stagger: .2
    })
    .from(".hero-footer", {
        y: -10,
        opacity: 0,
        duration: 1,
        delay: -1,
        ease: Expo.easeInOut
    })
}

function elemImageHover(){
    document.querySelectorAll(".elem").forEach(function(elem){

        elem.addEventListener('mouseenter', function () {
            gsap.to(elem.querySelector(".txt"), {
                x: 35,
                opacity: .4,
                duration: 0.4,
                ease: "Power2.out"
            })
        })

        elem.addEventListener('mouseleave', function(){
            gsap.to(elem.querySelector("img"), {
                opacity: 0,
                ease: Power3,
            })

             gsap.to(elem.querySelector(".txt"), {
                x: 0,
                opacity: 1,
                duration: 0.4,
                ease: "Power2.out"
            })
        })
    
        let rotate = 0;
        let diffRotate = 0; 
        elem.addEventListener('mousemove', function(dets){

            let diff = dets.clientY - elem.getBoundingClientRect().top;
            // console.log(diff);

            diffRotate = dets.clientX - rotate;
            rotate = dets.clientX;
            // console.log(diffRotate);
            // console.log(gsap.utils.clamp(5, 10, 7));
            
            // console.log(elem.getBoundingClientRect().top);
            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                ease: Power1,
                top: diff,
                left: dets.clientX,
                rotate: gsap.utils.clamp(-20, 20, diffRotate * 0.5)
                
            })
        })
    })
}

mouseCursor();
firstPageAnimation();
elemImageHover();

 