// Global Object
//console.log(global);


global.setTimeout(() => {
    console.log('in the timeout');
}, 3000);

 setTimeout(() => {
    console.log('in the timeout 4 sec');
    clearInterval(int);
}, 4000);

const int = setInterval(() =>{
    console.log('in the interval');
}, 1000);

console.log(__dirname);
console.log(__filename);