function linearSearch(array, searchTerm) {

	let answer = searchTerm

	array.forEach((element, index) => {
		if (element == answer) {
			answer = index
			//console.log (array.indexOf(element))
			
			
		}

	
		
	});
	return answer;

}







module.exports = linearSearch;
	
/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 **
	 ** Return the index of the found element
	 */
