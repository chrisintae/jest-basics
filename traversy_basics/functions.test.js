const functions = require('./functions')

// before and after each test
// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

// before all tests and after all tests
// beforeAll(() => initDatabase())
// afterAll(() => closeDatabase())

// const initDatabase = () => console.log('DB init...')
// const closeDatabase = () => console.log('DB closed...')

const nameCheck = () => console.log('checking name...')

describe('checking names', () => {
    beforeEach(() => nameCheck())

    test('user is Jeff', () => {
        const user = 'Jeff'
        expect(user).toBe('Jeff')
    })

    test('user is Karen', () => {
        const user = 'Karen'
        expect(user).toBe('Karen')
    })
})

// CHECK toBe & not.toBe 
// for primitive types 
// toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
});
// not.toBe
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5)
});

// output: 
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        1.725s
// ----------

//  CHECK FOR TRUTHY & FALSY VALUES
//  toBeNull matches only null
//  toBeUndefined matches only undefined
//  toBeDefined is the opposite of toBeUndefined
//  toBeTruthy matches anything that an if statement treats as true
//  toBeFalsy matches anything that an if statement treats as false

// isNull
test('Should  be null', () => {
    expect(functions.isNull()).toBeNull()
});

// toBeFalsy
test('Should  be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy() // 0, null same result as undefined
})

// output: 
// $ jest
//  PASS  ./truthy-falsey-values2.test.js
//   ✓ Adds 2 + 2 to equal 4 (5ms)
//   ✓ Adds 2 + 2 to NOT equal 5
//   ✓ Should  be null (1ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        1.712s, estimated 2s
// Ran all test suites.
// ----------

// toEqual
// Compare ojects and arrays
test('User should be Chris Intae', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Chris',
        lastName: 'Intae'
    })
});

// Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

test('Should be under 1600', () => {
    const load3 = 800;
    const load4 = 800;
    expect(load3 + load4).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
})

// arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
})

// WORKING WITH ASYNC DATA

// promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1); // verify assertions in callback or async are called
    return functions.fetchUser() // return promise
        .then(data => {
            expect(data.name).toEqual('Leanne Graham') //test
        })
})

// async await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1); 
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})