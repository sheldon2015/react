const gulp = require('gulp');
//定义任务
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
gulp.task('someTask2', (done) => {
    console.log('aaa')
    done();

})
// 并行任务与串行任务

gulp.task('one', function (done) {
    // do stuff
    done();
});

gulp.task('two', function (done) {
    // do stuff
    done();
});

// 并行任务，任务执行完成可以添加回调函数
gulp.task('parallelTask', gulp.parallel('one', 'two', function (done) {
    done();
}));

// 串行任务
gulp.task('seriesTask', gulp.series('one', 'two', function (done) {
    done();
}));

//文件监控
var watcher = gulp.watch('*.md', gulp.series('one'));
watcher.on('change', function (path, stats) {
    //文件更改
    console.log('File ' + path + ' was changed');
});

watcher.on('unlink', function (path) {
    //文件删除
    console.log('File ' + path + ' was removed');
});

//增量编译