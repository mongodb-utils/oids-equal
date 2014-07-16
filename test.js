
var ObjectID = require('mongodb').ObjectID
var assert = require('assert')

var equal = require('./')

describe('OIDs Equal', function () {
  it('should return false if not equal', function () {
    assert(!equal([new ObjectID()], [new ObjectID(), new ObjectID()]))
  })

  it('should return true if equal', function () {
    var arr = [new ObjectID(), new ObjectID()]
    assert(equal(arr, arr.slice()))
  })
})
