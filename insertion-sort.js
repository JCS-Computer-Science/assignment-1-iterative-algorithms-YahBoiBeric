function insertionSort(array) {
	
	/*for (let i = 0; i < array.length; i++) {
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


	*/
	let l = array.length
	for (let i = 1; i < l; i++) {
	let curVal = array[i]
	let n = i-1
	while ((n > -1) && (curVal < array[n])) {
		array[n+1] = array[n]
		n--
	}
	      array[n+1]= curVal
	}
	return array;
}
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */

module.exports = insertionSort;
