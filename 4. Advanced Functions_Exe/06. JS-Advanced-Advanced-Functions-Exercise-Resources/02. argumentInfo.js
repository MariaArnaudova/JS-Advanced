function argumentInfo() {

    const params = Array.from(arguments);

    const types = {};

    for (let arg of params) {
        const type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (types[type] == undefined) {
            types[type] = 0;
        }

        types[type]++;
    }

    const result = Object.entries(types).sort((a, b) => b[1] - a[1]);

    for (let [type, count] of result) {
        console.log(`${type} = ${count}`);
    }
}

console.log(argumentInfo('cat', 42, function () { console.log('Hello world!'); }));
argumentInfo(1, 2, 3);
argumentInfo('a', 'b', 'c');
argumentInfo(12, 'a', 'b');