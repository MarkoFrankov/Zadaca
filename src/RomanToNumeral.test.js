const RomanToNumeral = require('./RomanToNumeral') 
describe("Test pretvaranja rimskih brojeva u numeričke", () => {

    it('pocetni test', () => {
        expect(RomanToNumeral(0)).toBe("")
    })

    it('Vrati I ako je broj 1', () => {
        expect(RomanToNumeral(1)).toBe("I")
    })

    it('Vrati II ako je broj 2 ', () => {
        expect(RomanToNumeral(2)).toBe("II")
    })

    it('Vrati III ako je broj 3 ', () => {
        expect(RomanToNumeral(3)).toBe("III")
    })
    
    it('Vrati IV ako je broj 4 ', () => {
        expect(RomanToNumeral(4)).toBe("IV")
    })

    it('Vrati V ako je broj 5 ', () => {
        expect(RomanToNumeral(5)).toBe("V")
    })

    it('Vrati VI ako je broj 6 ', () => {
        expect(RomanToNumeral(6)).toBe("VI")
    })

    it('Vrati VII ako je broj 7 ', () => {
        expect(RomanToNumeral(7)).toBe("VII")
    })

    it('Vrati VIII ako je broj 8 ', () => {
        expect(RomanToNumeral(8)).toBe("VIII")
    })
    
    it('Vrati IX ako je broj 9 ', () => {
        expect(RomanToNumeral(9)).toBe("IX")
    })

    it('Vrati X ako je broj 10 ', () => {
        expect(RomanToNumeral(10)).toBe("X")
    })
})