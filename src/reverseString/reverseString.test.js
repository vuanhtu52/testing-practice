import reverseString from "./reverseString";

test("test 1", () => {
    expect(reverseString("hello")).toBe("olleh");
});

test("test 2", () => {
    expect(reverseString("Hello")).toBe("olleH");
});

test("test 3", () => {
    expect(reverseString("hel lo")).toBe("ol leh");
});