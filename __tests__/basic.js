const config = require('../');

const isObject = obj => typeof obj === 'object' && obj !== null;
describe('test basic properties of config', () => {
  it('should contain a parserOptions object', () => {
    expect(isObject(config.parserOptions)).toBeTruthy();
  });
  it('should contain an env object', () => {
    expect(isObject(config.env)).toBeTruthy();
  });
  it('should contains an extends array', () => {
    expect(Array.isArray(config.extends)).toBeTruthy();
  });
  it('extends array should not contain react rules', () => {
    expect(config.extends).not.toContain('react.js');
  });
});
