import IScene from '../IScene';
import React from "react";
import BrowseWebStart from "./BrowseWeb"
import GamingStart from "./Gaming"
import EndCycleScene from "./EndCycleScene";

class NetflixEx extends IScene {
    text = <div>
        <p> 
            Unbeknownst to you, your watch history just got added to a special 
            database. Netflix is holding a competition for better recommendation 
            algorithms. This database, with your semi-anonymized data, will 
            serve as a training set. 
        </p>
        <p>
            Better hope nobody digs into that database too hard and finds out 
            about your stranger preferences. 
        </p>
    </div>;

    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.changePrivacy(-2);
                this.app.endCycle();
            },
        },
    ];
}

class PassingTime extends IScene {

    text = <div>
        <h3>What to do...</h3>
        <p> You have some free time, but don't feel like studying. So what do you want to do?</p>
    </div>;

    btns = [
        {
            text: 'Browsing',
            func: () => {
                this.app.pushSceneNext(new BrowseWebStart(this.app));
                this.app.next();
            }
        },
        {
            text: 'Streaming',
            func: () => {
              this.app.pushSceneNext(new GamingStart(this.app));
              this.app.next();
            }
        },
        {
            text: 'Watch Netflix',
            func: () => {
                if (Math.random() < 0.3) {
                  this.app.pushSceneNext(new NetflixEx(this.app))
                  this.app.next();
                } else {
                  this.app.changePrivacy(0);
                  this.app.endCycle();
                }

            }
        },
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
                let x = <div>
                    <h3> Well... that happened. </h3>
                    <p>
                        You gave it your all, but unfortunately the crowd didn't
                        seem to love your track. Even more unfortunately,
                        someone made a video of your awful dancing to Old Town
                        Road and posted it online!
                    </p>
                </div>;
                let popToAdd = -5;
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
                this.app.changePopularity(popToAdd);
                this.app.pushSceneNext(new EndCycleScene(this.app));
                this.app.addText(x);
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
                this.app.changePrivacy(-5);
                this.app.pushSceneNext(new EndCycleScene(this.app));
                this.app.addText(x);
                this.app.next();
            },
        },
        {
            text: 'Head Home',
            func: () => {
                this.app.endCycle();
            },
        },
    ];
}

class Gym extends IScene {
    text = <div>
        <h3> How could they!?</h3>
        <p> Someone at the gym with you recorded you working out and really struggling to bench! Do you even lift, bro?
        </p>
        <p> They posted it online and because you live in a one-party consent state, you have no recourse!</p>
    </div>
    btns = [
        {
          text: "Continue",
          func: () => {
              this.app.endCycle();
          }
        },
    ];
}
class Studying extends IScene {
    text = <div>
        <h3> How could they!?</h3>
        <p> You spend the night working on things for your job and brushing up on your skills. How studious.</p>
    </div>
    btns = [
        {
          text: "Continue",
          func: () => {
              this.app.changeEmployability(5);
              this.app.endCycle();
          }
        },
    ];
}

class Home extends IScene {
    text = <div>
        <h3>Time to relax.</h3>
        <p> You decide to be a hermit and stay at home. So what do you want to do?</p>
    </div>;
    btns = [
        {
            text: 'Laptop',
            func: () => {
                this.app.pushSceneNext(new PassingTime(this.app));
                this.app.next();
            }
        },
        {
            text: 'Studying',
            func: () => {
              this.app.pushSceneNext(new Studying(this.app));
              this.app.next();
            }
        },

    ];
}

class goOut extends IScene {
  text = <div>
      <h3> It's the weekend. </h3>
      <p> You decide to get out of the house for a while. What is there to do?</p>
  </div>;

  btns = [
      {
          text: 'Party',
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
          text: 'Go to the Gym',
          func: () => {
              this.app.pushSceneNext(new Gym(this.app));
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
                this.app.pushSceneNext(new goOut(this.app));
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
