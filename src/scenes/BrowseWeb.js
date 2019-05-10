import IScene from '../IScene';
import React from "react";
import GeekSquadStart from "./GeekSquad"
import SocialMediaStart from "./SocialMedia"
import RandomReadingStart from "./RandomReading"
import BrowsePornStart from "./BrowsePorn"

//leads to SocialMediaStart, ReadingListStart, PornStart
class PlatformDecide extends IScene {
    text = <div>
        <p>You settle down and open you open your laptop.</p>
        <p>What do you want to do? </p>
    </div>;

    btns = [
        {
            text: 'Browse the Web',
            func: () => {
                this.app.pushSceneNext(new SocialMediaStart(this.app))
                this.app.next();
            },
        },
        {
            text: 'Random Reading',
            func: () => {
                this.app.pushSceneNext(new RandomReadingStart(this.app))
                this.app.next();
            },
        },
        {
            text: 'Porn',
            func: () => {
                this.app.pushSceneNext(new BrowsePornStart(this.app))
                this.app.next();
            },
        },
    ];
}

//leads to GeekSqaudStart
class LaptopBreak extends IScene {
    text = <div>
        <h3>I threw it on the ground!</h3>
        <p> 
            As you’re walking, you accidentally drop your laptop.
            Hoping beyond hope, you pick it up and inspect it.
            It seems fine…apart from the ominous whirring.
            You decide to head out tomorrow to get it fixed. 
        </p>
    </div>;

    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.pushSceneNext(new GeekSquadStart(this.app))
                this.app.next();
            },
        },
    ];
}

//leads to LaptopBreak or PlatformDecide
class BrowseWebStart extends IScene {
    text = <div>
        <p> 
            You decide to spend the night just on your laptop. You head to the: 
        </p>
    </div>;

    btns = [
        {
            text: 'Living room',
            func: () => {
                if (Math.random() < 0.25) {
                    this.app.pushSceneNext(new LaptopBreak(this.app));
                    this.app.next();
                } else {
                    this.app.pushSceneNext(new PlatformDecide(this.app));
                    this.app.next();
                }
            }
        },
        {
            text: 'Bedroom',
            func: () => {
                if (Math.random() < 0.25) {
                    this.app.pushSceneNext(new LaptopBreak(this.app));
                    this.app.next();
                } else {
                    this.app.pushSceneNext(new PlatformDecide(this.app));
                    this.app.next();
                }
            }
        },
        {
            text: 'Office',
            func: () => {
                if (Math.random() < 0.25) {
                    this.app.pushSceneNext(new LaptopBreak(this.app));
                    this.app.next();
                } else {
                    this.app.pushSceneNext(new PlatformDecide(this.app));
                    this.app.next();
                }
            }
        }
    ];
}

export default BrowseWebStart;
