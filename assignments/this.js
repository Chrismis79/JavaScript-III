/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Principle 1- Window/Global Object Binding- When 'this' is in the global scope, it is binded to the window object. When none of the other 3 rules apply, 'this' is bound to the window. 
* 2. Principle 2- Implicit Binding- Most common use. Whenever/where ever a function is invoked, the object preceeding the dot is the object 'this' is referring to.
* 3. Principle 3- New binding- WHen using a constructor function, 'this' refers tot the specific instance of the object that is being made and returned by the constructor function. Using the new keyword constructs a new object, and 'this' points to that object.
* 4. Principle 4- Explicit Binding- When using .call or .apply "this" is explicitly defined. Explicitly tells the JS engine to point to a certian value using .call, .bind, or .apply.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayHello(greet){
    // console.log(this);
    return greet;
}
// sayHello('Hello World!');

// Principle 2

// code example for Implicit Binding
const person = {
    name: 'Christine',
    speak: 'I\'m starting to get this!',
    greeting: function(greet){
        console.log(`${this.name} says ${this.speak}`);
        console.log(this);
    }
};
person.greeting();

// Principle 3

// code example for New Binding
function NewPerson(greet){
    this.greeting = "Hi";
    this.greet = greet;
    this.talk = function(){
        console.log(this.greet +' says ' + this.greeting);
        console.log(this);
    };
}
const christine = new NewPerson('Chris');
const chris = new NewPerson('Christine');

// chris.talk();
// christine.talk();

// Principle 4

// code example for Explicit Binding

chris.talk.call(christine);
christine.talk.apply(chris);