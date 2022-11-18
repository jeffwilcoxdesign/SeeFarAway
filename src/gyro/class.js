// ✅ Works
export class setupGyro {
    constructor(targetElement, dataHandler) {
        this.oHandler = dataHandler;

        targetElement.addEventListener('click', function() {
            // initiate permission request for device gyro data access after user tap
            try {
                if (typeof DeviceOrientationEvent.requestPermission === 'function') {
                    // iOS 13+ devices
                    DeviceOrientationEvent.requestPermission()
                    .then((state) => {
                        if (state === 'granted') {
                            window.addEventListener('deviceorientation', this.oHandler);
                        } else {
                            console.error('Request to access the orientation was rejected');                            }
                        });
                } else {
                    // Non iOS 13+ devices
                    window.addEventListener('deviceorientation', this.oHandler);
                }
            } catch (error) {
                // Show message for desktop browsers
                console.error('DeviceMotion Events not supported in this browser');
            }
        }.bind(this), false);
    }
}