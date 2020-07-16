import React from 'react';

// BAD: Don't set state that relies on the previous state without using the function of previous state

export class BadPrevStateExample extends React.Component {
  state = {
    isDisabled: false
  }

  toggleButton = () => this.setState({ isDisabled: !this.state.isDisabled })

  toggleButton2Times = () => {
    for (let i = 0; i < 2; i++) {
      this.toggleButton()
    }
  }

  render() {
    return (
      <>
        <h3><span className="bad">BAD</span>: Don't set state that relies on the previous state without using the function of previous state</h3>
        <button disabled={this.state.isDisabled}>I'm {this.state.isDisabled ? 'disabled' : 'enabled'}</button>
        <button onClick={this.toggleButton}>Toggle button state</button>
        <button onClick={this.toggleButton2Times}>Toggle button state 2 times</button>
      </>
    )
  }
}
