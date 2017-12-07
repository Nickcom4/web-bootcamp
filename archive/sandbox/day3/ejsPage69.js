let myVariable = "elephant"

console.log(myVariable)
myVariable = "turtle"
console.log(myVariable)

var object1 = { value : 10};
var object2 = object1 ;
var object3 = { value : 10};
console . log ( object1 == object2 ) ;
// → true
console . log ( object1 == object3 ) ;
// → false
object1 . value = 15;
console . log ( object2 . value ) ;
// → 15
console . log ( object3 . value ) ;
// → 10
