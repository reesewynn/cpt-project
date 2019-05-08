import IScene from '../IScene';
import React from "react";

class Home extends IScene {

    text = <div>
        <h3>Time to relax.</h3>
        <p>Well that chocks up your excitement for the week.</p>
        <p>You chill home and rest up for the week ahead.</p>
    </div>;

    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.endCycle();
            }
        }
    ];
}

class Party extends IScene {

    text = <div>
        <h3> Time to dance! </h3>
        <p> 
            Everything seems to be going well at the party until the music stops 
            and your friend shouts that his phone died.
        </p>
        <p> 
            You tell him you'd be happy to take over the aux and play your new 
            fire mixtape, but he insists you have fun with the others instead. 
        </p>
        <p> You've got a few options:</p>
        <p> 1. Insist you play your beats. </p>
        <p> 2. Give him your phone and pin so he can use Spoofify. </p>
        <p> 3. Head out. No jams = no fun. </p>
        <p> What do you do? </p>
    </div>;

    btns = [
        {
            text: 'Grab The Aux',
            func: () => {
                var x = <div>
                    <h3> Well... that happened. </h3>
                    <p> 
                        You gave it your all, but unfortunately the crowd didn't 
                        seem to love your track. Even more unfortunately, 
                        someone made a video of your awful dancing to Old Town 
                        Road and posted it online!
                    </p>
                </div>;
                var popToAdd = -5;
                if (Math.random() < this.app.state.popularity * .01) {
                    x = <div>
                        <h3> Great work! </h3>
                        <p> 
                            People just loved your playlist! Everyone was having 
                            so much fun that they didn't even remember who 
                            started the tracks! 
                        </p>
                    </div>;
                    popToAdd = 5;
                }
                this.app.pushSceneNext(new Home(this.app));
                this.app.addText(x);
                this.app.changePopularity(popToAdd);
                this.app.next();
            },
        },
        {
            text: 'Let Them Play',
            func: () => {
                let x = <div>
                    <h3> Not your best idea... </h3>
                    <p> 
                        You hand over your phone and tell him your pin. What 
                        could go wrong, right? 
                    </p>
                    <p></p>
                    <p></p>
                    <p> A lot. A lot could go wrong, and it did.</p>
                    <p> 
                        Before you know it the DJ shouts out for everyone to 
                        come take a look at something. 
                    </p>
                    <p> 
                        It's your phone. And your nudes that you forgot to 
                        delete are pulled up for all to see.
                    </p>
                    <p> 
                        You snatch your phone up, but the damage is done. You 
                        feel your privacy diminished.
                    </p>
                </div>
                this.app.pushSceneNext(new Home(this.app));
                this.app.addText(x);
                this.app.changePrivacy(-5);
                this.app.next();
            },
        },
        {
            text: 'Head Home',
            func: () => {
                this.app.pushSceneNext(new Home(this.app));
                this.app.next();
            },
        },
    ];

}

class WeekEnd extends IScene {

    text = <div>
        <h3> It's the weekend. </h3>
        <p> On such a lovely day, how do you plan to spend it?</p>
        <p> You've a few options: </p>
        <p> 1. Go out and party! </p>
        <p> 2. Stay at home and relax. </p>
        <p> What do you do?</p>
    </div>;

    btns = [
        {
            text: 'Go out',
            func: () => {
                this.app.pushSceneNext(new Party(this.app));
                let x = <div>
                    <h3>Time to get funky!</h3>
                    <p> 
                        So you wanna go out and get your jam on! You call up 
                        some friends to find out where everyone's at tonight 
                        and put on your party clothes!
                    </p>
                </div>;
                this.app.addText(x);
                this.app.next();
            },
        },
        {
            text: 'Stay at Home',
            func: () => {
                this.app.pushSceneNext(new Home(this.app));
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