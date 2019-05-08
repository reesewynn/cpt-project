class IScene {
    status = '';
    btns = [];
    text = '';
    turnedOn = true;

    constructor(app) {
        this.app = app;
    }

    check() {
        return false;
    }
}

export default IScene;