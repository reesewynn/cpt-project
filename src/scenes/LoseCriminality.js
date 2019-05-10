import IScene from '../IScene';
import React from "react";

class LoseCriminality extends IScene {
    //example of how to create display text
    text = <div>
        <h3> Game Over! </h3>
        <p>You've become too criminally notorious!</p>
        <p>
            A SWAT team is dispatched to your location and you spend a long,
            long time behind bars. 
        </p>
        <p>In the future, try and keep your criminality below 100!</p>
        <p>Better luck next time!</p>
    </div>;

    btns = [
        {
            text: 'Restart',
            func: () => {
                window.location.reload();
            },
        },
    ];

    //check decides if the action can be displayed.
    check() {
        return this.app.days === 0;
    }
}

export default LoseCriminality;