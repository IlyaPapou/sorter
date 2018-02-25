class Sorter {
    constructor() {
        this.arr = [];
        this.comporator = (a, b) => a - b;
    }

    get length() {
        // your implementation
        return this.arr.length
    }

    add(element) {
        // your implementationthis.arr
        this.arr.push(element);
    }

    at(index) {
        // your implementation
        return this.arr[index]
    }

    toArray() {
        // your implementation
        return this.arr
    }

    sort(indices) {
        // your implementation
        let tmp = [];
        for (let i = 0; i < indices.length; i++) {
            tmp.push(this.arr[indices[i]])
        }
        tmp.sort(this.comporator);
        indices.sort()
        for (let i = 0; i < indices.length; i++) {
            this.arr[indices[i]] = tmp[i]
        }
    }

    setComparator(compareFunction) {
        // your implementation
        this.comporator = compareFunction
    }
}

module.exports = Sorter;