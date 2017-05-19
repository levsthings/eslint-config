var config = require('../')
var test = require('tape')

test('check rules object', function (t) {
    t.ok(isObject(config.rules))
    t.end()
})

function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}
