function bubbleSort(array) {
               loop = array.length
for (let i = 0; i < loop -1; i++) {
    swapped = false
    
    for (let j = 0; j < loop - 1; j++) {
        if (array[j]>array[j+1]) {
            var b = array[j]
            array[j] = array[j+1]
            array[j+1] = b
            swapped =true
        }
        
    }
    if (swapped=false) {
        break
        
    }
}

	return array;
}
/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */
   //https://www.tutorialspoint.com/data_structures_algorithms/bubble_sort_algorithm.htm

module.exports = bubbleSort;
