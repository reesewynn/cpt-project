import IScene from '../IScene';
import React from "react";

class LosePrivacy extends IScene {
    //example of how to create display text
    text = <div>
        <h3> Game Over! </h3>
        <p> 
            You've lost the very thing you swore to protect! Make sure to keep 
            your privacy above 0!
        </p>
        <p> Better luck next time! </p>
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

export default LosePrivacy;