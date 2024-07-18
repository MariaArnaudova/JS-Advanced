const { expect } = require('chai');
const { rgbToHexColor } = require('./rgbToHex');

describe('Convert RGB to Hex', () => {
    it('Should throw exception if red is out of range', () => {
        let colorNumber = -1;
        expect(rgbToHexColor(colorNumber, 20, 20)).to.be.undefined;
        expect(rgbToHexColor(20, colorNumber, 20)).to.be.undefined;
        expect(rgbToHexColor(20, 20, colorNumber)).to.be.undefined;
    });

    it('Should return correct output in HEX', () => {
        let colorNumber = '#00FF00';
        expect(rgbToHexColor(0,255,0)).to.equal(colorNumber);
    });

    
    it('Should return correct output in white color', () => {
        let whiteColor = '#FFFFFF';
        expect(rgbToHexColor(255,255,255)).to.equal(whiteColor);
    });

    it('Should return correct output in black color', () => {
        let blackColor = '#000000';
        expect(rgbToHexColor(0,0,0)).to.equal(blackColor);
    });

    it('Should be undefine if color in rgb is string', () => {
        expect(rgbToHexColor('A', 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 'A', 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 'A')).to.be.undefined;
    });

    it('Should be undefine if red is over 255', () => {
        let redNumber = 300;
        expect(rgbToHexColor(redNumber, 20, 20)).to.be.undefined;
        expect(rgbToHexColor(20, redNumber, 20)).to.be.undefined;
        expect(rgbToHexColor(20, 20, redNumber)).to.be.undefined;
    });

    it('Should be undefine if missing parameter', () => {
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor(0, 0)).to.be.undefined;
    });

})