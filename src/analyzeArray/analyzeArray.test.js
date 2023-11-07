import analyzeArray from "./analyzeArray";

test("test 1", () => {
    expect(() => analyzeArray([])).toThrow("Array cannot be empty");
});

test("test 2", () => {
    expect(() => analyzeArray(["hello", "hi"])).toThrow("Array must contain all numbers");
});

test("test 3", () => {
    expect(analyzeArray(["1", "2", 3])).toStrictEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 3
    });
});

test("test 4", () => {
    expect(analyzeArray([2, 3, 5])).toStrictEqual({
        average: 3.33,
        min: 2,
        max: 5,
        length: 3
    });
});

// Test with infinite results: 3.333333
// Test with floats
// Test with different data types: objects, etc. (test again with calculator)

