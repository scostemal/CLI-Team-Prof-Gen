const Manager = require('../lib/Manager');

describe('Manager', () => {
  let manager;

  beforeEach(() => {
    manager = new Manager('John Doe', '1', 'johndoe@email.com', '123');
  });

  it('should have a name property', () => {
    expect(manager.name).toBeDefined();
    expect(manager.name).toBe('John Doe');
  });

  it('should have an id property', () => {
    expect(manager.id).toBeDefined();
    expect(manager.id).toBe('1');
  });

  it('should have an email property', () => {
    expect(manager.email).toBeDefined();
    expect(manager.email).toBe('johndoe@email.com');
  });

  it('should have an officeNumber property', () => {
    expect(manager.officeNumber).toBeDefined();
    expect(manager.officeNumber).toBe('123');
  });

  it('should return the name when getName is called', () => {
    expect(manager.getName()).toBe('John Doe');
  });

  it('should return the id when getId is called', () => {
    expect(manager.getId()).toBe('1');
  });

  it('should return the email when getEmail is called', () => {
    expect(manager.getEmail()).toBe('johndoe@email.com');
  });

  it('should return "Manager" when getRole is called', () => {
    expect(manager.getRole()).toBe('Manager');
  });
});
