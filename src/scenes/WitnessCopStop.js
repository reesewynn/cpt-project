import IScene from '../IScene';
import React from 'react';
import { Work } from './WeekDay';
import CopCheckDevice from './CopCheckDevice';

class RecordStop extends IScene {
    text = <div>
        <h3>This'll be great for your channel...</h3>
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
                const expressRights = (this.app.state.knowRights 
                    ? 
                        <div>
                            <h3>Pull out that pocket Constitution.</h3>
                            <p>
                                After a brief interaction, the police officer is 
                                forced to acknowledge your right to film the 
                                officers performing their public duties. He 
                                grudgingly walks away and leaves you alone. 
                                Later you upload the video, which ends up 
                                getting millions of views.
                            </p>
                        </div>
                    : 
                        <div>
                            <h3>You have the right to...be an attorney...?</h3>
                            <p>
                                Unfortunately, you don't know your rights and the 
                                cop ignores your stuttering attempts to exercise 
                                them. The cop detains you, forcibly takes your 
                                phone, and searches through it.
                            </p>
                        </div>
                );
                if (this.app.knowRights) {
                    this.app.changeFame(5);
                    this.app.changeMoney(100);
                } else {
                    this.app.pushSceneNext(new CopCheckDevice(this.app));
                }
                this.app.addText(expressRights);
                this.app.next();
            },
        },
        {
            text: 'Put away your phone',
            func: () => {
                const x = <div>
                    <h3>Not worth it.</h3>
                    <p>
                        You don’t want to cause trouble, and the police officer 
                        seems awfully upset. You grudgingly put your phone away 
                        and continue on your way.
                    </p>
                </div>;
                this.app.pushSceneNext(new Work(this.app));
                this.app.addText(x);
                this.app.next();
            },
        },
        {
            text: 'Refuse',
            func: () => {
                const x = <div>
                    <h3>It doesn't end well.</h3>
                    <p>
                        The cop detains you, forcibly takes your phone, and 
                        searches through it. 
                    </p>
                </div>;
                this.app.pushSceneNext(new CopCheckDevice(this.app));
                this.app.addText(x);
                this.app.next();
            },
        },
    ];
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
                this.app.pushSceneNext(new RecordStop(this.app));
                this.app.next();
            },
        },
        {
            text: 'Just stare awkwardly',
            func: () => {
                const x = <div>
                    <h3>Gape away.</h3>
                    <p>
                        You stare awkwardly for a couple of minutes, transfixed 
                        by the scene. After a little while, you start to wonder 
                        why you’re so interested and decide to just continue on 
                        your way.
                    </p>
                </div>;
                this.app.pushSceneNext(new Work(this.app));
                this.app.addText(x);
                this.app.next();
            },
        },
    ];
}

class WitnessCopStop extends IScene {
    text = <div>
        <h3>You're traveling to work. </h3>
        <p>On your way, you spot a police officer pulling someone over. </p>
        <p>What do you do?</p>
    </div>;

    btns = [
        {
            text: 'Continue driving',
            func: () => {
                const x = <div>
                    <h3>Ain't nobody got time for dat.</h3>
                    <p>
                        You continue on your way. The slowdown from everyone 
                        staring behind you eventually causes a traffic jam. 
                        Luckily for you, you are long gone by then.
                    </p>
                </div>
                this.app.pushSceneNext(new Work(this.app));
                this.app.addText(x);
                this.app.next();
            },
        },
        {
            text: 'Pull over and watch',
            func: () => {
                this.app.pushSceneNext(new PullOver(this.app));
                this.app.next();
            },
        },
    ];
}

export default WitnessCopStop;