"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = Math.pow(b, 2) - 4 * a * c;
	if (discriminant < 0) {
		return arr = [];
	} else if (discriminant == 0) {
		let root = -b / (2 * a);
		return arr = [root];
	} else if (discriminant > 0) {
		let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return arr = [root1, root2];
	}
	return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = percent * 0.01;
	let p = (1 / 12 * percent);
	let bodyOfCredit = amount - contribution;
	let payment = bodyOfCredit * (p + (p / (Math.pow((1 + p), countMonths) - 1)));
	let allPayment = Number((payment * countMonths).toFixed(2));
	return allPayment;

}
