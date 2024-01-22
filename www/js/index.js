
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    



    const cambtn = document.getElementById('cameraApp');
    cambtn.addEventListener('click', btnFunc);

    function btnFunc(){
        navigator.camera.getPicture(cameraSuccess, cameraFail,{
            quality: 100,
            destinationType: Camera.DestinationType.FILE_URI
        });

        function cameraSuccess(imageData){
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;
        }
        function cameraFail(message){
            alert('failuremessage', message)
        }
        
    }

    const geoBtn = document.getElementById('geoApp');
    geoBtn.addEventListener('click', geoFunc);

    function geoFunc(){
        var onSuccess = function(position) {
            alert('Latitude: '          + position.coords.latitude          + '\n' +
                  'Longitude: '         + position.coords.longitude         + '\n' +
                  'Altitude: '          + position.coords.altitude          + '\n' +
                  'Accuracy: '          + position.coords.accuracy          + '\n' +
                  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                  'Heading: '           + position.coords.heading           + '\n' +
                  'Speed: '             + position.coords.speed             + '\n' +
                  'Timestamp: '         + position.timestamp                + '\n');
        };
    
        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }
    
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

}



