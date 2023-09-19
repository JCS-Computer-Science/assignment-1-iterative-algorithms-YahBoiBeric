function binarySearch(arr, searchTerm) {
	let longth 

	//while (longth != searchTerm) {
		
	
let l = arr.length
let une = 0
console.log(une);
let dix = (arr.length - 1)
console.log(dix);
	for (let i = 0; i < l; i++) {

		longth = (Math.floor((une + dix )/ 2))
		console.log(longth);
	
		//let search = searchTerm[i]
		//console.log(longth)
		//console.log(arr);
	
		
		if (searchTerm == arr[longth]) {
			return longth;
		}else if (arr[longth] > searchTerm) {
			dix = longth - 1
			console.log(arr); 
			console.log(dix);
			
			
		}else if (arr[longth] < searchTerm) {
			//OBLITERATE everything smaller than longth
			une = longth + 1
			console.log(arr);
			console.log(une);
			
		}
	

	
	}
}
//}




module.exports = binarySearch;

/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
