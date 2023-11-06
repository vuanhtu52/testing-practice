import caesarCipher from "./caesarCipher";

test("test 1", () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe("bcdefghijklmnopqrstuvwxyza");
});

test("test 2", () => {
    expect(caesarCipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 2)).toBe("CDEFGHIJKLMNOPQRSTUVWXYZAB");
});

test("test 3", () => {
    expect(caesarCipher("abc", -1)).toBe("zab");
})

test("test 4", () => {
    expect(caesarCipher("abc, def, 123!", 1)).toBe("bcd, efg, 123!");
});

test("test 5", () => {
    expect(caesarCipher("abc, def, 123!", 0)).toBe("abc, def, 123!");
});