const Intern = require('../lib/Intern');

test("Hoping intern works", () => {
    const intern = new Intern("Bert", 1, "asdg");
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.getName()).toBe("Bert");
})