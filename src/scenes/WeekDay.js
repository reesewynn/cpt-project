import IScene from '../IScene';
import React from "react";
import WitnessCopStop from "./WitnessCopStop";
import CopStop from './CopStop';

class Leave extends IScene {
    text = <div>
        <h3> It's 5 O'Clock Somewhere! </h3>
        <p> You pack it up and head home for the day! </p>
    </div>;
    btns = [
        {
            text: 'Continue',
            func: () => {
                //TODO: chance of encounter
              this.app.endCycle();
            },
        },
    ];
}

class AskData extends IScene {
    text = <div>
        <h3> Uh Oh </h3>
        <p> Your boss sees you on Reddit and isn't mad, just disappointed. </p>
        <p> 
            Afraid of how you represent the company online, your boss asks 
            you for your social media passwords.
        </p>
        <p> You have some options: </p>
        <p> 1. Give them your passwords. </p>
        <p> 2. Refuse and hope you're not fired! </p>
    </div>;
    btns = [
        {
            text: 'Give Passwords',
            func: () => {
                let x = <div>
                    <h3> What could go wrong? </h3>
                    <p> 
                        You doubt they'll actually bother using them, so you 
                        write down your passwords and hope for the best.
                    </p>
                    <p> You feel your privacy decrease.</p>
                </div>;
                this.app.changePrivacy(-10);
                this.app.pushSceneNext(new Leave(this.app));
                this.app.addText(x);
                this.app.next();
            }
        },
        {
            text: 'Don\'t',
            func: () => {
                let x = <div>
                    <h3> That's A No From Me, Chief. </h3>
                    <p> 
                        You start to tell them no and quickly remember that 
                        there is no clear concise legal argument to deny them 
                        access and they could fire you pretty easily. You need 
                        this job and a court case would ruin all chances of 
                        keeping your privacy intact.
                    </p>
                    <p> 
                        But your knowledge of the legal grayness of the 
                        situation will reward you somewhat and your cleverness 
                        tells you to only give up some of your accounts.
                    </p>
                    <p> Your privacy decreases a little.</p>
                </div>
                this.app.changePrivacy(-5);
                this.app.pushSceneNext(new Leave(this.app));
                this.app.addText(x);
                this.app.next();
            }
        }
    ];
}

class Work extends IScene {
    text = <div>
        <h3> You're at work! </h3>
        <p> How hard do you work today? </p>
    </div>;
    btns = [
        {
            text: 'Do your job',
            func: () => {
                let txt = <div>
                    <h3> Nice work! </h3>
                    <p> 
                        Your boss notices your hard work and leaves you be for 
                        the day.
                    </p>
                </div>
                this.app.pushSceneNext(new Leave(this.app));
                this.app.addText(txt);
                this.app.next();
            }
        },
        {
            text: 'Slack off',
            func:() => {
                console.log(Math.random());
                if(!this.app.state.askedPass && Math.random() > .6) {
                    this.app.setState({askedPass: true});
                    this.app.pushSceneNext(new AskData(this.app));
                }
                else {
                    this.app.pushSceneNext(new Leave(this.app));
                }
                this.app.next();
            }
        },
        // {
        //     text: 'Quit',
        // }
    ]
}

class WeekDay extends IScene {
    text = <div>
        <h3> It's A Bright New Day! </h3>
        <p> 
            It's a beautiful day outside. Birds are singing. Flowers are 
            blooming. And all these fools are trying to steal your privacy!
        </p>
        <p> You've a few options: </p>
        <p> 1. Work and gain some cash towards your getaway. </p>
        <p> 2. Stay at home and try and clear your name online. </p>
        <p> What do you do?</p>
        </div>;

    btns = [
        {
            text: 'Work',
            func: () => {
                this.app.changeMoney(50);
                let y = Math.random();
                if (y > .8) {
                    this.app.pushSceneNext(new WitnessCopStop(this.app));
                } else if (y > .5) {
                    this.app.pushSceneNext(new CopStop(this.app));
                } else {
                    this.app.pushSceneNext(new Work(this.app));
                }
                this.app.next();
            },
        },
        {
            text: 'Skip Work',
            func: () => {
                this.app.changeMoney(10);
                let txt = <div>
                    <p>
                        Don't you think you've missed enough 185 classes already? 
                    </p>
                    <p>You go to work anyway.</p>
                </div>;
                let y = Math.random();
                if (y > .8) {
                    this.app.pushSceneNext(new WitnessCopStop(this.app));
                } else if (y > .5) {
                    this.app.pushSceneNext(new CopStop(this.app));
                } else {
                    this.app.pushSceneNext(new Work(this.app));
                }
                this.app.addText(txt); 
                this.app.next();
            },
        }
    ];

    //check decides if the action can be displayed.
    check() {
        // return this.app.days === 0;
        return true;
    }
}

export { WeekDay, Work };