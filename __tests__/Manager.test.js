const Manager = require('../lib/Manager');

test("Hoping manager works", () => {
    const manager = new Manager("Dogg", 1, "asdg");
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.getName()).toBe("Dogg");
})