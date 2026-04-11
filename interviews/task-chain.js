// Реализовать функцию автокаррирования curry

const taskChain = (task1, task2, task3) => {
    console.log(task1,task2,task3);
}

function curry(fn){

    return function curryClosure(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return curryClosure.bind(this, ...args);
    }
}


const curriedTaskChain = curry(taskChain);

curriedTaskChain()()()(1, 2, 3);
curriedTaskChain()(1)()(2)(3);
curriedTaskChain(1, 2, 3);
curriedTaskChain(1)()(2, 3);
curriedTaskChain(1, 2)()(3, 4);