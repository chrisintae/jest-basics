const isAnagram = require('./anagram')

test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function')
})

test ('"cinema" is an anagram of "iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy()
})

test ('"dormitory" is an anagram of "dirty room##"', () => {
    expect(isAnagram('dormitory', 'dirty room##')).toBeTruthy() // special characters and case don't matter
})

test ('"Hello" is an anagram of "Aloha"', () => {
    expect(isAnagram('Hello', 'Aloha')).toBeFalsy()
})