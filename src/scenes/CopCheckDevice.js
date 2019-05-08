import IScene from '../IScene';
import React from 'react';
import Work from './WeekDay';

class CopCheckDevice extends IScene {

    evidenceFound = Math.random() < this.app.state.criminality * .01;

    text = (this.evidenceFound 
        ? 
            <div>
                <p>
                    Incriminating evidence of alleged misdeeds are found on your 
                    device. 
                </p>
                <p>Do you hire your own lawyer for $5,000?</p>
            </div>
        : 
            <div><p>
                Nothing of note is found on your device, and with a little 
                annoyance, you’re sent on your way.
            </p></div>
    );
    
    btns = (this.evidenceFound
      ? [
        {
            text: 'Hire your own',
            func: () => {
                const x = <div>
                    <p>
                        Your skillful lawyer successfully argues that the 
                        evidence against you was obtained unlawfully, and the 
                        charges are dropped.
                    </p>
                </div>
                this.app.changeMoney(-5000);
                this.app.changeFame(10);
                // TODO: If workday, miss work
                this.app.addText(x);
                this.app.next();
            },
        },
        {
            text: 'Don\'t spend the cash',
            func: () => {
                const x = <div>
                    <p>
                        Your good-for-nothing, so-called “lawyer” botches the 
                        case, and you’re sent to jail. 
                    </p>
                </div>
                this.app.resetCriminality();
                this.app.changeEmployability(-20);
                this.app.changeFame(20);
                // TODO: Jail time and cash penalties
                this.app.endCycle();
                this.app.addText(x);
                this.app.next();
            },
        },
      ] : [
        {
            text: 'Continue',
            func: () => {
                // If workday, go to work. Otherwise, continue cycle?
                if (this.app.state.weekday) {
                    this.app.pushSceneNext(new Work(this.app));
                    this.app.next();
                } 
                // TODO: use weekend counter to determine next scene
            },
        },
      ]
    );

}

export default CopCheckDevice;