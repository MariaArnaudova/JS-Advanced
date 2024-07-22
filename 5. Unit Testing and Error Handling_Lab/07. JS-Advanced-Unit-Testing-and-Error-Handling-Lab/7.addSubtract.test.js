const { expect } = require('chai');
const { createCalculator } = require('./7.addSubtract');


describe('Calculating functions', () => {
    it('return functions as properties'), () => {
        expect(typeof (createCalculator().add).to.equal('function'));
        expect(typeof (createCalculator().subtract).to.equal('function'));
        expect(typeof (createCalculator().get).to.equal('function'));
    };

    it('Keep an internal sum that can’t be modified from the outside'), () => {
        let testFunction = createCalculator;
        testFunction.add('8');
        let get = testFunction.get()
        expect(get).to.be.equal(8);
    };
})