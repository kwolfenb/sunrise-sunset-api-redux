export function submit(lat, long) {
    return {
        type: 'CALCULATE',
        lat: lat,
        long: long
    }
}

export function fetchInfo(lat, long) {
    console.log(lat, long);
    // return function (dispatch) {
        // dispatch(submit(lat, long));
        return fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&date=today`)
        .then(response => response.json(),
            error => console.log('An error occurred', error)
    ).then (function(json) {
        if(json.results) {
            let sunrise = json.results.sunrise;
            let sunset = json.results.sunset;
            console.log(sunrise);
            console.log(sunset);
        }
        else {
            console.log('error');
        }
    });

}
