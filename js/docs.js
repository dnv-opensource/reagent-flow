const main = (w, d) => {
    const examples = [].slice.call(d.querySelectorAll('[data-src]'));
    examples.map(example => {
        const observer = new IntersectionObserver(observed => {
            const exampleName = example.getAttribute('data-src');
            if (observed[0].isIntersecting) {
                w[`${exampleName}`].core.init(example);
            } else {
                w[`${exampleName}`].core.unload(example);
            }
        });
        observer.observe(example);
    }); 
}

main(window, document);
