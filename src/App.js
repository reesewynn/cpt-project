import React, { Component } from 'react';
import './App.css';
import StatsBox from './StatsBox';
// import ThreadsBox from './ThreadsBox';
import ActionsBox from './ActionsBox';
import StoryBox from './StoryBox';
import ThreadPopup from './ThreadPopup';
import SceneLL from "./SceneLL";
import StartScreen from "./scenes/StartScreen";
import WeekDay from "./scenes/WeekDay";
import Continue from "./scenes/Continue";
import WeekEnd from "./scenes/WeekEnd";
// import build from './FireBuilder';

class App extends Component {

  targetBalance = 0;

  // finishedIntro = false;
  //insert remaining checkpoints here:

  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      days: 0,
      privacy: 0,
      criminality: 0,
      showPopup: true,
      storyText: "This should never show",
      weekday: false,
      popupText: "This is a popup test",
      actionProb: 0,
      refreshText: true,
      sceneLst: new SceneLL(),
      // nextScene: {},
      askedPass: false,
      //insert remaining flags here
    };
    this.state.sceneLst.pushNext(new StartScreen(this));
  }

  handleClick(i) {
    if (this.state.sceneLst.getBtns() == null) return;
    // if (this.state.sceneLst.getBtns() > i) {
    //   console.log("I got here");
      this.state.sceneLst.getBtns()[i].func();
    // }
  }

  endCycle() {
    //TODO: insert end of day here
    this.setState({actionProb: Math.random()});
    // this.setState({nextScene: this.state.nextScene.constructor(this)});
    if(this.state.weekday){
      this.addDays(5);
      this.state.sceneLst.pushNext(new WeekEnd(this));
    }
    else {
      this.addDays(2);
      this.state.sceneLst.pushNext(new WeekDay(this));

    }
    this.setState({weekday: !this.state.weekday});
    this.next();

    // this.state.sceneLst.getBtns().forEach((btn, i) => this.actionsText[i] = btn.text);
  }

  pushSceneNext(data) {
    this.state.sceneLst.pushNext(data);
  }

  pushSceneLast(data) {
    this.state.sceneLst.pushLast(data);
  }

  next() {
    this.state.sceneLst.pop();
    this.setState({refreshText: !this.state.refreshText});
  }

  addText(data) {
    let x = new Continue(this);
    x.text = data;
    this.state.sceneLst.pushNext(x);
  }

  addMoney(b) {
    this.targetBalance += b;
    this.maybeAnimate();
  }

  addDays(d) {
    this.targetDays += d;
    this.maybeAnimate();
  }

  maybeAnimate() {
    if ((this.targetBalance !== this.state.balance ||
          this.targetDays !== this.state.days) && this.animateInterval < 0) {
      this.animateInterval = setInterval(this.animate.bind(this), 30);
    }
  }

  animate() {
    let active = false;
    if (this.targetBalance !== this.state.balance) {
      let diff = this.targetBalance - this.state.balance;
      let sign = diff / Math.abs(diff);
      let change = Math.min(Math.max(Math.floor(0.1 * Math.abs(diff)), 2), Math.abs(diff));
      this.setState(prevState => {return {balance: prevState.balance + sign * change};});
      active = true;
    }

    if (this.targetDays !== this.state.days) {
      let diff = this.targetDays - this.state.days;
      let sign = diff / Math.abs(diff);
      this.setState(prevState => {return {days: prevState.days + sign};});
      active = true;
    }

    if (!active) {
      clearInterval(this.animateInterval);
      this.animateInterval = -1;
    }
  }

  static toDollars(amount) {
    return "$" + App.toThousandDelimited(amount);
  }

  static toThousandDelimited(amount) {
    return amount.toString().replace(/\d(?=(\d{3})+$)/g, '$&,');
  }

  render() {
    let actionsText = ['', '', ''];
    if(this.state.sceneLst != null) {
      this.state.sceneLst.getBtns().forEach((btn, i) => actionsText[i] = btn.text);
    }
    // console.log("test");
    return (
      <div className="app">
        <div className="main-grid">
          <StatsBox
            balance={App.toDollars(this.state.balance)}
            days={this.state.days}
            privacy={this.state.privacy}/>
          <StoryBox contents={this.state.storyText}/>
          <ThreadPopup visible={this.state.showPopup} popupText={this.state.sceneLst.getText()}/>
          <ActionsBox btnText={actionsText} handler={i => this.handleClick(i)}/>
        </div>
      </div>
    );
  }
}

export default App;
