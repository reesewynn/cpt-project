import IScene from '../IScene';
import React from "react";

class WeekEnd extends IScene {
    text = <div>
        <h3> You're at work! </h3>
        <p> How hard do you work today? </p>
    </div>;
    btns = [
        {
            text: 'Do your job',
            func: () => {
                this.app.addMoney(5);
            }
        },
        {
            text: 'Slack off',
            func:() => {
                if(this.app.actionProb > .9) {
                    // this.app.pushSceneNext(new AskData(this.app));
                }
                this.app.next();
            }
        },
        {
            text: 'Quit'
        }
    ]
}

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
                this.app.addMoney(10);
                this.app.pushSceneNext(new Work(this.app));
                this.app.next();
            },
        },
        {
            //every button needs a text field
            text: 'Skip Work',
            //lambda's tell the button how to behave
            func: () => {
                this.app.addMoney(10);
                let x = <div>
                    <p>Oh. But you should... </p>
                </div>;
                let y = <div>
                    <p>You go to work anyway.</p>
                </div>;

                this.app.pushSceneNext(new Work(this.app));
                this.app.addText(y);
                this.app.addText(x); //should tell them to continue
                this.app.next();
            },
        }
    ];

    //check decides if the action can be displayed.
    check() {
        return this.app.days === 0;
    }
}

export default WeekEnd;