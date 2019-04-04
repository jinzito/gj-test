// Task: Implement a class named 'RangeList'
// A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
// A range list is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)

const hasIntersection = (a, b) => !(b[0] > a[1] || a[0] > b[1]);

const addToRanges = (a, array) => {
    const bb = array
        .filter((b) => hasIntersection(a, b))
        .reduce((acc, b) => ([Math.min(acc[0], b[0]), Math.max(acc[1], b[1])]), a);
    const cc = array.filter((b) => !hasIntersection(a, b));
    return [bb, ...cc].sort((a, b) => a[0] - b[0]);
};

// console.log(' 1:', addToRanges([6, 18], [[1, 3], [5, 10], [12, 15], [17, 20], [30, 40]]));
// console.log(' 2:', addToRanges([100, 300], [[200, 500]]));
// console.log(' 3:', addToRanges([100, 200], [[2, 5], [7, 80]]));
// console.log(' 4:', addToRanges([2, 5], [[100, 300]]));
// console.log(' 5:', addToRanges([2, 5], [[1, 3] , [4, 10], [100, 300]]));
// console.log(' 6:', addToRanges([2, 400], [[1, 3] , [4, 10], [100, 300]]));
// console.log(' 7:', addToRanges([1, 3], [[5, 7], [10, 11]]));
// console.log(' 8:', addToRanges([5, 10], [[5, 7], [9, 11]]));
// console.log(' 9:', addToRanges([5, 10], [[1, 2], [4, 5], [7, 11], [100, 300]]));
// console.log('10:', addToRanges([5, 10], []));

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
    const cc = array.filter((b) => !hasIntersection(a, b));
    return result.concat(cc).sort((a, b) => a[0] - b[0]);
};

// console.log(" remove :"); //[1, 8) [11, 15) [17, 21)
// console.log(" 1:", removeFromRanges([15,17], [[1,8], [11,21]])); //[1, 8) [11, 15) [17, 21)
// console.log(" 2:", removeFromRanges([10,10], [[1,8], [11,21]])); //[1, 8) [10, 21)


class RangeList {

    /**
     *
     * NOTE: Feel free to add any extra member variables/functions you like.
     */

    constructor() {
        this.ranges = [];
    }

    /**
     * Adds a range to the list
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     */
    add(range) {
        this.ranges = addToRanges(range, this.ranges);
    }

    /**
     * Removes a range from the list
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     */
    remove(range) {
        this.ranges = removeFromRanges(range, this.ranges);
    }

    /**
     * Prints out the list of ranges in the range list
     */
    print() {
        console.log(this.ranges.reduce((acc, range) => (acc += `[${range[0]} ${range[1]}) `), ''));
    }
}