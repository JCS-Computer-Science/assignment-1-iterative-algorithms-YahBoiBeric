function selectionSort(array) {
	let l = array.length
	
	//console.log(one);

	for (let i = 0; i < l; i++) {
		let one = array[i]
		let ind = i
		for (let j = i; j < l + 1 ; j++) {
			if(one >= array[j]){
			one = array[j]
			ind = j

			}
		}
		if (one != array[i]) {
			let temp = one
			array[ind] = array[i]
			array[i] = temp
			
		}
		
		
	}
	

	return array;
}
/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */

module.exports = selectionSort;
