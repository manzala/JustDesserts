let assert = require('assert');


describe('Basic Mocha Test', function(){
    it('should throw errors',function(){
        var obj = {name: 'Jone', gender: 'girl'}
        assert.equal(obj.name, 'Jone')
    })
})