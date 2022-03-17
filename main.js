import type from "./type.js";
import text from "./text.js";
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        console.log(entry.intersectionRatio);
            
                if(entry.isIntersecting){
                    entry.target.style.backgroundColor = "Salmon"
                    type(entry.target, text, 200, 1,);
                    observer.unobserve(entry.target);
                }
    })
}, {
    threshold: 0.5
});

const blocks = document.querySelectorAll(".block");

blocks.forEach(block => observer.observe(block));
