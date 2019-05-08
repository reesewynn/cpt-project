import IScene from '../IScene';
import React from "react";
import GeekSquadStart from "./GeekSquad"
import SocialMediaStart from "./SocialMedia"
import RandomReadingStart from "./RandomReading"
import BrowsePornStart from "./BrowsePorn"

//leads to SocialMediaStart, ReadingListStart, PornStart
class PlatformDecide extends IScene {
    //example of how to crate display text
    text = <div>
        <p> You settle down and open you open your laptop.
        You decide to spend the night on: </p>
        </div>;
    btns = [
        {
            //every button needs a text field
            text: 'Social Media',
            //lambda's tell the button how to behave
            func: () => {
                // this.app.pushSceneNext(new SocialMediaStart(this.app))
                this.app.next();
            },
        },
        {
            //every button needs a text field
            text: 'Random Reading',
            //lambda's tell the button how to behave
            func: () => {
                // this.app.pushSceneNext(new RandomReadingStart(this.app))
                this.app.next();
            },
        },
        {
            //every button needs a text field
            text: 'Porn',
            //lambda's tell the button how to behave
            func: () => {
                // this.app.pushSceneNext(new BrowsePornStart(this.app))
                this.app.next();
            },
        },
    ];
}

//leads to GeekSqaudStart
class LaptopBreak extends IScene {
    //example of how to crate display text
    text = <div>
        <p> As you’re walking, you accidentally drop your laptop.
            Hoping beyond hope, you pick it up and inspect it.
            It seems fine… apart from the ominous whirring.
            You decide to deal with it tomorrow. You decide to head
            out to get it fixed. </p>
        </div>;
    btns = [
        {
            //every button needs a text field
            text: 'Continue',
            //lambda's tell the button how to behave
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
        <p> You decide to spend the night just on your laptop. You head to the: </p>
        <p> 1. living room. </p>
        <p> 2. bedroom. </p>
        <p> 3. office. </p>
    </div>;

    btns = [
        {
            text: 'Living room',
            func: () => {
                if (Math.random() < 0.1) {
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
                if (Math.random() < 0.1) {
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
                if (Math.random() < 0.1) {
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
