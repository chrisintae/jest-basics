const chunkArray = (arr, len) => {
    // init chunked array
    const chunkedArr= []

    // loop through arr
    arr.forEach(val => {
        // get last element
        const last = chunkedArr[chunkedArr.length - 1]

        // check if last and if length is equal to the chunk len
        if (!last || last.length === len) {
            chunkedArr.push([val])
        } else {
            last.push(val)
        }
    });

    return chunkedArr
}

module.exports = chunkArray