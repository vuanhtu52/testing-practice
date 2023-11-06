import calculator from "./calculator";

test("add test 1", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test("add test 2", () => {
    expect(calculator.add("1", 2)).toBe(3);
});

test("add test 3", () => {
    expect(() => calculator.add("1", "hello")).toThrow("Invalid argument");
});

test("add test 4", () => {
    expect(calculator.add(1.5, 2.5)).toBe(4);
});

test("add test 5", () => {
    expect(calculator.add("1.5", 2.5)).toBe(4);
});

test("add test 6", () => {
    expect(() => calculator.add("1..5", 2.5)).toThrow("Invalid argument");
});

test("subtract test 1", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
});

test("subtract test 2", () => {
    expect(calculator.subtract("1", 2)).toBe(-1);
});

test("subtract test 3", () => {
    expect(() => calculator.subtract("1", "hello")).toThrow("Invalid argument");
});

test("subtract test 4", () => {
    expect(calculator.subtract(1.5, 2.5)).toBe(-1);
});

test("subtract test 5", () => {
    expect(calculator.subtract("1.5", 2.5)).toBe(-1);
});

test("subtract test 6", () => {
    expect(() => calculator.subtract("1..5", 2.5)).toThrow("Invalid argument");
});

test("multiply test 1", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
});

test("multiply test 2", () => {
    expect(calculator.multiply("1", 2)).toBe(2);
});

test("multiply test 3", () => {
    expect(() => calculator.multiply("1", "hello")).toThrow("Invalid argument");
});

test("multiply test 4", () => {
    expect(calculator.multiply(1.5, 2.5)).toBe(3.75);
});

test("multiply test 5", () => {
    expect(calculator.multiply("1.5", 2.5)).toBe(3.75);
});

test("multiply test 6", () => {
    expect(() => calculator.multiply("1..5", 2.5)).toThrow("Invalid argument");
});

test("divide test 1", () => {
    expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
});

test("divide test 2", () => {
    expect(calculator.divide("1", 2)).toBeCloseTo(0.5);
});

test("divide test 3", () => {
    expect(() => calculator.divide("1", "hello")).toThrow("Invalid argument");
});

test("divide test 4", () => {
    expect(calculator.divide(1.5, 2.5)).toBeCloseTo(0.6);
});

test("divide test 5", () => {
    expect(calculator.divide("1.5", 2.5)).toBeCloseTo(0.6);
});

test("divide test 6", () => {
    expect(() => calculator.divide("1..5", 2.5)).toThrow("Invalid argument");
});

test("divide test 7", () => {
    expect(() => calculator.divide(3, 0)).toThrow("Denominator cannot be 0");
});

test("divide test 8", () => {
    expect(calculator.divide(1, 3)).toBeCloseTo(0.33);
});