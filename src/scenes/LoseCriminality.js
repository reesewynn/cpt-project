import IScene from '../IScene';
import React from "react";

class LoseCriminality extends IScene {
    //example of how to create display text
    text = <div>
        <h3> Game Over! </h3>
        <p> You've become too criminally notorious! A SWAT team is dispatched to your location and you spend a long
            long tim behind bars. Try and keep your criminality below 100!</p>
        <p> Better luck next time! </p>
    </div>;
    //example of demonstrating buttons MAX 3
    btns = [
        {
            //every button needs a text field
            text: 'Restart',
            //lambda's tell the button how to behave
            func: () => {
                window.location.reload();
            }
        }
    ];

    //check decides if the action can be displayed.
    check() {
        return this.app.days === 0;
    }
}

export default LoseCriminality;