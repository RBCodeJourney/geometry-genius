/* 
* Objective: get base, height of a triangle. Calculate the are by using the provided formula. and then display the are. 
* step-1: get base value of the triangle;
* step-2: added an id in the base input field
* step-3: use getElementById to access the input field
* step-4: get value from the input field. (value is string now)
* step-5: convert the value to a number. use parseFloat
*
*/

function calculateTriangleArea() {
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    // console.log(typeof base);

    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleBaseInput.value;
    const height = parseFloat(triangleHeightText)
    // console.log( typeof height);

    // calculate triangle area 
    const area = 0.5 * base * height;
    console.log('area of the triangle is: ', area);

    // display triangle area

    const triangleAraSpan = document.getElementById('triangle-area');
    triangleAraSpan.innerText = area;

}