const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "0%",
        end: "70%",
        scrub: 1,
        pin: true
    }
})

tl.fromTo(".container", { clipPath: "circle(5%)" }, { clipPath: "circle(100%)", duration: 3 })
tl.fromTo(".music_note", { scale: ".5" }, { scale: "0", opacity: "0" }, "-= 3")
tl.fromTo(".intro", { opacity: "0" }, { opacity: "1" }, "-=2")
