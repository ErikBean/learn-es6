var _this = this;

//more arrows
var evens = [2, 4, 6, 8];
var odds = evens.map(function (v) {
    return v + 1;
});
var pairs = evens.map(function (v) {
    return { even: v, odd: v + 1 };
});
//add value+index
var nums = evens.map(function (v, i) {
    return v + i;
});
console.log("\nnums: ", nums);

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
obj.method("arrow", function () {
    // logs "attached to the module"
    console.log(_this.test);
});

obj.method("func", function () {
    // logs "attached to the object"
    console.log(this.test);
});

var func = obj.func;

var arrows = obj.arrow;

var a = [];

var _loop = function _loop(i) {
    var j = i;
    k = i;
    //arrows

    a.push(function () {
        //function-style block scoping with let vs var
        console.log("\nlet (block scoped): " + j);
        console.log("var (not block scoped): " + k);
    });
};

for (var i = 0; i < 5; i++) {
    var k;

    _loop(i);
}

/**
 * Generic-style block scoping:
 */
{
    var _l = 456;
    console.log("\nl defined in if: ", _l);
}

try {
    console.log(l);
} catch (e) {
    console.error("outside if: " + e);
}

a.forEach(a => a());
arrows();
func();