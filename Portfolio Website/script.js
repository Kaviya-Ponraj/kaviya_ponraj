function revealToSpan () {
    document.querySelectorAll(".reveal")
.forEach(function(elem) {
    // create 2 spans
    var parent  = document.createElement("span")
    var child  = document.createElement("span")

    // parent & child both sets their respetive classes
    parent.classList.add("parent")
    child.classList.add("child")

    // span parent gets child & child gets elem details 
    child.innerHTML = elem.innerHTML
    parent.appendChild(child)

    // elem replaces its value with parent span
    elem.innerHTML = ""
    elem.appendChild(parent)
})
}

revealToSpan()

var tl = gsap.timeline();

tl
    .from(".child span", {
        x: 100,
        delay : 0.3,
        stagger: 0.4,
        duration : 2,
        ease : Power3.easeInOut,
        // scrollTrigger : ".child span"
    })

    .to(".parent .child" , {
        y: "-100%",
        duration: 2,
        // delay: 1,
        ease : Circ.easeInOut
    })

    .to("#loader" , {
        height: 0,
        duration: 1,
        // delay: 1,
        ease : Circ.easeInOut
    })

    .to("#green" , {
        height: "100vh",
        top: 0,
        duration: 1,
        delay: -.6,
        ease : Circ.easeInOut
    })

    .to("#green" , {
        height: 0,
        duration: 1,
        delay: -.2,
        ease : Circ.easeInOut
    })

    .to("#home", {
        height : "100vh",
        delay: 0.2,
        // ease: 
        // scrollTrigger: "#homecaption",
    })

    .from("#nav a" , {
        y: "-80%",
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        stagger: 0.3
    })

    // .to("#developer #visual" , {
    //     // scale: 0,
    //     // x: "-500%",
    //     // opacity:0,
    //     // delay: 5,
    //     duration : 1,
    //     // top: -1000,
    //     // rotate: 360;
    //     scrollTrigger : {
    //         trigger : "#developer #visual",
    //         // markers: true,
    //         scroller: "#main",
    //         start: "top -10%",
    //         end: "top 10%",
    //     } 
    // })


// tl.to("#projects.project" , {
//     scale : 2,
//     opacity : 0,
//     stagger : 0.3,
//     duration : 1,
//     scrollTrigger : {
//         trigger : "#projects.project",
//         scroller: "body",
//         marker : true,
//         start : "top 70%"
//     }
// })

gsap.to("#projects", {
    transform : "translateX(-80%)",
    scrollTrigger : {
        trigger : "#projects",
        scroller : "body",
        // markers: true,
        start: "left 0",
        end : "left -200%",
        scrub : 2,
        pin : true
    }
})

