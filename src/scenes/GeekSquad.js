import IScene from '../IScene';
import React from "react";

class GeekSquadClean extends IScene {
    text = <div>
        <p>You pick up the call.</p>
        <p>
            "We managed to fix your laptop. You can come pick it up today.
            Also, loved the pictures of your grandmother’s 80th birthday party."
        </p>
        <p>
            You think to yourself that the interaction was a little creepy, but
            at least they didn't find anything weird. Anxious to get your
            laptop back, you decide to pick it up immeadiately. 
        </p>
    </div>;

    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.endCycle();
            },
        },
    ];
}

class GeekSquadCaught extends IScene {
    text = <div>
        <p> 
            When you pick you the phone, you hear a very gruff voice. 
            "Good news! Your laptop is fixed." You're so excited that you head 
            out to get it immeadiately. 
        </p>
        <p>
            As soon as you arrive at Best Buy, you are arrested. It turns out 
            that they found child pornography on your laptop once they got it 
            working. Apparently, it was very obviously named. Despite all of 
            your protestations, you get sentenced to 10 years in jail.
        </p>
    </div>;

    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.addDays(3645);
                this.app.endCycle();
            },
        },
    ];
}

//leads to GeekSquadCaught and GeekSquadClean
class GeekSquadGive extends IScene {
    text = <div>
        <p> 
            With some hesitation, you hand over your laptop for repairs.
            “We’ll call you when it’s finished.” A few days later,
            you get a call. 
        </p>
    </div>;

    btns = [
        {
            text: 'Continue',
            func: () => {
                if (this.app.state.laptop_infected) {
                    this.app.pushSceneNext(new GeekSquadCaught(this.app))
                    this.app.next();
                } else {
                    this.app.pushSceneNext(new GeekSquadClean(this.app))
                    this.app.next();
                }
            },
        },
    ];
}

class GeekSquadLeave extends IScene {
    text = <div>
        <p> 
            Screw this. You walk away from the Geek Geek Squad counter and 
            towards a display of shiny new laptops. After about an hour of 
            browsing and comparing, you settle on a decent one with a price tag 
            of $1000. Your old and new laptop in tow, you head back home. 
        </p>
    </div>;

    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.changeMoney(-1000);
                this.app.endCycle();
            },
        },
    ];
}

//eads into GeekSquadLeave and GeekSquadGive
class GeekSquadBuyNew extends IScene {
    text = <div>
        <p> 
            Standing there at the counter, you're hit with a sudden fear of 
            giving your laptop to this random stranger. You consider just buying 
            a new laptop instead; this one has served you well, but it might
            be time for an upgrade. 
        </p>
    </div>;

    btns = [
        {
            text: 'Buy for $1000',
            func: () => {
                  this.app.changeMoney(-1000);
                  this.app.pushSceneNext(new GeekSquadLeave(this.app))
                  this.app.next();
            },
        },
        {
            text: 'Just hand it over',
            func: () => {
                this.app.pushSceneNext(new GeekSquadGive(this.app))
                this.app.next();
            },
        },
    ];
}

//leads to GeekSquadGive
class GeekSquadPoor extends IScene {
    text = <div>
        <p> 
            Hmm, you consider you could buy a new laptop instead. Before you can 
            barely begin entertaining this idea, reality hits you. You simply 
            can't afford a new laptop. 
        </p>
    </div>;

    btns = [
        {
            text: 'Continue',
            func: () => {
                  this.app.pushSceneNext(new GeekSquadGive(this.app))
                  this.app.next()
            },
        },
    ];
}

//leads to either GeekSquadPoor, GeekSquadBuyNew, or GeekSquadGive
class GeekSquadStart extends IScene {
    text = <div>
        <h3>Welcome to Geek Squad!</h3>
        <p> 
            You arrive at Best Buy the next day and make your way to the Geek 
            Squad counter. There you are greeted by a bored, nerdy-looking guy 
            with a Geek Squad T-Shirt.
        </p>
        <p>
            “Welcome to Geek Squad, where we will take your laptop and maybe
            fix it and maybe look through all your personal shit, how can I help 
            you,” he intones emotionlessly. 
        </p>
        <p>Do you give him your laptop? </p>
    </div>;

    btns = [
        {
            text: 'Yes',
            func: () => {
                this.app.pushSceneNext(new GeekSquadGive(this.app))
                this.app.next();
            },
        },
        {
            text: 'No',
            func: () => {
                if (this.app.state.balance < 1000) {
                    this.app.pushSceneNext(new GeekSquadPoor(this.app))
                    this.app.next();
                } else {
                    this.app.pushSceneNext(new GeekSquadBuyNew(this.app))
                    this.app.next();
                }
            },
        },
    ];
}

export default GeekSquadStart;
