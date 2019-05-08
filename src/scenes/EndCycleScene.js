import IScene from '../IScene';
import React from 'react';

class EndCycleScene extends IScene {
    text = <div>
        <p>
            It's been a long day. You flop on the bed, and drift off to sleep.
        </p>
    </div>

    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.endCycle();
            }
        }
    ]
}

export default EndCycleScene;