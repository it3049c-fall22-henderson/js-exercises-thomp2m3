// use the logical operator not if statements

// or: should return true if either a or b are truthy. False, if both are false
function or(a, b) {
  x = (a || b)
  return x;
}

//and: should return true only if both a and b are truthy
function and(a, b) {
  x = (a && b)
  return x;
}

module.exports = {
  or,
  and
};