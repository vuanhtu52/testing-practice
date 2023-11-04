import capitalize from "./capitalize";

test("test 1", () => {
    expect(capitalize("hello")).toBe("Hello"); 
});

test("test 2", () => {
    expect(capitalize("HELLO")).toBe("Hello"); 
});

test("test 3", () => {
    expect(capitalize("Hello How are you?")).toBe("Hello how are you?"); 
});

test("test 4", () => {
    expect(capitalize("123")).toBe("123"); 
});

test("test 5", () => {
    expect(capitalize("!?.")).toBe("!?."); 
});