import IScene from '../IScene';
import React from "react";

class RandomReadingEff extends IScene {
    //example of how to crate display text
    text = <div>
        <p> The first one happens to be an article from the EFF about knowing your rights.
        It contains lots of detailed information about the best actions to take
        in various circumstances. You're glad this this happened to be at the top
        of your list and read it carefully. You then spend the rest of the night
        reading through other EFF articles. </p>
        </div>;

    btns = [
        {
            //every button needs a text field
            text: 'Continue',
            //lambda's tell the button how to behave
            func: () => {
                this.app.knowRights = true;
                this.app.changePrivacy(2);

                this.app.endCycle();
            },
        },
    ];
}

class RandomReadingWiki extends IScene {
    //example of how to crate display text
    text = <div>
        <p> The first one happens to be some random Wikipedia article. You spend the rest of falling down the rabbit hole of random links. </p>
        </div>;

    btns = [
        {
            //every button needs a text field
            text: 'Continue',
            //lambda's tell the button how to behave
            func: () => {
                this.app.endCycle();
            },
        },
    ];
}

class RandomReadingCourt extends IScene {
    //example of how to crate display text
    text = <div>
        <p> The first one happens to be a court case that you had bookmarked ages ago. You spend the evening pleasantly intellecuting stimulating evening dissecting this case and the opinions. </p>
        </div>;

    btns = [
        {
            //every button needs a text field
            text: 'Continue',
            //lambda's tell the button how to behave
            func: () => {
                this.app.changeEmployability(2);
                this.app.changePrivacy(2);

                this.app.endCycle();
            },
        },
    ];
}

class RandomReadingNews extends IScene {
    //example of how to crate display text
    text = <div>
        <p> The first one happens to be a random news story from a couple of weeks ago. You don’t know why you bookmarked this, it’s so boring. You end up nodding off as you’re reading. </p>
        </div>;

    btns = [
        {
            //every button needs a text field
            text: 'Continue',
            //lambda's tell the button how to behave
            func: () => {
                this.app.endCycle();
            },
        },
    ];
}

//leads to RandomReadingEff, RandomReadingWiki, RandomReadingCourt,
//         RandomReadingNews
class RandomReadingStart extends IScene {
    //example of how to crate display text
    text = <div>
        <p> You decide to go through your long reading list. You open the first
        one. </p>
        </div>;

    btns = [
        {
            //every button needs a text field
            text: 'Continue',
            //lambda's tell the button how to behave
            func: () => {
                var x = Math.random();

                if (x < 0.25) {
                    this.app.pushSceneNext(new RandomReadingEff(this.app))
                } else if (x < 0.5) {
                    this.app.pushSceneNext(new RandomReadingWiki(this.app))
                } else if (x < 0.75) {
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
