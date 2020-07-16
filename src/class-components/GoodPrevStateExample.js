import React from 'react';

export class GoodPrevStateExample extends React.Component {
  state = {
    isDisabled: false
  };

  toggleButton = () => this.setState(prevState => ({ isDisabled: !prevState.isDisabled }));

  toggleButton2Times = () => {
    for (let i = 0; i < 2; i++) {
      this.toggleButton();
    }
  };

  render() {
    return (
      <>
        <h3><span className="good">GOOD</span>: When setting state that relies on the previous state, do so as a function of previous state</h3>
        <button disabled={this.state.isDisabled}>I'm {this.state.isDisabled ? 'disabled' : 'enabled'}</button>
        <button onClick={this.toggleButton}>Toggle button state</button>
        <button onClick={this.toggleButton2Times}>Toggle button state 2 times</button>
      </>
    );
  }
}
