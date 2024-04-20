/* Month is given as January, February, etc, year is given as int */
export function numDays(year, month) {
	return 28;
}

/* Day is given as one indexed day, return value is zero-indexed day of week */
export function dayOfWeek(year, month, day) {
	return day % 7;
}
