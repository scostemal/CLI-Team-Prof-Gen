const Employee = require("../lib/Employee");

describe("Employee", () => {
    let employee;


    // create a new instance of employee before each test case is ran.
    beforeEach(() => {
        employee = new Employee("John Doe", 1, "johndoe@example.com");
    });

    it("should have a name property", () => {
        expect(employee.name).toBeDefined();
        expect(employee.name).toEqual("John Doe");
    });

    it("should have an id property", () => {
        expect(employee.id).toBeDefined();
        expect(employee.id).toEqual(1);
      });
    
      it("should have an email property", () => {
        expect(employee.email).toBeDefined();
        expect(employee.email).toEqual("johndoe@example.com");
      });
    
      it("should have a getName method", () => {
        expect(employee.getName).toBeDefined();
        expect(employee.getName()).toEqual("John Doe");
      });
    
      it("should have a getId method", () => {
        expect(employee.getId).toBeDefined();
        expect(employee.getId()).toEqual(1);
      });
    
      it("should have a getEmail method", () => {
        expect(employee.getEmail).toBeDefined();
        expect(employee.getEmail()).toEqual("johndoe@example.com");
      });
    
      it("should have a getRole method", () => {
        expect(employee.getRole).toBeDefined();
        expect(employee.getRole()).toEqual("Employee");
      });
    });

