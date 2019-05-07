import IScene from '../IScene';
import React from "react";

class WeekDay extends IScene {
    //example of how to create display text
    text = <div>
        <h3> It's A Bright New Day! </h3>
        <p> It's a beautiful day outside. Birds are singing. Flowers are blooming. And all these fools are trying
        to steal your privacy!</p>
        <p> You've a few options: </p>
        <p> 1. Work and gain some cash towards your getaway. </p>
        <p> 2. Stay at home and try and clear your name online. </p>
        <p> What do you do?</p>
        </div>;
    //example of demonstrating buttons MAX 3
    btns = [
        {
            //every button needs a text field
            text: 'Work',
            //lambda's tell the button how to behave
            func: () => {
                // this.app.sceneLst.pushNext(new )
            },
        }
    ];

    //check decides if the action can be displayed.
    check() {
        return this.app.days === 0;
    }
}

export default WeekDay;