function init() {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    document.getElementById("device-model").innerHTML = `${screenWidth} x ${screenHeight}`;
}
