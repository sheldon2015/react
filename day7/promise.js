/**
 * promise 接受一个回调函数，回调函数的参数为resolve，reject函数
 *
 *
 * setTimeout(fn,time,arg[])
 *
 */

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout((arg) => {

            resolve(arg)

        }, ms, [1, 2, 3]);
    });
}

timeout(100).then((value) => {
    console.log(value);
});