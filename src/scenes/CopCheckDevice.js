import IScene from '../IScene';
import React from 'react';
import { Work } from './WeekDay';
import EndCycleScene from './EndCycleScene';

class CopCheckDevice extends IScene {

    evidenceFound = Math.random() < this.app.state.criminality * .01;

    text = (this.evidenceFound 
        ? 
            <div>
                <h3>This could get messy...</h3>
                <p>
                    Incriminating evidence of alleged misdeeds are found on your 
                    device. 
                </p>
                <p>Do you hire your own lawyer for $5,000?</p>
            </div>
        : 
            <div>
                <h3>You're in the clear.</h3>
                <p>
                    Nothing of note is found on your device, and with a little 
                    annoyance, you’re sent on your way.
                </p>
            </div>
    );
    
    btns = (this.evidenceFound
        ? [
            {
                text: 'Hire your own',
                func: () => {
                    const x = <div>
                        <h3>Lawyered up!</h3>
                        <p>
                            Your skillful lawyer successfully argues that the 
                            evidence against you was obtained unlawfully, and 
                            the charges are dropped.
                        </p>
                        <p>
                            Unfortunately, the whole drama makes you miss work.
                        </p>
                    </div>
                    this.app.changeMoney(-500);
                    this.app.changeFame(10);
                    this.app.changeEmployability(-2);
                    this.app.changePrivacy(-5);
                    this.app.pushSceneNext(new EndCycleScene(this.app));
                    this.app.addText(x);
                    this.app.next();
                },
            },
            {
                text: 'Don\'t spend the cash',
                func: () => {
                    const x = <div>
                        <h3>Shoulda hired your own...</h3>
                        <p>
                            Your good-for-nothing, so-called “lawyer” botches 
                            the case, and you’re sent to jail for 12 days.
                        </p>
                    </div>
                    this.app.resetCriminality();
                    this.app.changeEmployability(-20);
                    this.app.changeFame(20);
                    this.app.changePrivacy(-5);
                    this.app.addDays(12);
                    this.app.pushSceneNext(new EndCycleScene(this.app));
                    this.app.addText(x);
                    this.app.next();
                },
            },
        ] : [
            {
                text: 'Continue',
                func: () => {
                    this.app.changePrivacy(-5);
                    this.app.pushSceneNext(new Work(this.app));
                    this.app.next();
                },
            },
        ]
    );

}

export default CopCheckDevice;