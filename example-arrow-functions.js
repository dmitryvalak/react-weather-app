/*var names = ['Dmitry', 'Alex', 'Ega'];

names.forEach(function(name) {
    console.log('forEach', name);
});

names.forEach((name) => {
    console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Dmitrijs'));

var person = {
    name: 'Dmitrijs',
    greet: function() {
        names.forEach((name) => {
           console.log(this.name + ' says hi to ' + name);
        });
    }
}

person.greet();*/

function add(a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b;
}

var addExpression = (a, b) => a + b;

console.log(add(1, 3));
console.log(addStatement(2, 6));
console.log(addExpression(3, 3));
