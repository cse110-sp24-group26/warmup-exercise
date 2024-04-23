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
		case("July"):
		case("August"):
		case("October"):
		case("December"):
			return 31;
		case("April"):
		case("June"):
		case("September"):
		case("November"):
			return 30;
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
		default:
			return -1;
	}
		
}

/* Day is given as one indexed day, return value is zero-indexed day of week */
export function dayOfWeek(year, month, day) {//using Zeller's Congruence for Gregorian Calendar https://www.geeksforgeeks.org/zellers-congruence-find-day-date/amp/
	function monthToIndex(month) {
		switch(month) {
			case("January"):	//first time using javascript; i know this isn't elegant but damn, it works
				year--;
				return 13;//this method counts jan and feb as 13th and 14th months of previous year
			case("February"):
				year--;
				return 14;
			case("March"):
				return 3;
			case("April"):
				return 4;
			case("May"):
				return 5;
			case("June"):
				return 6;
			case("July"):
				return 7;
			case("August"):
				return 8;
			case("September"):
				return 9;
			case("October"):
				return 10;
			case("November"):
				return 11;
			case("December"):
				return 12;
		}
	}

	let q = day;
	let m = monthToIndex(month);
	let k = year % 100;
	let j = parseInt(year / 100, 10);

	return ((q + parseInt(13 * (m + 1) / 5, 10) + k + parseInt(k / 4, 10) + parseInt(j / 4, 10) + 5 * j - 1) % 7);//Zeller's Congruence from g4g with ( - 1 ) added to align zero to Sunday
}
