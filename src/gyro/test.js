import {setupGyro} from "./class.js";
let btn;

// define method for handling of gyro data
const dataHandler = (event) => {
    const { alpha, beta, gamma } = event.rotationRate;
    console.log(event);
    btn.textContent = alpha+', '+beta+', '+gamma;
}

document.addEventListener('DOMContentLoaded', () => {
    // get element for user interaction
    btn = document.getElementById('btn');
    // create setupGyro instance for requesting permission to device event data
    const gyObj = new setupGyro(btn, dataHandler);
});