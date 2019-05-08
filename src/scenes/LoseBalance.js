import IScene from '../IScene';
import React from "react";

class LoseBalance extends IScene {
    //example of how to create display text
    text = <div>
        <h3> Game Over! </h3>
        <p> Ouch You've gone bankrupt. Maybe next time you'll think twice on spending $50 for a t-shirt.</p>
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

export default LoseBalance;