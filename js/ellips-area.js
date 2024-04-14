function calculateEllipseArea() {
    const majorRadius = getInputValueId('ellipse-major-radius');
    const minorRadius = getInputValueId('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setInnerTextById('ellipse-area', area);
}