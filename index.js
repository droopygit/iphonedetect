import models from './models.json' assert { type: "json" };

export function init() {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const resolution = `${screenWidth}x${screenHeight}`;
    const deviceModels = models.filter((device) => device.resolution === resolution);
    document.getElementById("resolution").innerHTML = resolution;
    document.getElementById("models").innerHTML = deviceModels.map((device) => device.model).join(", ");

}
