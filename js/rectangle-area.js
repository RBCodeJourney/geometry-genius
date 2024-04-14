function calculateRectangleArea() {
    // get length of the rectangle 
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);

    //  get width of the rectangle 

    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);


    // calculate rectangle are 

    const area = length * width;
    console.log('area of the rectangle', area);


    // display rectangle are 

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}