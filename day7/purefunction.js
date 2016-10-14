const add1 = (x) => x + 1;
const times2 = (y) => 2 * y;

// const compose = (a, b) => c => a(b(c));

const compose = function (a, b) {

    return function (c) {

        return a(b(c));
    }

}

const add1times2 = compose(add1, times2);

console.log(add1times2(5));

// const pipe = (fns) => (x) => fns.reduce( (v, f) => f(v), x);

const pipe = function (fns) {

    return function (x) {

        return fns.reduce(function (v, f) {

            return f(v);

        }, x)
    }
}

// const times2add1 = pipe([times2, add1]);
// -------------------------------------

const temp = function (x) {

    return [times2, add1].reduce(function (v, f) {

        console.log('v', v)
        console.log(' f', f)

        return f(v);
    }, x)
}

console.log(temp(5));

//

[1, 2, 3, 4].reduce(function (arg1, arg2) {
    console.log('arg1', arg1)
    console.log('arg2', arg2)

    return arg1 + arg2;
}, 10);

console.log('--------------------------------------------');

[1, 2, 3, 4].reduceRight(function (arg1, arg2) {
    console.log('arg1', arg1)
    console.log('arg2', arg2)

    return arg1 + arg2;
}, 10);

var s = {
    a() {
        console.log('a')
    },
    b: () => {
        console.log('b')
    }
}

s.a();
s.b();