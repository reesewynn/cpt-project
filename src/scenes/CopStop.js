import IScene from '../IScene';
import React from 'react';
import { Work } from './WeekDay';
import CopCheckDevice from './CopCheckDevice';

class CopStop extends IScene {

    text = <div>
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

class ReactToPoPo extends IScene {

    text = <div>
        <p>
            “Get out of the car, turn around, and put your hands on the hood!” 
        </p>
        <p>How do you react?</p>
    </div>;

    btns = [
        {
            text: 'Protest',
            func: () => {
                const getsVideod = Math.random() < 0.7;
                if (getsVideod) {
                    this.app.setGotVideodInCopStop(true);
                }
                const text = (getsVideod 
                    ? 
                        <div>
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
                            <p>
                                “Get out!” The officer yells, opening the door 
                                and yanking you out of the car before shoving 
                                you up against it.
                            </p>
                        </div>
                );
                this.app.pushSceneNext(new )
                this.app.addText(text);
                this.app.next();
            },
        },
        {
            text: 'Obey',
            func: () => {
                const getsVideod = Math.random() < 0.35;
                if (getsVideod) {
                    this.app.setGotVideodInCopStop(true);
                }
                const text = (getsVideod 
                    ? 
                        <div>
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
                            <p>
                                As you move to obey, the officer grabs you 
                                roughly and pushes you against the side of the 
                                car. 
                            </p>
                        </div>
                );
            },
        },
    ];

    

}

export default CopStop;