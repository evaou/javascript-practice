const reverse = require('./index');

describe("function reverse()", () => {
  it('Reverse function exists', () => {
    expect(reverse).toBeDefined();
  });

  it('Reverse reverses a string', () => {
    expect(reverse('abcd')).toEqual('dcba');
  });

  it('Reverse reverses a string', () => {
    expect(reverse('  abcd')).toEqual('dcba  ');
  });
});

describe("function example()", () => {
  it('str1', () => {
      expect(reverse('apple')).toEqual('elppa');
  });

  it('str2', () => {
      expect(reverse('hello')).toEqual('olleh');
  });

  it('str3', () => {
      expect(reverse('Greetings!')).toEqual('!sgniteerG');
  });
});
