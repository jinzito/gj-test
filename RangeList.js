// Task: Implement a class named 'RangeList'
// A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
// A range list is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)

const hasIntersection = (a, b) => !(b[0] > a[1] || a[0] > b[1]);
const getIntercept = (a, b) => {
    if (b[0] > a[1] || a[0] > b[1]) {
        return null;
    } else {
        return [
            Math.max(a[0], b[0]),
            Math.min(a[1], b[1])
        ];
    }
};

const addToRanges = (a, array) => {
    let aa = array.filter((b) => hasIntersection(a, b));
    aa.push(a);
    if (aa.length > 1) {
        aa = aa.reduce((prev, curr) => {
            const min = Math.min(prev[0], curr[0]);
            const max = Math.max(prev[1], curr[1]);
            return [min, max];
        });
    } else {
        aa = a;
    }
    const cc = array.filter((b) => !hasIntersection(a, b));
    return [aa, ...cc].sort((a, b) => a[0] - b[0]);
};




console.log(' 1:', addToRanges([6, 18], [[1, 3], [5, 10], [12, 15], [17, 20], [30, 40]]));
console.log(' 2:', addToRanges([100, 300], [[200, 500]]));
console.log(' 3:', addToRanges([100, 200], [[2, 5], [7, 80]]));
console.log(' 4:', addToRanges([2, 5], [[100, 300]]));
console.log(' 5:', addToRanges([2, 5], [[1, 3] , [4, 10], [100, 300]]));
console.log(' 6:', addToRanges([2, 400], [[1, 3] , [4, 10], [100, 300]]));
console.log(' 7:', addToRanges([1, 3], [[5, 7], [10, 11]]));
console.log(' 8:', addToRanges([5, 10], [[5, 7], [9, 11]]));
console.log(' 9:', addToRanges([5, 10], [[1, 2], [4, 5], [7, 11], [100, 300]]));
console.log('10:', addToRanges([5, 10], []));


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
        // TODO: implement this
    }

    /**
     * Prints out the list of ranges in the range list
     */
    print() {
        // TODO: implement this
        console.log(this.ranges)
    }
}

/*
// Example run
const rl = new RangeList();

rl.add([1, 5]);
rl.print();
// Should display: [1, 5)

rl.add([10, 20]);
rl.print();
// Should display: [1, 5) [10, 20)

rl.add([20, 20]);
rl.print();
// Should display: [1, 5) [10, 20)

rl.add([20, 21]);
rl.print();
// Should display: [1, 5) [10, 21)

rl.add([2, 4]);
rl.print();
// Should display: [1, 5) [10, 21)

rl.add([3, 8]);
rl.print();
// Should display: [1, 8) [10, 21)

rl.remove([10, 10]);
rl.print();
// Should display: [1, 8) [10, 21)

rl.remove([10, 11]);
rl.print();
// Should display: [1, 8) [11, 21)

rl.remove([15, 17]);
rl.print();
// Should display: [1, 8) [11, 15) [17, 21)

rl.remove([3, 19]);
rl.print();
// Should display: [1, 3) [19, 21)
// jerry-ai-please-rename-to-js-ext.txt
// Displaying jerry-ai-please-rename-to-js-ext.txt.
*/