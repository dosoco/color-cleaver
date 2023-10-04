/******************
 * YOUR CODE HERE *
 ******************/
function isValidPrimary(color){
  return color === 'red' || color === 'yellow' || color === 'blue'
}

// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;
