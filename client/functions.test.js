const functions = require("./functions");

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
describe("Fonts arr in reducer should work", () => {
  let fonts = [
    { family: "Lato" },
    { family: "Lora" },
    { family: "Merriweather" },
    { family: "Montserrat" },
    { family: "Noto Sans" },
    { family: "Open Sans" },
    { family: "Open Sans Condensed" },
    { family: "Oswald" },
    { family: "PT Sans" },
    { family: "PT Serif" },
    { family: "Playfair Display" },
    { family: "Poppins" },
    { family: "Raleway" },
    { family: "Roboto" },
    { family: "Roboto Condensed" },
    { family: "Roboto Mono" },
    { family: "Roboto Slab" },
    { family: "Arvo" },
    { family: "Source Sans Pro" },
    { family: "Ubuntu" }
  ];
  test("fonts should contain a specific object", () => {
    expect(fonts).toContainEqual({ family: "Lato" });
  });
  test("array should have a length of 20", () => {
    expect(fonts.length).toBe(20);
  });
  test("should be defined", () => {
      expect(fonts).toBeDefined()
  });
  test("should be an arr", () => {
      expect(Array.isArray(fonts)).toBe(true)
  });
  test("key value pairs should only be 1", () => {
      let relation = {family: 'Arvo'}
      let show = jest.fn(font => font.family)
      show(relation)
      expect(show).toHaveReturnedWith('Arvo')
  })
});
