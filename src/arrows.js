
//more arrows
let evens = [2, 4, 6, 8]
let odds = evens.map(v => v + 1)
let pairs = evens.map(v => ({even: v, odd: v + 1}))
//add value+index
let nums = evens.map((v, i) => v + i)
console.log("\nnums: ", nums)

//Lexical this
this.test = "\nattached to the module";

var obj = {
    test: "attached to an object"
};

// a method to create methods
obj.method = function (name, cb) {
    this[name] = cb;
};

// use an arrow function and get
// lexical analysis of "this"
obj.method("arrow", () => {
    // logs "attached to the module"
    console.log(this.test);
});

obj.method("func", function () {
    // logs "attached to the object"
    console.log(this.test);
});

export let func = obj.func;

export default obj.arrow;
