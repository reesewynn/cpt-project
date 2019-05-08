import IScene from '../IScene';
import React from "react";

class StudyingStart extends IScene {
    //example of how to crate display text
    text = <div>
        <h3> Bookworm </h3>
        <p> You spend the night working on things for you job and brushing up on your skills. How studious. </p>
        </div>;
    btns = [
        {
            text: 'Continue',
            func: () => {
                self.app.changeEmployability(5);
                self.app.endCycle();
            }
        },
    ];
}

export default StudyingStart;
