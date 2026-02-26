
let c = 0

let cron = setInterval(() => {
    let number = (Math.random()*(100-1)) + 1
    c++;
    console.log(number.toFixed(0));

    if ( c == 10) {
        clearInterval(cron)
    }
}, 2000);