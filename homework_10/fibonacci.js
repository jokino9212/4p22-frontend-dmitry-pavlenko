'use strict';

const fibonacci = ((prev = 0, next = 1) => () => {
    const result = prev + next;
    prev = next;
    next = result;
    return console.log(result);
})();

fibonacci(); 
fibonacci(); 
fibonacci(); 
fibonacci(); 
fibonacci(); 
fibonacci(); 