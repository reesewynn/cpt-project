import IScene from '../IScene';
// import React from "react";

class Continue extends IScene {
    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.next();
            }
        }
    ];

    //check decides if the action can be displayed.
    check() {
        return true;
    }
}

export default Continue;