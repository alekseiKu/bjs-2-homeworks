function compareArrays(arr1, arr2) {
	if (arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index])) {
		return true;
	} else {
		return false;
	}
};

function getUsersNamesInAgeRange(users, gender) {

	if (gender === "мужской") {

		let result = users.filter(gender => gender.gender === "мужской").map(age => age.age).reduce((acc, item, index, users) => {

			acc += item;
			if (index === users.length - 1) {
				return acc / users.length;
			}
			return acc;
		}, 0);
		return result;

	} else if (gender === "женский") {

		let result = users.filter(gender => gender.gender === "женский").map(age => age.age).reduce((acc, item, index, users) => {
			acc += item;
			if (index === users.length - 1) {
				return acc / users.length;
			}
			return acc;
		}, 0);
		return result;

	} else {
		return result = 0;
	}
}
