module.exports = function longestConsecutiveLength(array) {
	var result = 0;
  for (var i = 0; i < array.length; i++) {
  	var count = 0; 
	findSecond(array[i]);
  	if ( count > result )
  		result = count+1;
  }
  return result;

	function findSecond(element) {
		if (array.indexOf(element+1) > 0) {
			count++;
			findSecond(element+1);
		}
	}
}
