const Employee = require('../lib/Employee');

test("Hoping employee works", () => {
    const employee = new Employee("Gab", 1, "asdg");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.getName()).toBe("Gab");
})