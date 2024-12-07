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

test('returns the sum of multiple numbers', () => {
    expect(add("1,2,3,4,5")).toBe(15);
});

test('handles spaces in input string', () => {
    expect(add("1, 2, 3")).toBe(6);
});

test('handles a large number of inputs', () => {
    const largeInput = Array.from({ length: 100 }, (_, i) => i + 1).join(",");
    expect(add(largeInput)).toBe(5050);
})