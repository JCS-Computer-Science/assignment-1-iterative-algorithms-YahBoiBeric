function insertionSort(array) {
	
	for (let i = 0; i < array.length; i++) {
		let ind = i
		let subject = array[i]
		 for (let j = 0; j < array.length +1; j++) {
			subject = array[j + 1]
				ind = [j]
			if (array[j] > subject) {
				
			let temp = subject
			array[ind] = array[i]
			array[i] = temp

				
			}
			
		 }


		
		
	 }


	return array;
}
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */

module.exports = insertionSort;
