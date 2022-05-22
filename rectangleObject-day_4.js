
/*
Complete the function in the editor. 
It has two parameters: a and b. 
It must return an object modeling a rectangle that
 has the following properties:
 */
function Rectangle(a, b) {
    const model = {
        area: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    }
    return model;
}
