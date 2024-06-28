function getFibonator() {

    let prev = 0;
    let curr = 1;

    return function () {
        const next = prev + curr;
        prev = curr;
        curr = next;

        return prev;
    }
}

function getFibonatorMore() {
    const result = function () {
        const next = result.prev + result.curr;
        result.prev = result.curr;
        result.curr = next;

        return result.prev;
    }
    result.prev = 0;
    result.curr = 1;

    return result;
}

function getFibonatorMore2() {
    return (function () {
        const next = this.prev + this.curr;
        this.prev = this.curr;
        this.curr = next;

        return this.prev;
    }).bind({
        prev: 0,
        curr: 1
    });
}

function getFibonatorMore3() {
    return (function () {
        if (this.curr == 0) {
            this.curr = 1;
            return 1;
        }
        const next = this.prev + this.curr;
        this.prev = this.curr;
        this.curr = next;

        return this.prev;
    }).bind({
        prev: 0,
        curr: 1
    });
}


let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
