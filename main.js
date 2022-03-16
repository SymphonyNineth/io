import type from "./type.js";
import text from "./text.js";
// const observer = new IntersectionObserver(entries => {
//     console.log(entries)
// });

const blocks = Array.from(document.querySelector("#container").children);

// blocks.forEach(block => {
//     observer.observe(block)
// });


type(blocks[0], text, 200, 1, Number.MAX_SAFE_INTEGER);