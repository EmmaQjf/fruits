
const isPositive = (num) => {
    if (num > 0) {
        return true;
    } else {
        return false;
    }
}

test("It should return true if the input is a positive number", () => {
    expect(isPositive(2)).toBe(true)
})
test("It should return false if the input is a negative number", () => {
    expect(isPositive(-2)).toBe(false)
})

test("It should return false if the input is a 0", () => {
    expect(isPositive(0)).toBe(false)
})


test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });