const range = function(start,end,step) {
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    const emptyArray = [];
    return emptyArray; 
  } else {
    let arrval = start + step;
    const theArray = [start]; 
    do {
      theArray.push(arrval);
      arrval += step; 
    } while (arrval <= end); 
    return theArray;
  }
}

console.log(range(-9, 3, 3));