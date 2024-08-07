const expect = require('chai').expect;

function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('is odd or even tests', () => {
    it('shout be undefined if number', () => {
        expect(isOddOrEven(3)).to.be.undefined;
    })

    it('should be undefined if array', () => {
        expect(isOddOrEven([])).to.be.undefined;
    })

    it('should be undefined if object', () => {
        expect(isOddOrEven({})).to.be.undefined;
    })

    it('should return odd if string is odd', () => {
        expect(isOddOrEven('asd')).to.be.equal('odd');
    })

    it('should return even if even', () => {
        expect(isOddOrEven('asdf')).to.be.equal('even');
    })
})
