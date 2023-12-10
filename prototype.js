Array.prototype.calculate = function () {
    var output = [];
    for (var i = 0; i < this.length; i++) {
        output.push(this[i] * 2);
    }
    return output;
}


const radius = [1, 2, 3, 4, 5];
console.log(radius.calculate());