/*
Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, 
but these centurial years are leap years if they are exactly divisible by 400. For example, the years 1700, 1800, 
and 1900 are not leap years, but the years 1600 and 2000 are.
*/
/* Month is given as January, February, etc, year is given as int */
export function numDays(year, month) {
	switch(month) {
		case("January"):
		case("March"):
		case("May"):
		case("July):
		case("August"):
		case("October"):
		case("December"):
			return 31;
			break;
		case("April"):
		case("June"):
		case("September"):
		case("November"):
			return 30;
			break;
		case("February"):
			let four = (year % 4 == 0);
			let hundred = (year % 100 == 0);
			let fourhundred = (year % 400 == 0);
			if (four && !(hundred && !fourhundred)) //Boolean reduction from rule at top
			{
				return 29;
			}
			else
			{
				return 28;
			}
			break;
	}
		
}

/* Day is given as one indexed day, return value is zero-indexed day of week */
export function dayOfWeek(year, month, day) {
	return day % 7;
}
