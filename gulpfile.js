const gulp = require('gulp');

function someTask() {
    console.log(1)

    return new Promise((resolve, reject) => {
        console.log('enter')

        resolve('s')

    }).then((arg) => {
        console.log(arg)
    }, (arg) => {
        console.log(arg)
    });

}
function someTask1() {
    console.log(2)

}


exports.someTask = someTask
exports.someTask1 = someTask1
