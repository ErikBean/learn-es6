let a = []
for (let i = 0; i < 5; i++) {
    let j = i
    var k = i
    //arrows
    a.push(() => {
        //function-style block scoping with let vs var
        console.log("\nlet (block scoped): " + j)
        console.log("var (not block scoped): " + k)
    })
}

export default a;


/**
 * Generic-style block scoping:
 */
{
    let l = 456
    console.log("\nl defined in if: ", l)
}

try {
    console.log(l)
}
catch (e) {
    console.error("outside if: " + e)
}
