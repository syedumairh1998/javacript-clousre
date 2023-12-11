function outerFunction(x) {
    function innerFunction() {
        return x = x + 1
    }
    return innerFunction

}

const data = outerFunction(10)
console.log(data())
console.log(data())
console.log(data())
console.log(data())
console.log(data())


//11
//12
//13
//14
//15
