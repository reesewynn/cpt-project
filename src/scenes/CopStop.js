import IScene from '../IScene';
import React from 'react';
import { Work } from './WeekDay';
import EndCycleScene from './EndCycleScene';

var gotVidded = false;

class gotViddedEvent extends IScene {

    text = <div>
        <h3>You're trending.</h3>
        <p>
            After the incident, you find that the video of your arrest is 
            trending on YouTube.
        </p>
        <p>There goes more of your privacy.</p>
    </div>;

    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.changePrivacy(-15);
                this.app.changeFame(10);
                gotVidded = false;
                this.app.next();
            },
        },
    ];
}

class ArrestedEvidence extends IScene {

    text = <div>
        <h3>Please don't find the weed...</h3>
        <p>
            You watch nervously as the police officer searches your car. You 
            foolishly hope that the officer won’t find the weed, but it seems 
            that he has a highly trained nose. The officer makes a beeline for 
            the little baggie.
        </p>
        <p>
            “All right, I’m taking you into the station for suspected illegal 
            activity,” the cop announces.
        </p>
        <p>
            Do you hire your own lawyer for $500?
        </p>
    </div>;

    btns = [
        {
            text: 'Hire your own',
            func: () => {
                const x = <div>
                    <h3>Lawyered up!</h3>
                    <p>
                        Quick as a flash, your lawyer shows up and immediately 
                        dives into a sequence of questions concerning the 
                        circumstances of your arrest.
                    </p>
                    <p>
                        Your lawyer is good, and you’re sure that in slightly 
                        better circumstances she could have forced things your 
                        way. It’s unfortunate that the evidence against you is 
                        pretty damning. You get sent to jail for 19 days.
                    </p>
                </div>
                this.app.resetCriminality();
                this.app.changeEmployability(-20);
                this.app.changeFame(20);
                this.app.changePrivacy(-5);
                this.app.addDays(19);
                this.app.pushSceneNext(new EndCycleScene(this.app));
                if (gotVidded) {
                    this.app.pushSceneNext(new gotViddedEvent(this.app));
                }
                this.app.addText(x);
                this.app.next();
            },
        },
        {
            text: 'Don\'t spend the cash',
            func: () => {
                const x = <div>
                    <h3>Not a chance.</h3>
                    <p>
                        You don’t stand a chance, and your bumbling, drunk 
                        lawyer doesn’t help your case. You get sent to jail for 
                        26 days.
                    </p>
                </div>;
                this.app.resetCriminality();
                this.app.changeEmployability(-20);
                this.app.changeFame(20);
                this.app.changePrivacy(-5);
                this.app.addDays(26);
                this.app.pushSceneNext(new EndCycleScene(this.app));
                if (gotVidded) {
                    this.app.pushSceneNext(new gotViddedEvent(this.app));
                }
                this.app.addText(x);
                this.app.next();
            },
        },
    ];
}

class ArrestedNoEvidence extends IScene {

    text = <div>
        <h3>You really gotta do something about that criminality record.</h3>
        <p>
            You watch nervously as the police officer searches your car and then 
            your cellphone. 
        </p>
        <p>
            “All right, I’m taking you into the station for suspected illegal 
            activity,” the cop announces.
        </p>
        <p>
            Do you hire your own lawyer for $500?
        </p>
    </div>;

    btns = [
        {
            text: 'Hire your own',
            func: () => {
                const x = <div>
                    <h3>Lawyered up!</h3>
                    <p>
                        Quick as a flash, your lawyer shows up and immediately 
                        dives into a sequence of questions concerning the 
                        circumstances of your arrest. 
                    </p>
                    <p>
                        When you tell her that the officer did not give a reason 
                        for your arrest, your lawyer’s eyes light up. If you 
                        didn’t know better, you’d have thought it was Christmas. 
                        In court, your lawyer eloquently convinces the court 
                        that your arrest was unlawful as the officer lacked any 
                        evidence or probable cause, and the case against you is 
                        dismissed.
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
                if (gotVidded) {
                    this.app.pushSceneNext(new gotViddedEvent(this.app));
                }
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
                        Your assigned lawyer is worse than useless. Despite the 
                        lack of evidence during your initial arrest, the court 
                        uncovers some of your more sketchy past deeds, and you 
                        get sent to jail for 19 days. As you get sentenced, the 
                        thought occurs to you that you probably had a better 
                        chance without him. 
                    </p>
                </div>
                this.app.resetCriminality();
                this.app.changeEmployability(-20);
                this.app.changeFame(20);
                this.app.changePrivacy(-5);
                this.app.addDays(19);
                this.app.pushSceneNext(new EndCycleScene(this.app));
                if (gotVidded) {
                    this.app.pushSceneNext(new gotViddedEvent(this.app));
                }
                this.app.addText(x);
                this.app.next();
            },
        },
    ];
    
}

class ReactToPoPo extends IScene {

    text = <div>
        <h3>Get out!</h3>
        <p>
            “Get out of the car, turn around, and put your hands on the hood!” 
        </p>
        <p>How do you react?</p>
    </div>;

    btns = [
        {
            text: 'Protest',
            func: () => {
                gotVidded = Math.random() < 0.8;
                const text = (gotVidded
                    ? 
                        <div>
                            <h3>Move your bloomin' arse!</h3>
                            <p>
                                “Get out!” The officer yells, opening the door 
                                and yanking you out of the car before shoving 
                                you up against it.
                            </p>
                            <p>
                                You notice a couple of people on the side of the 
                                road pull out their phones and start filming.
                            </p>
                        </div>
                    :
                    <div>
                            <h3>Move your bloomin' arse!</h3>
                            <p>
                                “Get out!” The officer yells, opening the door 
                                and yanking you out of the car before shoving 
                                you up against it.
                            </p>
                        </div>
                );
                this.goToPossibleArrest(text);
            },
        },
        {
            text: 'Obey',
            func: () => {
                gotVidded = Math.random() < 0.8;
                const text = (gotVidded 
                    ? 
                        <div>
                            <h3>Okay, I'm going!</h3>
                            <p>
                                As you move to obey, the officer grabs you 
                                roughly and pushes you against the side of the 
                                car. 
                            </p>
                            <p>
                                You notice a couple of people on the side of the 
                                road pull out their phones and start filming.
                            </p>
                        </div>
                    :
                        <div>
                            <h3>Okay, I'm going!</h3>
                            <p>
                                As you move to obey, the officer grabs you 
                                roughly and pushes you against the side of the 
                                car. 
                            </p>
                        </div>
                );
                this.goToPossibleArrest(text);
            },
        },
    ];

    goToPossibleArrest(text) {
        this.app.changePrivacy(-5);
        const arrested = 
            Math.random() < 0.2 + this.app.state.criminality * .01;
        if (arrested) {
            if (this.app.state.hasWeed) {
                this.app.pushSceneNext(new ArrestedEvidence(this.app));
            } else {
                this.app.pushSceneNext(new ArrestedNoEvidence(this.app))
            }
        } else {
            const noArrestText = <div>
                <h3>Well that was unnecessary.</h3>
                <p>
                    After patting you down and searching your car, the cop hands 
                    you back your license and papers. 
                </p>
                <p>“Sorry, you’re free to go.”</p>
                <p>With a sigh, you continue on your way.</p>
            </div>;
            this.app.pushSceneNext(new Work(this.app));
            if (gotVidded) {
                this.app.pushSceneNext(new gotViddedEvent(this.app));
            }
            this.app.addText(noArrestText);
        }
        this.app.addText(text);
        this.app.next();
    }

}

class CopStop extends IScene {

    text = <div>
        <h3>Hold it right there!</h3>
        <p> 
            You’re on your way when you get pulled over by the police. 
            You roll down your window.
        </p>
        <p>“Can I help you, officer?” you ask in a calm voice.</p>
        <p>“License and registration, please.”</p>
        <p>You hand over your documents and he takes a look at them.</p>
    </div>;

    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.pushSceneNext(new ReactToPoPo(this.app));
                if (Math.random < this.app.state.fame * .01) {
                    const recognize = <div>
                        <h3>Clearly, fame isn't everything.</h3>
                        <p>
                            His eyes widen and you can see the recognition flash 
                            through them as he sees the name on your license.
                        </p>
                    </div>
                    this.app.addText(recognize);
                }
                this.app.next();
            },
        },
    ];
}

export default CopStop;