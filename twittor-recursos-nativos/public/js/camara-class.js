class Camara {
    constructor() {
        this.videoNode = videoNode;
        console.log('Camara class init');
    }

    encender() {

        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: { width: 300, height: 300 }
        }).then(stream => {
            this.videoNode.srcObject = stream;
            this.stream = stream;
        });

    }

    apagar() {

    }
}