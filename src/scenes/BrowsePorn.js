import IScene from '../IScene';
import React from "react";

class BrowsePornClean extends IScene {
    //example of how to crate display text
    text = <div>
        <p> Afterwards, you fix yourself a midnight snack and head to bed. </p>
    </div>;

    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.endCycle();
            },
        },
    ];
}

class BrowsePornInfected extends IScene {
    //example of how to crate display text
    text = <div>
        <p> 
            It’s pretty sketchy. In your distracted state, you don’t notice as 
            the website quietly infects your laptop. Unbeknownst to you, there 
            are now some shockingly explicitly-named files on your hard drive 
            with highly questionable contents. Probably should have had better 
            anti-virus software. 
        </p>
    </div>;

    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.setLaptopInfected();
                this.app.endCycle();
            },
        },
    ];
}

//leads to BrowsePornClean, BrowsePornInfected
class BrowsePornStart extends IScene {
    //example of how to crate display text
    text = <div>
        <p> 
            You just open up some porn. It's been a pretty long and tiring day. 
        </p>
    </div>;

    btns = [
        {
            text: 'Continue',
            func: () => {
                if (Math.random() > 0.6) {
                  this.app.pushSceneNext(new BrowsePornInfected(this.app))
                  this.app.next();
                } else {
                  this.app.pushSceneNext(new BrowsePornClean(this.app))
                  this.app.next();
                }
            },
        },
    ];
}

export default BrowsePornStart;
