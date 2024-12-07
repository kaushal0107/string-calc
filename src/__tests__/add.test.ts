import { add } from '../utils/add';

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('returns the number itself if the input contains one number', () => {
    expect(add("1")).toBe(1);
});

test('returns the sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
});

test('returns the sum of multiple numbers separated by commas', () => {
    expect(add("1,2,3,4,5")).toBe(15);
});

test('handles a large number of inputs comma seperated', () => {
    const largeInput = Array.from({ length: 100 }, (_, i) => i + 1).join(",");
    expect(add(largeInput)).toBe(5050);
})

test('handles numbers separated by newlines', () => {
    expect(add("1\n2\n3")).toBe(6);
});

test('handles numbers separated by both commas and newlines', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('handles a large number of inputs with mixed separators', () => {
    const largeInput = "1,2\n3,4\n5,6\n7,8,9,10";
    expect(add(largeInput)).toBe(55);
});

test('supports custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('supports custom delimiters with different characters', () => {
    expect(add("//|\n1|2|3")).toBe(6);
});

test('supports custom delimiters while handling mixed cases', () => {
    expect(add("//#\n1#2,3\n4")).toBe(10);
});

test('handles a large number of inputs with a custom delimiter', () => {
    const largeInput = "//;\n" + Array.from({ length: 100 }, (_, i) => i + 1).join(";");
    expect(add(largeInput)).toBe(5050);
});