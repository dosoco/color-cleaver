/******************
 * YOUR CODE HERE *
 ******************/
function isValidSecondary(color){
  return color === 'purple' || color === 'green' || color === 'orange'
}

// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
