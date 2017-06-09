function sumTwoSmallestNumbers(numbers) {  
  var frst = Math.min.apply(Math,numbers);
  var othrs = [];
  var dup = [];
  for (s = 0; s < numbers.length; s++) {
      if (numbers[s] !== frst) {
          othrs.push(numbers[s]);
      }
      else if (numbers[s] === frst) {
          dup.push(numbers[s]);
      }
  }
  if (dup.length > 1) {
      othrs.push(frst);
  }
  var scnd = Math.min.apply(Math,othrs);
  var total = frst + scnd;
  return total;
}
