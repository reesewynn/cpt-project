import IScene from '../IScene';
import React from "react";
// import { WeekDay } from "./WeekDay";

class StartScreen extends IScene {
    //example of how to create display text
    text = <div>
        <h3> Welcome To Privacy Buyout! </h3>
        <p> You have some dark backstory and you have to earn back your privacy or the mob will come and get you yada
        yada yada...</p>
        <p> In Privacy Buyout, you play as an individual with a dark past. You have only one goal: to earn
            enough to buy a ticket to Privacylandia. With said ticket you can buy back the entirety of your privacy.</p>
        <p> The rules are simple: read the onscreen prompt and choose an available button below! You'll know a button
        is available when it has text and you can click on it.</p>
        <p> To play, press the "Begin" button below.</p>
        </div>;
    //example of demonstrating buttons MAX 3
    btns = [
        {
            //every button needs a text field
            text: 'Begin',
            //lambda's tell the button how to behave
            func: () => {
                // this.app.sceneLst.pushNext(new WeekDay(this.app));
                //remove current text
                // this.app.setState({nextScene: new WeekDay(this.app)});
                //to cause a new update
                // this.app.setState({refreshText: !(this.refreshText)});
                this.app.endCycle();
            }
        }
    ];

    //check decides if the action can be displayed.
    check() {
        return this.app.days === 0;
    }
}

export default StartScreen;