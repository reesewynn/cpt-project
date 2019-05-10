import IScene from '../IScene';
import React from "react";

class LoseBalance extends IScene {
    //example of how to create display text
    text = <div>
        <h3> Game Over! </h3>
        <p> 
            Ouch! You've gone bankrupt. Maybe next time you'll think twice about 
            spending $50 for a t-shirt.
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

export default LoseBalance;