function getTempPromise(location) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(79);
            reject('City not found');
        }, 1000);
    });
}

getTempPromise('Riga').then(function(temp) {
    console.log('promise success', temp);
}, function(error) {
    console.log('promise error', error);
});


function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if(typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('CIFRI VVODI PIDR');
        }
    });
}

addPromise(2, 3).then(function(sum) {
    console.log('success', sum);
}, function(error) {
    console.log('error', error);
});
