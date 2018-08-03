const functions = require("./functions");

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
