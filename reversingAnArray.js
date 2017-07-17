var reverseArray = function reverseArray (arr) {
        var reversedArray = [],
            i;
        for (i = arr.length - 1; i >= 0; i--) {
            reversedArray.push(arr[i]);
        };
        return reversedArray;
    },
    reverseArrayInPlace = function reverseArryInPlace (arr) {
        var swapIndices = function swapIndices (index1, index2) {
                var temp = arr[index1];
                arr[index1] = arr[index2];
                arr[index2] = temp;
            },
            numOfSwapsNeeded = Math.floor(arr.length / 2),
            currentSwap,
            leftSideIndex = 0,
            rightSideIndex = arr.length -1;
        for (currentSwap = 1; currentSwap <= numOfSwapsNeeded; currentSwap++) {
            swapIndices(leftSideIndex, rightSideIndex);
            leftSideIndex++;
            rightSideIndex--;
        };
    },
    sampleArray = [1, 2, "three", 4.0, false];
console.log("the sample: " + sampleArray);
console.log("a new array that is the sample reversed: " + reverseArray(sampleArray));
console.log("the sample remains!: " + sampleArray);
reverseArrayInPlace(sampleArray);
console.log("the sample has been mutated: " + sampleArray);
