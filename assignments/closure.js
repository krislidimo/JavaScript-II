// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function galaxy() {
	const galaxy_name = 'Milky Way Galaxy';

	function solar_system() {
		const solar_system_name = 'Sol System';

		function planet() {
			const planet_name = 'Earth';
			console.log(`Hi! You're in the ${galaxy_name} in the ${solar_system_name} on planet ${planet_name}.`);
		}
		planet();
	}
	solar_system();
}
galaxy();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  count = 0;
  return function() {
  	count++;
  	console.log(count);
  }
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
// newCounter(); // 3
// newCounter(); // 4

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

	count = 0;
	return {
		increment: function() {
			count++;
			console.log(count);
		},

		decrement: function() {
			count--;
			console.log(count);
		}
	};
};

// const countFactory = counterFactory();
// countFactory.increment();//1
// countFactory.increment();//2
// countFactory.decrement();//1
// countFactory.decrement();//0
// countFactory.increment();//1
// countFactory.increment();//2
