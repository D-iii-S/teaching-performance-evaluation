const { PerformanceObserver, performance } = require ('perf_hooks');

const COUNT = 100000;
let results = new Array (COUNT);

for (let i = 0 ; i < COUNT ; i ++) {
    results [i] = performance.now ();
}

console.log ('index,time');
for (let i = 0 ; i < COUNT ; i ++) {
    console.log ('%i,%f', i, results [i]);
}
