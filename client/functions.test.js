const functions = require("./functions")

// Jon


//Michael
test('Create an about component with user', () => {
    expect(functions.createAbout(1, 2)).toBe('Project created and saved to user.')
});

test('Create an about component without user', () => {
    expect(functions.createAbout(null, 5)).toBe('Project #5 created.')
});

test('Publish with a title of Hello Friend and an id of 7 should return www.skizzl.com/#/z/7/hello-friend', () => {
    expect(functions.publish('Hello Friend', 7)).toBe('www.skizzl.com/#/z/7/hello-friend')
});

test('Publish with a title of null and an id of 7 should return data invalid', () => {
    expect(functions.publish(null, 7)).toBe('data invalid')
});

test('Publish with a title of AbcD eFGh and an id of null should return data invalid', () => {
    expect(functions.publish('AbcD eFGh', null)).toBe('data invalid')
})

//Sebastian