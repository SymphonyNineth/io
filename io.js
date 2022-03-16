const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum doloribus quibusdam necessitatibus ea eius maiores asperiores voluptatibus dolor? Perferendis consectetur minus quae quisquam molestias assumenda sequi temporibus maxime facilis, officia dolore molestiae, quod facere sit autem deserunt unde voluptas, accusantium similique quam eveniet provident explicabo? Eum ipsam quod iure incidunt, dolores pariatur voluptates alias non neque distinctio tenetur aspernatur possimus in nobis sapiente perferendis nam ipsa explicabo placeat quis accusantium ab. Fugiat ipsa tempore officia ratione quod facere doloremque, debitis quam beatae! Adipisci aspernatur illo dolorum nihil amet, alias praesentium iure at provident libero. Quam soluta, cupiditate illum id quidem dolor corrupti. Neque fugit pariatur ipsa consequuntur. Architecto laboriosam omnis veniam culpa officiis, rem blanditiis perspiciatis accusamus sequi asperiores obcaecati perferendis ipsa unde nemo fugit dolore deleniti velit. Voluptatibus sed sapiente quae perferendis autem nihil assumenda consectetur architecto impedit porro dolorum aperiam, itaque quibusdam dolore iure delectus. Enim doloribus tempore debitis necessitatibus quas saepe temporibus. Natus fugiat nemo delectus molestiae officia numquam veniam voluptatum dicta necessitatibus animi atque vel, facilis praesentium sequi distinctio non quaerat inventore velit dolorem. Id, ut ullam illum beatae amet voluptatem cupiditate illo nam magnam eaque dolores unde doloremque, deserunt possimus ab eveniet exercitationem!`;

const blocks = document.querySelector("#container").children;

function type(el, text, delay, deceleration = 1, maxDelay = Number.MAX_SAFE_INTEGER, minDelay = Number.MIN_SAFE_INTEGER, i = 0) {
    if(maxDelay < minDelay) throw Error("Max delay can not be lower than min delay")
    delay *= deceleration;
    if(delay > maxDelay) delay = maxDelay;
    if(delay < minDelay) delay = minDelay;
    if(i < text.length){
        setTimeout(() => {
            el.textContent += text[i];
            i++;
            console.log(delay);
            type(el, text, delay, deceleration, maxDelay, minDelay,  i);
        }, delay);
        
    }
}

type(blocks[0], text, 2000, 0.9, Number.MAX_SAFE_INTEGER, 100);