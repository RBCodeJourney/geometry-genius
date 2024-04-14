// function calculateParallelogramArea() {
//     // const baseInput = document.getElementById('parallelogram-base');
//     // const baseText = baseInput.value;
//     // const base = parseFloat(baseText);
//     const base = getParallelogramBase();
//     console.log(base);
// }


// function getParallelogramBase() {
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
// }



function calculateParallelogramArea() {
    const base = getInputValueId('parallelogram-base');
    // console.log('base value', base);

    const height = getInputValueId('parallelogram-height');
    // console.log('height value', height);

    const area = base * height;
    console.log('area of the parallelogram is', area);

    setInnerTextById('parallelogram-area', area)
}


function getInputValueId(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}