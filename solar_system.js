document.addEventListener("DOMContentLoaded", function () {
    // Update the rotation initially and then every second
    updateSunRotation();
    setInterval(updateSunRotation, 1000);
});

// Function to calculate the rotation angle for the sun
function calculateSunRotationAngle() {
    // Set the target date and time (midnight on September 27, 2023, AEST)
    const targetDate = new Date('2023-09-27T00:00:00+10:00');

    // Get the current date and time (in AEST)
    // const now = new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' });
    // const currentDate = new Date(now);

    const currentDate = new Date();
    const timeZone = 'Australia/Sydney';
    const formatter = new Intl.DateTimeFormat('en-AU', { timeZone });
    const formattedCurrentDate = formatter.format(currentDate);

    /// Comment used to add hours for testing  ////////currentDate.setHours(currentDate.getHours() + 96);

    // Calculate the time difference between the current date and the target date
    const timeDifference = currentDate - targetDate;

    //console.log("timeDifference: " + timeDifference);

    // Define the duration for 90 to 180 degrees rotation (4 days in milliseconds)
    const durationInMilliseconds = 4 * 24 * 60 * 60 * 1000;

    // Calculate the rotation angle based on the time difference and duration
    let rotationAngle = (timeDifference / durationInMilliseconds) * 180 + 90;

    // Ensure the angle doesn't exceed 360 degrees (for continuous rotation)
    if (rotationAngle >= 360) {
        rotationAngle %= 360;
    }

    return rotationAngle;
}

// Apply the rotation angle to the sun
function updateSunRotation() {
    const rotationAngle = calculateSunRotationAngle();
    const sun = document.querySelector('.sun');
    sun.style.transform = `rotate(${rotationAngle}deg)`;
}
