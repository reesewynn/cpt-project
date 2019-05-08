import IScene from '../IScene';
import React from "react";

class WinScreen extends IScene {
    text =  <div>
        <h3>You win!</h3>
        <p>Thanks for playing! We hope you enjoyed learning about how privacy impacts everyone on their day
            to day and the laws/rights that citizens in regards to privacy!</p>
    </div>;
    btns = [];
}

class Win extends IScene {
    //example of how to create display text
    text = <div>
        <h3> Finally! </h3>
        <p> It took a while. Maybe even too long. But you've finally done it.</p>
        <p> You managed to save up enough for your ticket to Privacylandia! You pack up your bags and call your
            Oober.</p>
        <p>You ride to the embassy buy your ticket and poof! All record of your existence is wiped clean.</p>
        <p> And just like that... You've done it! </p>
    </div>;
    //example of demonstrating buttons MAX 3
    btns = [
        {
            //every button needs a text field
            text: 'Continue',
            //lambda's tell the button how to behave
            func: () => {
                this.app.pushSceneNext(new WinScreen(this.app));
            }
        }
    ];

    //check decides if the action can be displayed.
    check() {
        return this.app.days === 0;
    }
}

export default Win;