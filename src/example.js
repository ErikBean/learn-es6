
/**
 * Extended param handling:
 */

function add5(addend1, addend2 = 5, foo = "foo") {
    console.log("\nDefault params: " + addend2, foo);
}
add5(23);

//rest params:
function multAndSum(scalar, ...addends) {
    let sum = 0;
    addends.forEach(m => sum += m);
    return scalar * sum;
}
console.log("\nRest params, 2*(4+5+6...) = " + multAndSum(2, 4, 5, 6));

//spread params:
var spreadParams = [3, 4, 'foo']
var concat = [1, 2, ...spreadParams] //same as Array.prototype.concat
console.log("concat with spead: ", concat)

function fiveParams(a, b, c, d, e) {
    console.log("spread args in func: ", a, b, c, d, e);
}

//Different from Rest params! This '...' is in a function CALL not Declaration
//this says pass the items of this array as additional arguments instead of 1 array arg.
//You don't have to unwrap an array in a function anymore!
fiveParams(1, 2, ...spreadParams);

//combine spread params + rest params:
function xParams(a, b, c, ...restArgs) {
    return [a, b, c, ...restArgs].filter(a => a % 2).map(a => a + 1).map(a => a * a)
}

var a1 = [1, 2]
a1.push(3)
let a2 = [8, 9]

var g1 = xParams(...a1, 4, 5, 6, 7, ...a2);
console.log("spread + rest: ", g1);


