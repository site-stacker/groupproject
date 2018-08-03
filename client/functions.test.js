const functions = require("./functions")

// test('Adds 2 + 2 to equal 4', () => {
//     expect(functions.add(2, 2)).toBe(4);
// });



test("Toggle on/off", () => {
    let bool = functions.toggle(true)
        expect(bool).toBe(false)
});

test("Toggle off/on", () => {
    let bool = functions.toggle(false)
        expect(bool).toBe(true)
});

test("Check for Header section", () => {
    let section = functions.checkSection("Header")
        expect(section).toBe("Header")
})

test("Check for About Us section", () => {
    let section = functions.checkSection("About Us")
        expect(section).toBe("About Us")
})

test("Check for Feature section", () => {
    let section = functions.checkSection("Features")
        expect(section).toBe("Features")
})