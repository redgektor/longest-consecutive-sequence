module.exports = function longestConsecutiveLength(array) {
	var count = 0, result = 0;
	if (array.length == 0) return 0;
	if (array.length == 1) return 1;

	array.sort( compare );

	for (var i = 0; i < array.length; i++) {
		if (array[i] === array[i+1]) continue;
		if (array[i] === array[i+1] - 1) {
			count++;
			if ( count > result) {
				result = count;
			}
		} else {
			count = 0;
		}
  	}
  	return result + 1;

	// function findSecond(element) {
	// 	if (array.indexOf(element+1) >= 0) {
	// 		count++;
	// 		findSecond(element+1);
	// 	}
	// }

	function compare(a,b) {
		return a - b;
	}
}
