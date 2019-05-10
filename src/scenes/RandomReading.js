import IScene from '../IScene';
import React from "react";

class RandomReadingEff extends IScene {
    text = <div>
        <p> 
            The first one happens to be an article from the EFF about knowing 
            your rights. It contains lots of detailed information about the best 
            actions to take in various circumstances. 
        </p>
        <p>
            You're glad this this happened to be at the top of your list and 
            you read it carefully. You then spend the rest of the night reading 
            through other EFF articles. 
        </p>
    </div>;

    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.setKnowRights();
                this.app.changePrivacy(2);
                this.app.endCycle();
            },
        },
    ];
}

class RandomReadingWiki extends IScene {
    text = <div>
        <p> 
            The first one happens to be some random Wikipedia article. You spend 
            the rest of the night falling down the rabbit hole of random links. 
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

class RandomReadingCourt extends IScene {
    text = <div>
        <p> 
            The first one happens to be a court case that you had bookmarked 
            ages ago. You spend an pleasant, intellectually-stimulating evening 
            dissecting this case and the opinions. 
        </p>
    </div>;

    btns = [
        {
            text: 'Continue',
            func: () => {
                this.app.changeEmployability(4);
                this.app.changePrivacy(2);
                this.app.endCycle();
            },
        },
    ];
}

class RandomReadingNews extends IScene {
    text = <div>
        <p> 
            The first one happens to be a random news story from a couple of 
            weeks ago. You don’t know why you bookmarked this; it’s so boring. 
            You end up nodding off as you’re reading. 
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

//leads to RandomReadingEff, RandomReadingWiki, RandomReadingCourt,
//         RandomReadingNews
class RandomReadingStart extends IScene {
    text = <div>
        <p> 
            You decide to go through your long reading list and start clicking 
            through your bookmarks.
        </p>
    </div>;

    btns = [
        {
            text: 'Continue',
            func: () => {
                var x = Math.random();

                if (x < 0.4) {
                    this.app.pushSceneNext(new RandomReadingEff(this.app))
                } else if (x < 0.6) {
                    this.app.pushSceneNext(new RandomReadingWiki(this.app))
                } else if (x < 0.8) {
                    this.app.pushSceneNext(new RandomReadingCourt(this.app))
                } else {
                    this.app.pushSceneNext(new RandomReadingNews(this.app))
                }

                this.app.next();
            },
        },
    ];
}

export default RandomReadingStart;
