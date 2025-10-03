
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
})


function mouseCursor() {
    window.addEventListener("mousemove", function (dets) {
        let cursor = document.querySelector(".cursor");
        cursor.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    })
}

function firstPageAnimation() {
    let tl = gsap.timeline();

    tl.from(".nav", {
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut

    })
        .to(".bounding-elem", {
            y: '0',
            // opacity:0,
            duration: 2,
            ease: Expo.easeInOut,
            delay: -1,
            stagger: .2

        })
        .from(".hero-footer", {
            y: '0',
            opacity: 0,
            duration: 0,
            ease: Expo.easeInOut,
            delay: -1,
            // stagger:.2
        })
}
function elementImageHover() {
    document.querySelectorAll(".elem").forEach(function (elem) {

        elem.addEventListener('mouseenter', function () {
            gsap.to(elem.querySelector(".txt"), {
                x: 35,
                duration: 0.4,
                ease: "Power2.out"
            })
        })

        elem.addEventListener('mouseleave', function () {
            gsap.to(elem.querySelector(".txt"), {
                x: 0,
                duration: 0.4,
                ease: "Power2.out"
            })
        })


        elem.addEventListener('mouseleave', function () {
            gsap.to(elem.querySelector("img"), {
                opacity: 0,
                ease: Power3,


            })
            gsap.to(elem.querySelector('.txt,.txt1'), {
                opacity: 0.7,
                ease: Power3,
            })
        })




        let rotate = 0;
        let diffR = 0;

        elem.addEventListener('mousemove', function (dets) {

            let diff = dets.clientY - elem.getBoundingClientRect().top;

            diffR = dets.clientX - rotate;
            rotate = dets.clientX;


            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                // duration:.,
                ease: Power1,
                top: diff,
                left: dets.clientX,
                rotate: gsap.utils.clamp(-20, 20, diffR * 0.5),

            })

            gsap.to(elem.querySelector('.txt, .txt1'), {
                opacity: 0.1,
                ease: Power3,

            })
        })
    })
}
mouseCursor();
firstPageAnimation();
elementImageHover();
