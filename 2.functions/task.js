function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}

	let avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	let difference = 0;

	if (typeof arr !== 'undefined' && arr.length > 0) {
		difference = max - min;
	} else {
		difference = 0;
	}

	return difference;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let avg;

	if (typeof arr !== 'undefined' && arr.length > 0) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
				countEvenElement++;
			}
		}
		avg = sumEvenElement / countEvenElement;
	} else {
		avg = 0;
	}

	return avg;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	let valueFunction;

	if (arrOfArr.length === 0) {
		maxWorkerResult = 0;
	} else {
		for (i = 0; i < arrOfArr.length; i++) {
			valueFunction = func(...arrOfArr[i]);
			if (valueFunction > maxWorkerResult) {
				maxWorkerResult = valueFunction;
			}
		}
	}
	return maxWorkerResult;
}
