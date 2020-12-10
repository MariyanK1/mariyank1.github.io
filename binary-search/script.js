function basicFunction() {
    const selectors = {
        searchBtn: () => document.querySelector('button'),
        inputKey: () => document.querySelector('#key > input'),
        inputArr: () => document.querySelector('#array > input'),
        result: () => document.querySelector('#result')
    }

    selectors.result().textContent = `Does ${selectors.inputKey().value} exist in [${selectors.inputArr().value}] ?`;

    selectors.searchBtn().addEventListener('click', () => {
        // Validating inputs

        if (!selectors.inputArr().value || !selectors.inputKey().value) {
            alert(`The field/s shouldn't be empty`);
            return;
        }

        if (selectors.inputArr().value.includes(',') &&
            !selectors.inputArr().value.includes(' ') &&
            selectors.inputArr().value.match(/\d/g)) {

            const numArr = selectors.inputArr().value.split(',').map(Number);
            const key = Number(selectors.inputKey().value);

            binarySearch(numArr, key)
                ? selectors.result().innerHTML = `Does ${selectors.inputKey().value} exist in [${selectors.inputArr().value}] ? <br> Yes!`
                : selectors.result().innerHTML = `Does ${selectors.inputKey().value} exist in [${selectors.inputArr().value}] ? <br> No!`
        } else {

            alert(`Something's wrong`);
            return;
        }


    })


    function binarySearch(numArr, key) {
        let middleIndex = Math.floor(numArr.length / 2);
        let middleElem = numArr[middleIndex];

        // The base case
        if (middleElem === key) return true;

        // Passing the second half
        else if (middleElem < key && numArr.length > 1) {
            return binarySearch(numArr.splice(middleIndex, numArr.length), key);
        }

        // Passing the first half    
        else if (middleElem > key && numArr.length > 1) {
            return binarySearch(numArr.splice(0, middleIndex), key);
        }

        // When the middle element is not the key and the array length is 0 or 1
        else return false;
    }

}

basicFunction()
