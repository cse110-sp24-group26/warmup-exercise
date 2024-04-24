import { numDays, dayOfWeek } from './util.js';

function util_tests() {
	console.log("running util_tests");
	/* num days tests */
	console.assert(numDays(2024, "April") == 30);
	console.assert(numDays(2020, "February") == 29);
	console.assert(numDays(2021, "February") == 28);

	/* dayOfWeek tests */
	console.assert(dayOfWeek(2024, "April", 23) == 2 /* tuesday */ );
	console.assert(dayOfWeek(2024, "April", 24) == 3 /* wednesday */ );
	console.assert(dayOfWeek(1999, "February", 10) == 3 /* wednesday */ );
	console.assert(dayOfWeek(2028, "February", 10) == 4 /* thursday */ );
}

util_tests();
