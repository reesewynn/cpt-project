import IScene from '../IScene';
// import React from "react";

class Continue extends IScene {
    //example of how to create display text

    //example of demonstrating buttons MAX 3
    btns = [
        {
            //every button needs a text field
            text: 'Continue',
            //lambda's tell the button how to behave
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