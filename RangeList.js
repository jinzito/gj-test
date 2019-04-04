// Task: Implement a class named 'RangeList'
// A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
// A range list is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)

const hasIntersection = (a, b) => !(b[0] > a[1] || a[0] > b[1]);

const addToRanges = (a, array) => {
    const intersectedRange = array
        .filter((b) => hasIntersection(a, b))
        .reduce((acc, b) => ([Math.min(acc[0], b[0]), Math.max(acc[1], b[1])]), a);
    const nonIntersectedRanges = array.filter((b) => !hasIntersection(a, b));
    return [intersectedRange, ...nonIntersectedRanges].sort(sortRangesByOrder);
};

const sortRangesByOrder = (a, b) => a[0] - b[0];

const isValidRange = (range) =>
    Array.isArray(range) &&
    range.length === 2 &&
    Number.isInteger(range[0]) &&
    Number.isInteger(range[1]);

const removeFromRanges = (a, array) => {
    const result = [];
    array
        .filter((b) => hasIntersection(a, b))
        .forEach(b => {
            if (a[0] > b[0]) {
                result.push([b[0], a[0]]);
            }
            if (a[1] < b[1]) {
                result.push([a[1], b[1]]);
            }
        });
    const nonIntersectedRanges = array.filter((b) => !hasIntersection(a, b));
    return result.concat(nonIntersectedRanges).sort(sortRangesByOrder);
};

class RangeList {

    constructor() {
        this.ranges = [];
    }

    /**
     * Adds a range to the list
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     */
    add(range) {
        if (isValidRange(range)) {
            this.ranges = addToRanges(range, this.ranges);
        }
    }

    /**
     * Removes a range from the list
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     */
    remove(range) {
        if (isValidRange(range)) {
            this.ranges = removeFromRanges(range, this.ranges);
        }
    }

    /**
     * Prints out the list of ranges in the range list
     */
    print() {
        console.log(this.ranges.reduce((acc, range) => (acc += `[${range[0]} ${range[1]}) `), ''));
    }
}