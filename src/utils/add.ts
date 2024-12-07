export function add(numbers: string): number {
    if (numbers.trim() === "") return 0;

    let delimiter = /,|\n/;
    let input = numbers;

    if (numbers.startsWith("//")) {
        const match = numbers.match(/^\/\/(.+)\n/);

        if (match) {
            const customDelimiter = match[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            delimiter = new RegExp(`${customDelimiter}|,|\\n`);
            input = numbers.slice(match[0].length);
        }
    }

    const numArray = input.split(delimiter).map((num) => parseInt(num, 10));

    const negatives = numArray.filter((num) => num < 0);

    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}