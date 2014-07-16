
module.exports = function (arr1, arr2) {
  if (!arr1 || !arr2) return false
  var length = arr1.length
  if (length !== arr2.length) return false
  for (var i = 0; i < length; i++)
    if (!arr1[i].equals(arr2[i]))
      return false
  return true
}
