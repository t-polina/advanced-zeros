module.exports = function getZerosCount(number, base) {
  for( let i = 2; i < base; i++) {
    if (base % i === 0) {
      let dividers = [];
      let i = 2;
      while (i <= base) {
      if (base % i === 0) {
        base = base / i;
        dividers.push(i);
        i = 1;
      }
      i++;
    }
    let minimalNumber = Math.floor(zeroNumber(number, dividers[0]) / elementNumber(dividers[0], dividers));
    for (let i = 1; i < dividers.length; i++) {
      let newMinimalNumber = Math.floor(zeroNumber(number, dividers[i]) / elementNumber(dividers[i], dividers));
      minimalNumber = newMinimalNumber < minimalNumber ? newMinimalNumber : minimalNumber;
    }
    return minimalNumber; 
    }
  }
  return zeroNumber(number, base);
}

function elementNumber(element, arr) {
  let number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      number++;
    }
  }
  return number;
}

function zeroNumber(counte, base) {
  let number = 0;
  while (counte >= base) {
    counte = Math.floor(counte / base);
    number = number + counte;
  }
  return number;
}
