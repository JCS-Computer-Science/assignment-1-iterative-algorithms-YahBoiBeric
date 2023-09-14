function binarySearch(array, searchTerm) {
	let longth 

	while (longth != searchTerm) {
		
	

	for (let i = 0; i < array.length; i++) {

		longth = (array.length + 1)/ 2
		let search = searchTerm[i]
		
		if (searchTerm == longth) {
			return longth;
		}else if (longth > searchTerm) {
			//like delete everything bigger than longth
			
		}else if (longth < searchTerm) {
			//OBLITERATE everything smaller than longth
			
		}
	

	
	}
}
}

module.exports = binarySearch;

/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
