import IScene from '../IScene';
import React from "react";

class GamingNormal extends IScene {
    //example of how to crate display text
    text = <div>
        <p> The night goes by pretty uneventfully. You don’t gather that many viewers, but that’s to be expected, this was a bit of a spontaneous stream. Still, there’s enough people to interact with. After a couple of hours, you can barely keep your eyes open and your game performance is definitely suffering for that. You say a quick goodbye and head to bed.
 </p>
        </div>;
    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.changeFame(2);
                this.app.changeMoney(1000);
                this.app.changePrivacy(-2);
                this.app.next();
                this.app.endCycle();
            },
        },
    ];
}

class GamingSwatAfter extends IScene {
    //example of how to crate display text
    text = <div>
        <p> Once the officers have finished their search of your house, they turn their attention to you. Finally after intensive questioning, the officers apologize and leave. It seems they were under the impression that you were making a bomb. Some idiot decided to play a “funny” joke. You slowly collect yourself. Once you’re sufficiently composed, you look to see that your live stream is definitely trending now, to say the least. Maybe that idiot did you a favor and something good will come of this.
 </p>
        </div>;
    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.changePrivacy(-2);
                this.app.changeFame(5);
                this.app.changeMoney(2000);
                this.app.endCycle();
            },
        },
    ];
}

//lead to GamingSwatAfter or GamingSwatFind
class GamingSwatFind extends IScene {
    //example of how to crate display text
    text = <div>
        <p> Your heart is pounding so loudly in your ears that you almost miss the telltale sounds of discovery. It seems that during their sweep, the officers uncover your stash. You’re swiftly arrested. During this whole scene, your faithful camera and mic are still on, streaming your arrest to what has become a good crowd of people. Afterwards, you learn that a VOD from your stream has become wildly popular on Youtube. That is little consolation for your harsh jail sentence. </p>
        </div>;
    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.resetCriminality();
                this.app.changeFame(5);
                this.app.changeEmployability(-10);
                this.app.changePrivacy(-7);
                this.app.endCycle();
            },
        },
    ];
}

//lead to GamingSwatAfter or GamingSwatFind
class GamingSwatPoss extends IScene {
    //example of how to crate display text
    text = <div>
        <p> If possible, your heart begins to beat even faster as your thoughts land on the hopefully well hidden weed. </p>
        </div>;
    btns = [
        {
            text: 'Continue',
            func: () => {
                if (Math.random() < 0.60) {
                  this.app.pushSceneNext(new GamingSwatFind(this.app));
                } else {
                  this.app.pushSceneNext(new GamingSwatAfter(this.app));
                }
                this.app.next();
            },
        },
    ];
}

//leads to GamingSwatPoss and GamingSwatAfter
class GamingSwatted extends IScene {
    //example of how to crate display text
    text = <div>
        <p> You’re in the middle of an intense fight when your door you hear a startling loud noise. Suddenly, your door is bashed in and a flood of armed police officers stream in. You quickly get down on the ground as they point their weapons at you. From your position on the floor, you can hear the officers noisily stomping through your house and performing a sweep on all the rooms.
 </p>
        </div>;
    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.changePrivacy(-2);
                if (this.app.state.has_weed) {
                    this.app.pushSceneNext(new GamingSwatPoss(this.app));
                } else {
                    this.app.pushSceneNext(new GamingSwatAfter(this.app));
                }

                this.app.next();
            },
        },
    ];
}

class GamingStart extends IScene {
    //example of how to crate display text
    text = <div>
        <p> Trying to choose between gaming and something productive, you decide to kill two birds with one stone. You plug into your console, turn on your mic and cam, and start streaming your Fortnite run.
 </p>
        </div>;
    btns = [
        {
            text: 'Continue',
            func: () => {
                if (Math.random() * 100 < this.app.state.fame * .25) {
                  this.app.pushSceneNext(new GamingSwatted(this.app));
                } else {
                  this.app.pushSceneNext(new GamingNormal(this.app));
                }
                this.app.next();
            },
        },
    ];
}

export default GamingStart;
