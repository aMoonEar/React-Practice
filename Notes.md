# Notes

Here are some of my notes I made going through a React course
<br>

## ES6 Recap

### Binding

The bind function can re-assign what the keyword `this` means

```
const person = {
	walk() {
		console.log(this);
	}
}

const walk = person.walk.bind(person);
walk();
```

When you run this function, it will correctly print out the object despite the constant was made outside of the `person` object.

### Arrow functions

Simpler way of writing traditional functions

```
// Before
const square = function(number) {
	return number * number
}

// After
const square = (number) => {
	return number * number;
}
```

```
// Before
const activeJobs = jobs.filter(function(job) { return job.isActive; });

// After
const activeJobs = jobs.filter( job => job.isActive) ;
```

Arrow functions don't rebind the word `this`, and instead inherits it from the context

### Array.map

Used to perform a function for every element within an array

```
const colors = ["red", "blue", "green"]
const items = colors.map( (color) => `<p> ${color} </p>` )
console.log(items);
```

### Object destructuring

Quickly make constants from an object

```
const address = {
	street: '',
	city: '',
	country: '',
}

// Before
const street = address.street;
const city = address.city;

// After
const { street, city: ct } = address;
```

### Spread operator

Used to get all the values in an array. Useful when concatenating

```
const first = [ 1, 2, 3 ]
const second = [ 4, 5, 6 ]

 // Before
 const combined = first.concat(second)

 // After
 const combined = [ ...first, ...second, 7 , 8  ]
```

Also works with objects

```
const first = { name: "Munir" }
const second = { city: "ottawa" }

const combined = { ...first, ...second, occupation: "student" }
```

### Basic Class

Basic structure of a class

```
class Person {
	constructor (name) {
		this.name = name;
	}

	walk() {
		console.log('walking');
	}
}

const guy = new Person('guy');

// Use extends keyword to inherit

const Teacher extends Person{
	constructor( name, subject) {
		super(name);
		this.subjet = subject;
	}

	teach() {
		console.log('teach');
	}
}

const teacher = new Teacher('ms teacher', 'math');
teacher.walk();
teacher.teach();
```
