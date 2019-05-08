import IScene from '../IScene';
import React from "react";


class SMTNoSwat extends IScene {
    //example of how to crate display text
    text = <div>
        <p> You spend a pleasant few hours watching before drifting off to sleep. </p>
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

class SMTSwatPost extends IScene {
    //example of how to crate display text
    text = <div>
        <p> Shocked and surprised, you take to social media to rant about how you’ve lost faith in humanity. </p>
        </div>;
    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.changePopularity(2);
                this.app.changePrivacy(2);
                this.app.endCycle();
            },
        },
    ];
}

class SMTSwatNoPost extends IScene {
    //example of how to crate display text
    text = <div>
        <p> You’re stunned for the rest of the night, and can’t get the incident out of your head as you get ready for bed. </p>
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

//leads to SMTSwatPost, SMTSwatNoPost
class SMTSwat extends IScene {
    //example of how to crate display text
    text = <div>
        <p> You’re just starting to nod off when a loud noise startles you. It’s coming from the stream. You watch in horror as the SWAT team charges in and the streamer gets tackled to the floor. What do you do?</p>
        </div>;
    btns = [
        {
            text: 'Post about this',
            func: () => {
                this.app.pushSceneNext(new SMTSwatPost(this.app));
                this.app.next();
            },
        },
        {
            text: 'Just watch',
            func: () => {
              this.app.pushSceneNext(new SMTSwatNoPost(this.app));
              this.app.next();
            },
        },
    ];
}

//leads to SMTSwat, SMTNoSwat
class SMTJoke extends IScene {
    //example of how to crate display text
    text = <div>
        <p> Laughing to yourself, you comment a quick joke about how bad the streamer is palying. At that exact moment, they happen to looksup and read your comment. After a pause, they chuckle saying “Fuck off, twitch chat." </p>
        </div>;
    btns = [
        {
            text: 'Continue',
            func: () => {
                if (Math.random() > 0.5) {
                  this.app.pushSceneNext(new SMTSwat(this.app));
                } else {
                  this.app.pushSceneNext(new SMTNoSwat(this.app));
                }
                this.app.next();
            },
        },
    ];
}

//leads to SMTSwat, SMTNoSwat, SMTJoke
class SocialMediaTwitch extends IScene {
    //example of how to crate display text
    text = <div>
        <p> Feeling extra lazy, you decide to watch a stream. You settle down, enjoying watching and laughing at how bad they are. Man, they’re really having an off night. Do you want to something in chat? </p>
        </div>;
    btns = [
        {
            text: 'Just Lurk',
            func: () => {
                if (Math.random() > 0.5) {
                  this.app.pushSceneNext(new SMTSwat(this.app));
                } else {
                  this.app.pushSceneNext(new SMTNoSwat(this.app));
                }
                this.app.next();
            },
        },
        {
            text: 'Make A Joke',
            func: () => {
                this.app.pushSceneNext(new SMTJoke(this.app));
                this.app.next();
            },
        },
    ];
}

//leads to SMYTTomBlogChange
class SMYTTomChange extends IScene {
    //example of how to crate display text
    text = <div>
        <p> You decide it’s a good idea to take a look at your own Facebook privacy settings. When you’re done fiddling with them, you switch back over to your YouTube tab and spend the rest of your night happily watching random videos. </p>
        </div>;
    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.changePrivacy(2);
                this.app.endCycle();
            },
        },
    ];
}

//leads to SMYTTomBlogChange
class SMYTTomBlogAnxious extends IScene {
    //example of how to crate display text
    text = <div>
        <p> As you read, you grow more and more fearful of your own privacy. </p>
        </div>;
    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.pushSceneNext(new SMYTTomChange(this.app));
                this.app.next();
            },
        },
    ];
}

//leads to SMYTTomBlogChange
class SMYTTomBlogAmused extends IScene {
    //example of how to crate display text
    text = <div>
        <p> You laugh as you read through the searches; some of these are pretty funny. It’s amazing how careless some people are.  </p>
        </div>;
    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.pushSceneNext(new SMYTTomChange(this.app));
                this.app.next();
            },
        },
    ];
}

//leads to SMYTTomBlogAnxious, SMYTTomAmused
class SMYTTomBlog extends IScene {
    //example of how to crate display text
    text = <div>
        <p> As you’re looking through Tom Scott’s blog, you find yourself on a super old post with a list of searches made through Facebook Graph. As you read through it, you are: </p>
        </div>;
    btns = [
        {
            text: 'Anxious',
            func: () => {
                this.app.pushSceneNext(new SMYTTomBlogAnxious(this.app));
                this.app.next();
            },
        },
        {
            text: 'Amused',
            func: () => {
                this.app.pushSceneNext(new SMYTTomBlogAmused(this.app));
                this.app.next();
            },
        },
    ];
}

//leads to SMYTTomBlog
class SMYTTomCool extends IScene {
    //example of how to crate display text
    text = <div>
        <p> That was actually pretty cool. Rare that someone interests you enough to actually follow the links that everyone puts in the descriptions. You follow a link through to his blog. </p>
        </div>;
    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.pushSceneNext(new SMYTTomBlog(this.app));
                this.app.next();
            },
        },
    ];
}

//leads to SMYTTomBlog
class SMYTTomBoring extends IScene {
    //example of how to crate display text
    text = <div>
        <p> Good lord, this guy is boring. You see that the next video on the autoplay queue is another one of his. As you idly contemplate whether or not it’s worth the effort to stop it, the next video starts. It’s actually a little interesting, and you decide to click through to his blog. </p>
        </div>;
    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.pushSceneNext(new SMYTTomBlog(this.app));
                this.app.next();
            },
        },
    ];
}

//leads to SMYTTomBoring, SMYTTomCool
class SMYTTom extends IScene {
    //example of how to crate display text
    text = <div>
        <p> You sit back as the first few minutes of the video plays. What do you think?</p>
        </div>;
    btns = [
        {
            text: 'Pretty Boring',
            func: () => {
                this.app.pushSceneNext(new SMYTTomBoring(this.app));
                this.app.next();
            },
        },
        {
            text: 'Pretty Cool',
            func: () => {
                this.app.pushSceneNext(new SMYTTomCool(this.app));
                this.app.next();
            },
        },
    ];
}

class SMYTEdu extends IScene{
  //example of how to crate display text
  text = <div>
      <p> You sit back as some random educational video plays. The rest of the night passes in a blur of random explanation videos. By the end of it, you have a vague feeling of having learned many interesting facts.</p>
      </div>;
  btns = [
      {
          text: 'Continue',
          func: () => {
              this.app.changeEmployability(2);
              this.app.endCyle();
          },
      },
  ];
}

class SMYTRandom extends IScene{
  //example of how to crate display text
  text = <div>
      <p> You sit back as some random video plays. The rest of the night passes fairly pleasantly, with you sitting zombie-like in front of your laptop. You head to the bed, feeling like it was a night well wasted. </p>
      </div>;
  btns = [
      {
          text: 'Continue',
          func: () => {
              this.app.flipRefresh();
              this.app.endCyle();
          },
      },
  ];
}

//leads to SMYTTom, SMYTEdu, SMYTRandom
class SocialMediaYT extends IScene {
    //example of how to crate display text
    text = <div>
        <p> Feeling lazy, you just click over to your recommendations. Scanning down the list, you see a couple of options. You choose a video from: </p>
        </div>;
    btns = [
        {
            text: 'Tom Scott',
            func: () => {
                this.app.pushSceneNext(new SMYTTom(this.app));
                this.app.next();
            },
        },
        {
            text: 'An Educational Channel',
            func: () => {
                this.app.pushSceneNext(new SMYTEdu(this.app));
                this.app.next();
            },
        },

        {
            text: 'A Random Channel',
            func: () => {
                this.app.pushSceneNext(new SMYTRandom(this.app));
                this.app.next();
            },
        },
    ];
}

//leads to SocialMediaYT, SocialMediaTwitch
class SocialMediaStart extends IScene {
    //example of how to crate display text
    text = <div>
        <p> You think about what kind of video mood you're in tonight, and end up deciding on: </p>
        </div>;
    btns = [
        {
            text: 'YouTube',
            func: () => {
                this.app.pushSceneNext(new SocialMediaYT(this.app));
                this.app.next();
            },
        },
        {
            text: 'Twitch',
            func: () => {
                this.app.pushSceneNext(new SocialMediaTwitch(this.app));
                this.app.next();
            },
        },
    ];
}

export default SocialMediaStart;
