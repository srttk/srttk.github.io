export const getLocation = (cb) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(cb);
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
}

