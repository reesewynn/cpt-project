import IScene from '../IScene';
import React from "react";
import Work from "./WeekDay";

class WitnessCopStop extends IScene {
    text = <div>
        <h3>You're traveling to work. </h3>
        <p>On your way, you spot a police officer pulling someone over. </p>
        <p>What do you do?</p>
    </div>;
    //example of demonstrating buttons MAX 3
    btns = [
        {
            text: 'Continue driving',
            func: () => {
                const x = <div>
                    <p>
                        You continue on your way. The slowdown from everyone 
                        staring behind you eventually causes a traffic jam. 
                        Luckily for you, you are long gone by then.
                    </p>
                </div>
                this.app.addText(x);
                this.app.sceneLst.pushNext(new Work(this.app));
            },
        },
        {
            text: 'Pull over and watch',
            func: () => {
                this.app.sceneLst.pushNext(new PullOver(this.app));
            },
        }
    ];

    //check decides if the action can be displayed.
    check() {
        return this.app.days === 0;
    }
}

class PullOver extends IScene {
    text = <div>
        <p>The scene captures your interest, and you decide to pull over.</p>
        <p>Do you record it?</p>
    </div>;
    btns = [
        {
            text: 'Record it',
            func: () => {
                this.app.sceneLst.pushNext(new RecordStop(this.app));
            },
        },
        {
            text: 'Just stare awkwardly',
            func: () => {
                const x = <div>
                    <p>
                        You stare awkwardly for a couple of minutes, transfixed 
                        by the scene. After a little while, you start to wonder 
                        why you’re so interested and decide to just continue on 
                        your way.
                    </p>
                </div>;
                this.app.addText(x);
                this.app.sceneLst.pushNext(new Work(this.app));
            },
        }
    ]
}

class RecordStop extends IScene {
    text = <div>
        <p>
            Without thinking, you reach into your pocket and pull out your phone 
            to begin taking a video of the incident. After a couple of seconds, 
            one of the police officers seems to notice and comes over to ask you 
            to stop filming.
        </p>
    </div>;
    btns = [
        {
            text: 'Exercise your rights',
            func: () => {
                const expressRights = this.app.knowRights 
                    ? <div>
                        <p>
                            After a brief interaction, the police officer is 
                            forced to acknowledge your right to film the 
                            officers performing their public duties. He 
                            grudgingly walks away and leaves you alone. Later 
                            you upload the video, which ends up getting millions 
                            of views.
                        </p>
                    </div>
                    : <div>
                        <p>
                            Unfortunately, you don't know your rights and the 
                            cop ignores your stuttering attempts to exercise 
                            them. The cop detains you, forcibly takes your 
                            phone, and searches through it.
                        </p>
                    </div>;
                this.app.addText(expressRights);
                if (this.app.knowRights) {
                    this.app.
                }
            }
        }
    ]
}

export default WitnessCopStop;