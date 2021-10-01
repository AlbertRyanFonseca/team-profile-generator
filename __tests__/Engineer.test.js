const Engineer = require('../lib/Engineer');

test("Hoping engineer works", () => {
    const engineer = new Engineer("Pat", 1, "asdg");
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.getName()).toBe("Pat");
})