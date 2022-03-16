export default function type(el, text, delay, deceleration = 1, maxDelay = Number.MAX_SAFE_INTEGER, minDelay = Number.MIN_SAFE_INTEGER, i = 0) {
    if(maxDelay < minDelay) throw Error("Max delay can not be lower than min delay")
    delay *= deceleration;
    if(delay > maxDelay) delay = maxDelay;
    if(delay < minDelay) delay = minDelay;
    if(i < text.length){
        setTimeout(() => {
            el.textContent += text[i];
            i++;
            type(el, text, delay, deceleration, maxDelay, minDelay,  i);
        }, delay);
        
    }
};


