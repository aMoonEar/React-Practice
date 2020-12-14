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
